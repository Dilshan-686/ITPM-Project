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
                    <Styles.IconButton padding="6px">
                        <Icon name="trash" size={16} color="#FEA1A1" />
                    </Styles.IconButton>
                    <Styles.IconButtonList>
                        <Styles.IconButton padding="1px 4px" border="6px">
                            <Icon name="plus" size={14} color="#3a3a4e" />
                        </Styles.IconButton>
                        <h6>12</h6>
                        <Styles.IconButton padding="1px 4px" border="6px">
                            <Icon name="minus" size={14} color="#3a3a4e" />
                        </Styles.IconButton>
                    </Styles.IconButtonList>
                </Styles.ButtonSection>
            </Styles.CardItemDetailsSection>
        </Styles.CartCardContainer>
    );
};

export default CartCard;
