import * as Styles from './styles';
import MAIN_IMAGE from '../../images/homeMain.png';
import { Button, Divider, ShopCard } from '../../components';
import { authService, cartStorageService } from '../../shared';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ChatbotWindow from './ChatBox';
import { getProduct } from '../../services';

// const MockList_SW = [
//     { id: '1', price: '66.99', name: 'T-Shirt', isStockAvailable: true, availableStock: 12 },
//     { id: '2', price: '05.99', name: 'T-Shirt', isStockAvailable: false, availableStock: 0 },
//     { id: '3', price: '10.00', isStockAvailable: true, availableStock: 12 },
//     { id: '4', price: '16.59', name: 'T-Shirt', isStockAvailable: false, availableStock: 0 },
// ];

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

const Home = () => {
    const navigate = useNavigate();
    const [isUpdateCart, setIsUpdateCart] = useState(false);
    const [cartItems, setCartItems] = useState(cartStorageService.getCartItems() ?? []);
    const [products, setProducts] = useState([]);
    const [productsTypes, setProductsTypes] = useState([]);

    useEffect(() => {
        if (isUpdateCart) {
            setIsUpdateCart(false);
            console.log(cartItems);
            setCartItems(cartStorageService.getCartItems());
        }
    }, [cartItems, isUpdateCart]);

    useEffect(() => {
        getProduct().then((data) => {
            console.log(data, 'data list');
            if (data && data?.length) {
                const allproductTypes = [];
                const allProduct = [];

                data.forEach((data) => {
                    const item = {
                        description: data.description,
                        imgUrl: data.imgUrl,
                        price: data.price,
                        productCategory: data.productCategory,
                        id: data.productID,
                        name: data.productName,
                        isStockAvailable: data.quantity > 0,
                        availableStock: data.quantity ?? 0,
                    };
                    console.log(item, 'data list');
                    // put current item
                    allProduct.push(item);
                    // save cat
                    console.log(allproductTypes.find((c_type) => c_type === item.productCategory));
                    if (!allproductTypes.find((c_type) => c_type === item.productCategory)) {
                        allproductTypes.push(item.productCategory);
                    }
                });
                setProducts(allProduct);
                setProductsTypes(allproductTypes);
            }
        });
    }, []);

    useEffect(() => {
        console.log(products, 'PPPPPP', productsTypes, 'ttt');
    }, [products, productsTypes]);

    const GridItemList = (items) => {
        return items.map(({ price, name, isStockAvailable, id, availableStock }) => {
            return (
                <Styles.GridItem key={id}>
                    <ShopCard
                        price={price}
                        name={name}
                        isStockAvailable={isStockAvailable}
                        isActive={!isUpdateCart && cartItems.find((item) => item?.id === id)}
                        onClick={() => {
                            if (authService.authGuard()) {
                                handleShopCardOnClick(id, price, name, availableStock);
                                setIsUpdateCart(true);
                            }
                        }}
                    />
                </Styles.GridItem>
            );
        });
    };

    return (
        <div style={{ position: 'relative' }}>
            <Styles.HomeImageContainer>
                <Styles.HomeMainImage src={MAIN_IMAGE} height={300} alt="image" />
                <Styles.ContentContainer>
                    <Styles.Title>Evaluate Your Wardrobe: Find Your Style with [Clothing Website Name]</Styles.Title>
                    <Button
                        background="#92c7cf"
                        border="#FFFFFF"
                        label="Start Shopping Now"
                        onClick={() => {
                            if (authService.authGuard()) {
                                navigate('/cart');
                            } else {
                                navigate('/auth');
                            }
                        }}
                    />
                </Styles.ContentContainer>
            </Styles.HomeImageContainer>

            {products?.length && productsTypes?.length ? (
                <>
                    {productsTypes.map((type) => {
                        const createGridItem = products.filter((item) => item?.productCategory === type);
                        console.log('chk items', createGridItem);
                        return (
                            <Styles.CategorySection>
                                <Styles.Title>{type}</Styles.Title>
                                <Divider margin="18px 0" color="#AAD7D9" />
                                <Styles.GridContainer>{GridItemList(createGridItem)}</Styles.GridContainer>
                            </Styles.CategorySection>
                        );
                    })}
                </>
            ) : (
                <Styles.Nodata>Sorry. No Items Available at the moment</Styles.Nodata>
            )}
            <Styles.Chat>
                <ChatbotWindow />
            </Styles.Chat>
            {/* <Styles.CategorySection>
                <Styles.Title>KidsWear</Styles.Title>
                <Divider margin="18px 0 40px 0" color="#AAD7D9" />
                <Styles.GridContainer>{GridItemList(MockList_SW)}</Styles.GridContainer>
                <Styles.Chat>
                    <ChatbotWindow />
                </Styles.Chat>
            </Styles.CategorySection> */}
        </div>
    );
};

export default Home;
