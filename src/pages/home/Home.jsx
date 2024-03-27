import * as Styles from './styles';
import MAIN_IMAGE from '../../images/homeMain.png';
import { Button, Divider, ShopCard } from '../../components';
import { useState } from 'react';
import { Auth } from '../auth';
import { cartStorageService } from '../../shared';

const MockList_SW = [
    { id: '1', price: '66.99', name: 'T-Shirt', isStockAvailable: true, availableStock: 12 },
    { id: '2', price: '05.99', name: 'T-Shirt', isStockAvailable: false, availableStock: 0 },
    { id: '3', price: '10.00', isStockAvailable: true, availableStock: 12 },
    { id: '4', price: '16.59', name: 'T-Shirt', isStockAvailable: false, availableStock: 0 },
];

const handleShopCardOnClick = (id, price, name, availableStock) => {
    // in cart items
    const cartItems = cartStorageService.getCartItems();
    // check same item is there
    const existItem = cartItems.filter((item) => item.id === id);

    // existing item
    if (existItem[0]?.id) {
        const updateCartItems = cartItems.map((item) => {
            if (item.id === id) {
                return {
                    id,
                    price,
                    name,
                    availableStock,
                    quantity: (parseInt(item.quantity) + 1).toString(),
                };
            } else {
                return {
                    id: item.id,
                    price: item.price,
                    name: item.name,
                    availableStock: item.availableStock,
                    quantity: item.quantity,
                };
            }
        });
        cartStorageService.setCartItems(updateCartItems);
    } else {
        // new item
        cartStorageService.setCartItems([
            ...cartItems,
            {
                id,
                price,
                name,
                availableStock,
                quantity: 1,
            },
        ]);
    }
};

const GridItemList = (items) => {
    return items.map(({ price, name, isStockAvailable, id, availableStock }) => {
        return (
            <Styles.GridItem key={id}>
                <ShopCard
                    price={price}
                    name={name}
                    isStockAvailable={isStockAvailable}
                    onClick={() => handleShopCardOnClick(id, price, name, availableStock)}
                />
            </Styles.GridItem>
        );
    });
};

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <Auth closeModal={closeModal} isOpen={isOpen} />
            <Styles.HomeImageContainer>
                <Styles.HomeMainImage src={MAIN_IMAGE} height={300} alt="image" />
                <Styles.ContentContainer>
                    <Styles.Title>Evaluate Your Wardrobe: Find Your Style with [Clothing Website Name]</Styles.Title>
                    <Button background="#92c7cf" border="#FFFFFF" label="Start Shopping Now" onClick={openModal} />
                </Styles.ContentContainer>
            </Styles.HomeImageContainer>
            <Styles.CategorySection>
                <Styles.Title>SportsWear</Styles.Title>
                <Divider margin="18px 0" color="#AAD7D9" />
                <Styles.GridContainer>{GridItemList(MockList_SW)}</Styles.GridContainer>
            </Styles.CategorySection>
            <Styles.CategorySection>
                <Styles.Title>KidsWear</Styles.Title>
                UP COMING ..............
                <Divider margin="18px 0 40px 0" color="#AAD7D9" />
            </Styles.CategorySection>
        </div>
    );
};

export default Home;
