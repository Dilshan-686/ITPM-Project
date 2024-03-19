import * as Styles from './styles';
import MAIN_IMAGE from '../../images/homeMain.png';
import { Button, Divider } from '../../components';

const Home = () => {
    return (
        <div>
            <Styles.HomeImageContainer>
                <Styles.HomeMainImage src={MAIN_IMAGE} height={300} alt="image" />
                <Styles.ContentContainer>
                    <Styles.Title>Evaluate Your Wardrobe: Find Your Style with [Clothing Website Name]</Styles.Title>
                    <Button background="#92c7cf" border="#FFFFFF" label="Start Shopping Now" />
                </Styles.ContentContainer>
            </Styles.HomeImageContainer>
            <Styles.CategorySection>
                {/* todo add categories as your requirements using map  function dnt duplicate code */}
                <Styles.Title>SportsWear</Styles.Title>
                <Divider margin="18px 0" color="#AAD7D9" />
                Add your Items as required ....
            </Styles.CategorySection>
        </div>
    );
};

export default Home;
