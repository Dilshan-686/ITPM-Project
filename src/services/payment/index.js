import axios from '../axios';

const Checkout = async (usd) => {
    try {
        const response = await axios.post('/checkout', { usd });
        console.log(response, '<<,');
        return response;
    } catch (error) {
        return error;
    }
};

export default Checkout;
