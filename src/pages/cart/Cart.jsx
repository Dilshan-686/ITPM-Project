import * as Styles from './styles';
import { useEffect, useState } from 'react';
import { CartCard, Divider } from '../../components';
import { cartStorageService } from '../../shared';

// for now declare TAX as constraint
const TAX_RATE = 0.08;

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isStorageUpdate, setIsStorageUpdate] = useState(false);
    // initial load data
    useEffect(() => {
        const useItems = cartStorageService.getCartItems();
        if (useItems?.length) {
            setCartItems(useItems);
        }
        setIsStorageUpdate(false);
    }, [isStorageUpdate, setIsStorageUpdate]);

    //helpers
    //sub
    const getSubTotal = () => {
        let sub = 0;
        cartItems.forEach(({ price, quantity }) => {
            sub += parseInt(price) * quantity;
        });
        return sub;
    };

    //tax
    const getTax = () => {
        return Math.round(getSubTotal() * TAX_RATE * 100) / 100;
    };

    //full bill
    const getPurchasingTotal = () => {
        return Math.round(getSubTotal() + getTax() * 100) / 100;
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
                    <Styles.CardListContainer>{renderCartItemList()}</Styles.CardListContainer>
                </Styles.BagInnerContainer>
            </Styles.Bag>
            <Styles.Summary>
                <Styles.SummaryInnerContainer>
                    <Styles.Title> Purchasing Summary</Styles.Title>
                    <Divider margin="20px 0" color="#aad7d9" />
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
                </Styles.SummaryInnerContainer>
            </Styles.Summary>
        </Styles.CartPageContainer>
    );
};

export default CartPage;
