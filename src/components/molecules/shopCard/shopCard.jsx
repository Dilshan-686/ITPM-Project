import * as Styles from './styles';
import DEFAULT_IMAGE from './default.jpg';
import { Divider, Icon } from '../../atoms';

const ShopCard = ({ src, name, price, isStockAvailable }) => {
    return (
        <Styles.ShopCardContainer>
            <Styles.ShopCardInnerContainer>
                <Styles.ShopCardImage src={src || DEFAULT_IMAGE} />
                <h2> {name ? name : 'Name tag Available'}</h2>
                <Divider color="#AAD7D9" />
                <Styles.ShopCardDetails>
                    <Styles.ShopCardDetailsItem>
                        <h1>{`${price} $`}</h1>
                    </Styles.ShopCardDetailsItem>
                    <Styles.ShopCardDetailsItem>
                        <Styles.IconContainer>
                            {isStockAvailable ? (
                                <>
                                    <Icon name="shopping-bag" /> Add to cart
                                </>
                            ) : (
                                <>
                                    <Icon name="clock" />
                                    Coming soon
                                </>
                            )}
                        </Styles.IconContainer>
                        <Styles.IconContainer>
                            <>
                                <Icon name="star" color={isStockAvailable ? '#92c7cf' : '#3a3a4e'} />
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
