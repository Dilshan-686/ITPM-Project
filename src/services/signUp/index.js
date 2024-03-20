import axios from '../axios';

const SignUp = async (UserId, UserName, PassWord) => {
    try {
        const response = await axios.post('/auth/sign-up', { UserId, UserName, PassWord });
        return response;
    } catch (error) {
        return error;
    }
};

export default SignUp;
