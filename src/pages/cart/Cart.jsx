import { Divider } from '../../components';
import * as Styles from './styles';

const CartPage = () => {
    return (
        <Styles.CartPageContainer>
            <Styles.Bag>
                <Styles.BagInnerContainer>
                    @todo need find much fade colors to this page
                    <Styles.Title>Your Shopping Bag</Styles.Title>
                    <Divider color="black" />
                    @todo add active cart items here
                    {/* <CheckoutCard /> */}
                </Styles.BagInnerContainer>
            </Styles.Bag>
            <Styles.Summary>
                <Styles.SummaryInnerContainer>
                    @todo need make current cart summary here cards and items
                </Styles.SummaryInnerContainer>
            </Styles.Summary>
        </Styles.CartPageContainer>
    );
};

export default CartPage;
