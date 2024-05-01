import { authService } from '../../shared';
import axios from '../axios';

const callUserDangerZone = async () => {
    try {
        const response = await axios.get('/auth/user-danger-zone', {
            headers: {
                Authorization: authService.getAccessToken(),
            },
        });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default callUserDangerZone;
