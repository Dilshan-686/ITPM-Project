import { authService } from '../../shared';
import axios from '../axios';

const Checkout = async (usd) => {
    try {
        const response = await axios.post(
            '/checkout',
            { usd },
            {
                headers: {
                    Authorization: authService.getAccessToken(),
                },
            }
        );
        console.log(response, '<<,');
        return response;
    } catch (error) {
        return error;
    }
};

export default Checkout;
