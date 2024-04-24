import * as Styles from './styles';
import DEFAULT_IMAGE from './default.jpg';
import { Divider, Icon } from '../../atoms';

const ShopCard = ({ src, name, price, isStockAvailable, onClick, isActive }) => {
    return (
        <Styles.ShopCardContainer onClick={onClick}>
            {isActive && (
                <>
                    <Styles.Icon>
                        <Icon name="check-square" size={24} color="white" />
                    </Styles.Icon>
                    <Styles.InCartIcon />
                </>
            )}
            <Styles.ShopCardInnerContainer>
                <Styles.ShopCardImage src={src || DEFAULT_IMAGE} />
                <h2> {name ? name : 'Name tag Available'}</h2>
                <Divider color="#AAD7D9" />
                <Styles.ShopCardDetails>
                    <Styles.ShopCardDetailsItem>
                        <h1>{`${price} $`}</h1>
                    </Styles.ShopCardDetailsItem>
                    <Styles.ShopCardDetailsItem>
                        <Styles.IconContainer color={isStockAvailable ? '#1f7e8d' : undefined}>
                            {isStockAvailable ? (
                                <>
                                    <Icon name="shopping-bag" color="#1f7e8d" /> Add to cart
                                </>
                            ) : (
                                <>
                                    <Icon name="clock" />
                                    Coming soon
                                </>
                            )}
                        </Styles.IconContainer>
                        <Styles.IconContainer color={isStockAvailable ? '#1f7e8d' : undefined}>
                            <>
                                <Icon name="star" color={isStockAvailable ? '#1f7e8d' : '#3a3a4e'} />
                                {isStockAvailable ? 'Stock available' : 'Out of Stock'}
                            </>
                        </Styles.IconContainer>
                    </Styles.ShopCardDetailsItem>
                </Styles.ShopCardDetails>
            </Styles.ShopCardInnerContainer>
        </Styles.ShopCardContainer>
    );
};

export default ShopCard;
