import * as yup from 'yup';

export const regRules = yup.object({
    user_name: yup.string().min(3, 'Минимум 3 символа').required('Имя обязательно'),
    email: yup.string().email('Некорректный email').required('Email обязателен'),
    age: yup.number().positive().integer().min(18, 'Минимум 18 лет').required('Возраст обязателен'),
    password: yup.string().min(6, 'Минимум 6 символов').required('Пароль обязателен'),
    confirm_password: yup
        .string()
        .oneOf([yup.ref('password'), undefined], 'Пароли не совпадают')
        .required('Подтвердите пароль'),
}).required();