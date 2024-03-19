import * as Styles from './styles';
import { NavigationBar } from './components';

const HomeLayout = ({ children }) => {
    return (
        <>
            <NavigationBar />
            <Styles.LayoutContainer>
                <Styles.LayoutInnerContainer>{children}</Styles.LayoutInnerContainer>
            </Styles.LayoutContainer>
        </>
    );
};

export default HomeLayout;
