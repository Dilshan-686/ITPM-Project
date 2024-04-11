import * as Styles from './styles';
import { NavigationBar } from './components';
import { Tostify } from '../components';

const HomeLayout = ({ children }) => {
    return (
        <>
            <Tostify />
            <NavigationBar />
            <Styles.LayoutContainer>
                <Styles.LayoutInnerContainer>{children}</Styles.LayoutInnerContainer>
            </Styles.LayoutContainer>
        </>
    );
};

export default HomeLayout;
