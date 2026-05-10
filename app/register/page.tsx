'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { revalidatePostsPage } from '@/app/posts/create/actions';

const postSchema = yup.object({
    title: yup
        .string()
        .required('Заголовок обязателен')
        .min(3, 'Минимум 3 символа')
        .max(100, 'Максимум 100 символов'),
    body: yup
        .string()
        .required('Текст поста обязателен')
        .min(10, 'Минимум 10 символов')
        .max(1000, 'Максимум 1000 символов'),
}).required();

type PostFormData = yup.InferType<typeof postSchema>;

export default function CreatePostPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors } } = useForm<PostFormData>({
        resolver: yupResolver(postSchema),
        mode: 'onChange',
    });

    const onSubmit = async (data: PostFormData) => {
        setIsLoading(true);
        setServerError(null);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: data.title,
                    body: data.body,
                    userId: 1,
                }),
            });

            if (!response.ok) {
                throw new Error(`Ошибка сервера: ${response.status}`);
            }

            const result = await response.json();
            console.log('Пост создан:', result);

            // Инвалидируем кэш страницы /posts, чтобы дата обновилась при переходе назад
            await revalidatePostsPage();

            router.push('/posts');
        } catch (err) {
            setServerError(err instanceof Error ? err.message : 'Неизвестная ошибка');
            setIsLoading(false);
        }
    };

    return (
        <main style={styles.main}>
            <div style={styles.container}>
                <div style={styles.card}>
                    <div style={styles.header}>

                        <h1 style={styles.title}>Новый пост</h1>
                        <p style={styles.subtitle}>Заполните форму для публикации</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>
                                <span style={styles.labelIcon}>📌</span> Заголовок
                            </label>
                            <input
                                {...register('title')}
                                placeholder="Введите заголовок поста"
                                style={styles.input}
                                disabled={isLoading}
                            />
                            {errors.title && (
                                <span style={styles.error}>{errors.title.message}</span>
                            )}
                        </div>

                        <div style={styles.inputGroup}>
                            <label style={styles.label}>
                                <span style={styles.labelIcon}>📝</span> Текст поста
                            </label>
                            <textarea
                                {...register('body')}
                                placeholder="Введите текст поста..."
                                rows={6}
                                style={styles.textarea}
                                disabled={isLoading}
                            />
                            {errors.body && (
                                <span style={styles.error}>{errors.body.message}</span>
                            )}
                        </div>

                        {serverError && (
                            <div style={styles.serverError}>
                                ⚠️ {serverError}
                            </div>
                        )}

                        <button
                            type="submit"
                            style={isLoading ? styles.buttonLoading : styles.button}
                            disabled={isLoading}
                        >
                            {isLoading ? ' Публикация...' : 'Опубликовать пост'}
                        </button>

                        <button
                            type="button"
                            style={styles.cancelButton}
                            onClick={() => router.push('/posts')}
                            disabled={isLoading}
                        >
                            ← Отмена
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}

const styles = {
    main: {
        minHeight: '100vh',
        background: 'rgba(89,65,39,0.8)',
        padding: '40px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        maxWidth: '560px',
    },
    card: {
        background: 'white',
        borderRadius: '24px',
        padding: '40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    },
    header: {
        textAlign: 'center' as const,
        marginBottom: '32px',
    },
    icon: {
        fontSize: '64px',
        display: 'block',
        marginBottom: '12px',
    },
    title: {
        fontSize: '32px',
        fontWeight: 700,
        color: '#403e3e',
        margin: '0 0 8px 0',
    },
    subtitle: {
        fontSize: '15px',
        color: '#403e3e',
        margin: 0,
    },
    form: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '20px',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '8px',
    },
    label: {
        fontSize: '14px',
        fontWeight: 600,
        color: '#424141',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
    },
    labelIcon: {
        fontSize: '16px',
    },
    input: {
        padding: '14px 16px',
        color: '#3c3b3a',
        fontSize: '16px',
        border: '2px solid #e0e0e0',
        borderRadius: '12px',
        outline: 'none',
        transition: 'all 0.3s ease',
        fontFamily: 'inherit',
    },
    textarea: {
        padding: '14px 16px',
        color: '#3c3b3a',
        fontSize: '16px',
        border: '2px solid #e0e0e0',
        borderRadius: '12px',
        outline: 'none',
        resize: 'vertical' as const,
        transition: 'all 0.3s ease',
        fontFamily: 'inherit',
        lineHeight: '1.5',
    },
    error: {
        fontSize: '13px',
        color: '#e74c3c',
        marginTop: '2px',
    },
    serverError: {
        padding: '12px 16px',
        background: '#fdf0ef',
        border: '1px solid #f5c6c2',
        borderRadius: '10px',
        fontSize: '14px',
        color: '#c0392b',
    },
    button: {
        padding: '16px',
        fontSize: '16px',
        fontWeight: 600,
        color: 'white',
        background: 'rgba(89,65,39,0.8)',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
        marginTop: '4px',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
    },
    buttonLoading: {
        padding: '16px',
        fontSize: '16px',
        fontWeight: 600,
        color: 'white',
        background: '#ccc',
        border: 'none',
        borderRadius: '12px',
        cursor: 'not-allowed',
        marginTop: '4px',
    },
    cancelButton: {
        padding: '12px',
        fontSize: '14px',
        fontWeight: 500,
        color: 'rgba(89,65,39,0.8)',
        background: 'transparent',
        border: '2px solid #e0e0e0',
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'border-color 0.2s ease',
    },
};