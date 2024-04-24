import { authService } from '../../shared';
import axios from '../axios';

const getPaymentHistory = async (price) => {
    try {
        const { data } = await axios.post(
            '/payment/user-history',
            {
                price,
            },
            {
                headers: {
                    Authorization: authService.getAccessToken(),
                },
            }
        );
        return data;
    } catch (error) {
        console.error(error);
    }
};

export default getPaymentHistory;
