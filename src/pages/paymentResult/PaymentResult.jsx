import { useNavigate, useParams } from 'react-router-dom';
import { Button, Icon } from '../../components';
import * as Styles from './styles';
import React, { useEffect } from 'react';
import { savePaymentHistory } from '../../services';
import { cartStorageService } from '../../shared';

const PaymentResult = () => {
    const navigate = useNavigate();
    const params = useParams();
    const isSuccuss = window.location.pathname.includes('/cart/checkout/success');

    useEffect(() => {
        // save purchase history to generate report
        if (cartStorageService.getCartItems().length > 0) {
            savePaymentHistory(params.price);
            cartStorageService.clearCart();
        }
    }, [params]);

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
