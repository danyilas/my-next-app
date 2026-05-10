import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import { Clock } from '@/app/posts/create/clock';

export default async function PostsPage() {
    noStore();

    const now = new Date();

    const formattedDate = now.toLocaleDateString('ru-RU', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const isoTime = now.toISOString();

    return (
        <main style={styles.main}>
            <div style={styles.container}>
                <div style={styles.card}>
                    <div style={styles.header}>
                        <h1 style={styles.title}>Страница постов</h1>
                        <p style={styles.subtitle}>Управление вашими публикациями</p>
                    </div>

                    <div style={styles.dateTimeContainer}>
                        <div style={styles.dateCard}>
                            <span style={styles.dateCardIcon}>📅</span>
                            <div style={styles.dateCardLabel}>Дата</div>
                            <div style={styles.dateCardValue}>{formattedDate}</div>
                        </div>

                        <div style={styles.timeCard}>
                            <span style={styles.timeCardIcon}>🕐</span>
                            <div style={styles.timeCardLabel}>Время</div>

                            <Clock />
                        </div>
                    </div>

                    <div style={styles.isoContainer}>
                        <span style={styles.isoLabel}>ISO 8601:</span>
                        <code style={styles.isoCode}>{isoTime}</code>
                    </div>

                    <Link href="/posts/create" style={styles.link}>
                        <button style={styles.button}>
                            <span style={styles.buttonIcon}></span>
                            Создать новый пост
                        </button>
                    </Link>

                    <div style={styles.footer}>
                        <Link href="/" style={styles.footerLink}>
                            ← На главную
                        </Link>
                    </div>
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
        maxWidth: '700px',
    },
    card: {
        background: 'white',
        borderRadius: '24px',
        padding: '50px 40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        textAlign: 'center' as const,
    },
    header: {
        marginBottom: '40px',
    },
    icon: {
        fontSize: '72px',
        display: 'block',
        marginBottom: '15px',
    },
    title: {
        fontSize: '36px',
        fontWeight: 700,
        color: '#333',
        margin: '0 0 10px 0',
    },
    subtitle: {
        fontSize: '16px',
        color: '#403e3e',
        margin: 0,
    },
    dateTimeContainer: {
        display: 'flex',
        gap: '20px',
        marginBottom: '25px',
        flexWrap: 'wrap' as const,
        justifyContent: 'center',
    },
    dateCard: {
        flex: '1 1 250px',
        background: 'rgba(89,65,39,0.8)',
        padding: '25px',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '10px',
    },
    dateCardIcon: {
        fontSize: '32px',
    },
    dateCardLabel: {
        fontSize: '14px',
        color: 'rgba(255,255,255,0.9)',
        fontWeight: 500,
    },
    dateCardValue: {
        fontSize: '16px',
        color: 'white',
        fontWeight: 600,
        textTransform: 'capitalize' as const,
    },
    timeCard: {
        flex: '1 1 250px',
        background: 'rgba(89,65,39,0.8)',
        padding: '25px',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '10px',
    },
    timeCardIcon: {
        fontSize: '32px',
    },
    timeCardLabel: {
        fontSize: '14px',
        color: 'rgba(255,255,255,0.9)',
        fontWeight: 500,
    },
    isoContainer: {
        background: '#f8f9fa',
        padding: '15px 20px',
        borderRadius: '12px',
        marginBottom: '30px',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '5px',
    },
    isoLabel: {
        fontSize: '12px',
        color: '#666',
        fontWeight: 600,
        textTransform: 'uppercase' as const,
        letterSpacing: '1px',
    },
    isoCode: {
        fontSize: '14px',
        color: 'rgba(89,65,39,0.8)',
        fontWeight: 600,
        fontFamily: 'monospace',
    },
    link: {
        textDecoration: 'none',
        display: 'block',
    },
    button: {
        width: '100%',
        padding: '18px 32px',
        fontSize: '18px',
        fontWeight: 600,
        color: 'white',
        background: 'rgba(89,65,39,0.8)',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    buttonIcon: {
        fontSize: '20px',
    },
    footer: {
        marginTop: '30px',
        paddingTop: '20px',
        borderTop: '1px solid #e0e0e0',
    },
    footerLink: {
        color: 'rgba(89,65,39,0.8)',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: 500,
    },
};