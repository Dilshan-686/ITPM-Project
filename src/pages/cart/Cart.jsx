import { CartCard, Divider } from '../../components';
import * as Styles from './styles';

const CartPage = () => {
    return (
        <Styles.CartPageContainer>
            <Styles.Bag>
                <Styles.BagInnerContainer>
                    <Styles.Title>Your Shopping Bag</Styles.Title>
                    <Divider margin="20px 0" color="#aad7d9" />
                    <Styles.CardListContainer>
                        <CartCard />
                        <CartCard />
                        <CartCard />
                    </Styles.CardListContainer>
                </Styles.BagInnerContainer>
            </Styles.Bag>
            <Styles.Summary>
                <Styles.SummaryInnerContainer>
                    <Styles.Title> Purchasing Summary</Styles.Title>
                    <Divider margin="20px 0" color="#aad7d9" />
                    <Styles.SummaryItemContainer>
                        <Styles.SummaryItemTitle>Subtotal</Styles.SummaryItemTitle>
                        <Styles.SummaryItemValue>55$</Styles.SummaryItemValue>
                    </Styles.SummaryItemContainer>
                    <Styles.SummaryItemContainer>
                        <Styles.SummaryItemTitle>Tax and other fee</Styles.SummaryItemTitle>
                        <Styles.SummaryItemValue>4$</Styles.SummaryItemValue>
                    </Styles.SummaryItemContainer>
                    <Styles.SummaryItemContainer padding="36px">
                        <Styles.SummaryItemTitle>Purchasing Total</Styles.SummaryItemTitle>
                        <Styles.SummaryItemValue>59$</Styles.SummaryItemValue>
                    </Styles.SummaryItemContainer>
                </Styles.SummaryInnerContainer>
            </Styles.Summary>
        </Styles.CartPageContainer>
    );
};

export default CartPage;
