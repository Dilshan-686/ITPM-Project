import { authService } from '../../shared';
import axios from '../axios';

const callChatbot = async (message) => {
    try {
        const response = await axios.post(
            '/chat-with-bot',
            {
                message,
            },
            {
                headers: {
                    Authorization: authService.getAccessToken(),
                },
            }
        );
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default callChatbot;
