import * as Styles from './styles';
import DEFAULT_IMAGE from './default.jpg';
import { useAuthGuard } from '../../hooks/useAuthGuard';
import { authService, cartStorageService } from '../../shared';
import { useEffect, useState } from 'react';
import { callUserDangerZone, getUser } from '../../services';
import { Button, Spinner } from '../../components';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UserProfilePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isDeleteLoading, setIsDeleteLoading] = useState(false);
    const [userData, setUserData] = useState(null);

    const navigate = useNavigate();
    useAuthGuard();

    const handleUserAccountDelete = async () => {
        setIsDeleteLoading(true);
        const response = await callUserDangerZone();

        if (response.data?.error) {
            toast.error(response.data?.error);
        } else if (response.data.message) {
            toast.warn(response.data?.message);
        }
        // clear data
        authService.clearAuth();
        cartStorageService.clearCart();

        setIsDeleteLoading(false);
        // navigate logout
        navigate('/');
    };

    useEffect(() => {
        getUser()
            .then((data) => {
                if (!data.error) {
                    setUserData(data.data?.user?.UserName);
                }
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
                toast.warn(' fail to find user. Please try again shorty');
            });
    }, []);

    if (!authService.authGuard()) {
        return null;
    }
    return (
        <Styles.UserProfilePageContainer>
            <Styles.Image src={DEFAULT_IMAGE} alt="default-image" />
            {!isLoading ? (
                <>
                    <Styles.TextContainer>
                        <h1>{`UserName  ${userData}`}</h1>
                    </Styles.TextContainer>
                    <Button
                        background="rgb(255, 130, 130)"
                        width="200px"
                        label="Delete Account"
                        onClick={handleUserAccountDelete}
                        isLoading={isDeleteLoading}
                        disabled={isDeleteLoading}
                    />
                </>
            ) : (
                <Spinner />
            )}
        </Styles.UserProfilePageContainer>
    );
};

export default UserProfilePage;
