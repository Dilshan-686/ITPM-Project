import { authService } from '../../shared';
import axios from '../axios';

const savePaymentHistory = async (price) => {
    try {
        await axios.post(
            '/checkout/success/save-payment',
            {
                price,
            },
            {
                headers: {
                    Authorization: authService.getAccessToken(),
                },
            }
        );
    } catch (error) {
        console.error(error);
    }
};

export default savePaymentHistory;
