import * as Styles from './styles';
import DEFAULT_IMAGE from './default.jpg';
import { Icon } from '../../atoms';

const CartCard = ({ src, name, price, quantity, onClickAdd, onClickRemove, onClickDelete }) => {
    return (
        <Styles.CartCardContainer>
            <Styles.ImageContainer src={src ?? DEFAULT_IMAGE} />
            <Styles.CardItemDetailsSection>
                <Styles.TextSection>
                    <h4>{name ? name.toLocaleUpperCase() : 'Name tag not available'}</h4>
                    <h5>{price}</h5>
                </Styles.TextSection>
                <Styles.ButtonSection>
                    <Styles.IconButton padding="6px">
                        <Icon name="trash" size={16} color="#FEA1A1" onClick={onClickDelete} />
                    </Styles.IconButton>
                    <Styles.IconButtonList>
                        <Styles.IconButton padding="1px 4px" border="6px">
                            <Icon name="plus" size={14} color="#3a3a4e" onClick={onClickAdd} />
                        </Styles.IconButton>
                        <h6>{parseInt(quantity) < 10 ? `0${quantity}` : quantity}</h6>
                        <Styles.IconButton padding="1px 4px" border="6px">
                            <Icon name="minus" size={14} color="#3a3a4e" onClick={onClickRemove} />
                        </Styles.IconButton>
                    </Styles.IconButtonList>
                </Styles.ButtonSection>
            </Styles.CardItemDetailsSection>
        </Styles.CartCardContainer>
    );
};

export default CartCard;
