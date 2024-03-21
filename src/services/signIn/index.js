import axios from '../axios';

const SignIN = async (UserName, PassWord) => {
    try {
        const response = await axios.post('/auth/sign-in', { UserName, PassWord });
        return response;
    } catch (error) {
        return error;
    }
};

export default SignIN;
