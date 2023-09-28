const VALID_EMAIL_ENDINGS = ['gmail.com', 'outlook.com', 'yandex.ru'];

export const validate = (email) => {
    return VALID_EMAIL_ENDINGS.some(ending => email.endsWith(ending));
}

export const validateAsync = async (email) => {
    return new Promise(resolve => {
        resolve(validate(email));
    });
}

export const validateWithThrow = (email) => {
    if (validate(email)) {
        return true;
    }
    throw new Error('Invalid email');
}

export const validateWithLog = (email) => {
    if (validate(email)) {
        console.log(`${email} ends with a valid ending`);
        return true;
    }
    console.log(`${email} does not have a valid ending`);
    return false;
}
