import * as Styles from './styles';
import DEFAULT_IMAGE from './default.jpg';
import { Icon } from '../../atoms';

const CartCard = ({ src }) => {
    return (
        <Styles.CartCardContainer>
            <Styles.ImageContainer src={src ?? DEFAULT_IMAGE} />
            <Styles.CardItemDetailsSection>
                <Styles.TextSection>
                    <h4>Name of he Item</h4>
                    <h5>MockingPrice 4$</h5>
                </Styles.TextSection>
                <Styles.ButtonSection>
                    <Styles.IconButton>
                        <Icon name="trash" size={18} color="#FEA1A1" />
                    </Styles.IconButton>
                    <Styles.IconButton>
                        <Icon name="plus" size={18} color="#3a3a4e" />
                        <h6>12</h6>
                        <Icon name="minus" size={18} color="#3a3a4e" />
                    </Styles.IconButton>
                </Styles.ButtonSection>
            </Styles.CardItemDetailsSection>
        </Styles.CartCardContainer>
    );
};

export default CartCard;
