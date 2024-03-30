import * as Styles from './styles';
import { useEffect, useState } from 'react';
import { Button, CartCard, Divider, Icon } from '../../components';
import { cartStorageService } from '../../shared';
import { Checkout } from '../../services';

// for now declare TAX as constraint
const TAX_RATE = 0.08;

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isStorageUpdate, setIsStorageUpdate] = useState(false);
    // initial load data
    useEffect(() => {
        const useItems = cartStorageService.getCartItems();
        setCartItems(useItems);
        setIsStorageUpdate(false);
    }, [isStorageUpdate, setIsStorageUpdate]);

    //helpers
    //sub
    const getSubTotal = () => {
        let sub = 0;
        cartItems.forEach(({ price, quantity }) => {
            sub += parseFloat(price).toFixed(2) * quantity;
        });
        return sub;
    };

    //tax
    const getTax = () => {
        return Math.round(getSubTotal() * TAX_RATE * 100) / 100;
    };

    //full bill
    const getPurchasingTotal = () => {
        const total = getSubTotal() + getTax();
        return Math.round(total * 100) / 100;
    };

    //remove item by id
    const onClickDeleteCartItem = (id) => {
        const userItems = cartStorageService.getCartItems();
        const updatedItems = userItems.filter((item) => item.id !== id);
        cartStorageService.setCartItems(updatedItems);
        setIsStorageUpdate(true);
    };

    //remove decrease quantity
    const onClickRemoveSingleItem = (id) => {
        const userItems = cartStorageService.getCartItems();
        const updatedItems = [];
        userItems.forEach((item) => {
            if (item.id === id) {
                if (parseInt(item.quantity) === 1) {
                    onClickDeleteCartItem(id);
                } else {
                    updatedItems.push({
                        ...item,
                        quantity: (parseInt(item.quantity) - 1).toLocaleString(),
                    });
                }
            } else {
                updatedItems.push(item);
            }
        });
        cartStorageService.setCartItems(updatedItems);
        setIsStorageUpdate(true);
    };

    //add increase quantity
    const onClickAddSingleItem = (id) => {
        const userItems = cartStorageService.getCartItems();
        const updatedItems = [];
        userItems.forEach((item) => {
            if (item.id === id) {
                updatedItems.push({
                    ...item,
                    quantity: (parseInt(item.quantity) + 1).toLocaleString(),
                });
            } else {
                updatedItems.push(item);
            }
        });
        cartStorageService.setCartItems(updatedItems);
        setIsStorageUpdate(true);
    };

    //jsx helper
    //card list
    const renderCartItemList = () => {
        return cartItems.map(({ name, quantity, price, src, id }) => {
            return (
                <CartCard
                    key={id}
                    name={name}
                    quantity={quantity}
                    price={price}
                    src={src}
                    onClickDelete={() => onClickDeleteCartItem(id)}
                    onClickRemove={() => onClickRemoveSingleItem(id)}
                    onClickAdd={() => onClickAddSingleItem(id)}
                />
            );
        });
    };

    return (
        <Styles.CartPageContainer>
            <Styles.Bag>
                <Styles.BagInnerContainer>
                    <Styles.Title>Your Shopping Bag</Styles.Title>
                    <Divider margin="20px 0" color="#aad7d9" />
                    <Styles.CardListContainer>
                        {cartItems?.length ? (
                            renderCartItemList()
                        ) : (
                            <Styles.NoData>
                                <Icon name="shopping-cart" size={64} color="#92c7cf" />
                                <h2>No items in your cart</h2>
                                <h2>Keep Shopping</h2>
                            </Styles.NoData>
                        )}
                    </Styles.CardListContainer>
                </Styles.BagInnerContainer>
            </Styles.Bag>
            <Styles.Summary>
                <Styles.SummaryInnerContainer>
                    <Styles.Title> Purchasing Summary</Styles.Title>
                    <Divider margin="20px 0" color="#aad7d9" />
                    <Styles.Content>
                        <Styles.DetailsSection>
                            <Styles.SummaryItemContainer>
                                <Styles.SummaryItemTitle>Subtotal</Styles.SummaryItemTitle>
                                <Styles.SummaryItemValue>{getSubTotal()}$</Styles.SummaryItemValue>
                            </Styles.SummaryItemContainer>
                            <Styles.SummaryItemContainer>
                                <Styles.SummaryItemTitle>Tax and other fee</Styles.SummaryItemTitle>
                                <Styles.SummaryItemValue>{getTax()}$</Styles.SummaryItemValue>
                            </Styles.SummaryItemContainer>
                            <Styles.SummaryItemContainer padding="36px">
                                <Styles.SummaryItemTitle>Purchasing Total</Styles.SummaryItemTitle>
                                <Styles.SummaryItemValue>{getPurchasingTotal()}$</Styles.SummaryItemValue>
                            </Styles.SummaryItemContainer>
                        </Styles.DetailsSection>
                        <Styles.ButtonSection>
                            <Button
                                onClick={async () => {
                                    const response = await Checkout(getPurchasingTotal());
                                    console.log(response);
                                    window.location.replace(response.data);
                                }}
                                background="#aad7d9"
                                border="#92c7cf"
                                disabled={getPurchasingTotal() === 0}
                                label={getPurchasingTotal() === 0 ? 'No Items Selected' : 'Proceed To Checkout'}
                            />
                        </Styles.ButtonSection>
                    </Styles.Content>
                </Styles.SummaryInnerContainer>
            </Styles.Summary>
        </Styles.CartPageContainer>
    );
};

export default CartPage;
