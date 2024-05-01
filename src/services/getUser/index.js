import { authService } from '../../shared';
import axios from '../axios';

const getUser = async () => {
    try {
        const response = await axios.get('/auth/get-user', {
            headers: {
                Authorization: authService.getAccessToken(),
            },
        });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default getUser;
