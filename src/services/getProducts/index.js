import { authService } from '../../shared';
import axios from '../axios';

const getProduct = async (price) => {
    try {
        const { data } = await axios.get('/product', {
            headers: {
                Authorization: authService.getAccessToken(),
            },
        });
        return data;
    } catch (error) {
        console.error(error);
    }
};

export default getProduct;
