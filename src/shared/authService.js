export const saveAccessToken = (token) => {
    localStorage.setItem('accessToken', token);
};

export const getAccessToken = (token) => {
    return localStorage.getItem('accessToken', token);
};

export const authGuard = () => {
    return localStorage.getItem('accessToken') ? true : false;
};
