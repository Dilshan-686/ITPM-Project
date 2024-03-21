import * as Styles from './styles';
import MAIN_IMAGE from '../../images/homeMain.png';
import { Button, Divider, ShopCard } from '../../components';
import { useState } from 'react';
import { Auth } from '../auth';

const MockList_SW = [
    { price: '66.99', name: 'T-Shirt', isStockAvailable: true },
    { price: '05.99', name: 'T-Shirt', isStockAvailable: false },
    { price: '10.00', isStockAvailable: true },
    { price: '16.59', name: 'T-Shirt', isStockAvailable: false },
];

const GridItemList = (items) => {
    return items.map(({ price, name, isStockAvailable }) => {
        return (
            <Styles.GridItem>
                <ShopCard price={price} name={name} isStockAvailable={isStockAvailable} />
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
