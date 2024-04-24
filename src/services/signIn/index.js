import { authService } from '../../shared';
import axios from '../axios';

const SignIN = async (UserName, PassWord) => {
    try {
        const response = await axios.post('/auth/sign-in', { UserName, PassWord });
        if (response.data?.accessToken) {
            authService.saveAccessToken(response.data?.accessToken);
        }
        return response;
    } catch (error) {
        return error;
    }
};

export default SignIN;
