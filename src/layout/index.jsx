import * as Styles from './styles';
import { NavigationBar } from './components';

const HomeLayout = ({ children }) => {
    return (
        <>
            <NavigationBar />
            <Styles.LayoutContainer>{children}</Styles.LayoutContainer>
        </>
    );
};

export default HomeLayout;
