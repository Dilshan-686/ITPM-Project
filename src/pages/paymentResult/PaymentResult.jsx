import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '../../components';
import * as Styles from './styles';

const PaymentResult = () => {
    const navigate = useNavigate();
    const isSuccuss = window.location.pathname.includes('/cart/checkout/success');

    return (
        <Styles.PaymentResultContainer isSuccuss={isSuccuss}>
            <Styles.TextMsgContainer>
                <Icon name={isSuccuss ? 'check-circle' : 'x-circle'} size={64} color={isSuccuss ? '#92c7cf' : 'pink'} />
                <label>{isSuccuss ? 'Payment Successful' : 'Payment Unsuccessful'}l</label>
            </Styles.TextMsgContainer>
            <Styles.ButtonSection>
                <Button label="Back To Home" onClick={() => navigate('/')} />
            </Styles.ButtonSection>
        </Styles.PaymentResultContainer>
    );
};

export default PaymentResult;
