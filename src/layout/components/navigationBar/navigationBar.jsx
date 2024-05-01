import { useLocation, useNavigate } from 'react-router-dom';
import { Divider, Icon } from '../../../components';
import * as Styles from './styles';
import React, { useState, useEffect } from 'react';
import LOGO from './logo.svg';
import { authService, cartStorageService } from '../../../shared';

const NavigationBar = () => {
    const auth = authService.authGuard();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const path = useLocation();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const onClickHandleNavigate = (pathname) => {
        navigate({ pathname });
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('disable-scroll');
        } else {
            document.body.classList.remove('disable-scroll');
        }
        return () => {
            document.body.classList.remove('disable-scroll');
        };
    }, [isOpen]);

    console.log(path);

    return (
        <>
            <Styles.NavBarWrapper isOpen={isOpen}>
                <Styles.Icon onClick={toggleMenu}>{isOpen ? <Icon name="x" /> : <Icon name="menu" />}</Styles.Icon>
                <Styles.ImageIconContainer>
                    <Styles.IconImage src={LOGO} alt="alt" />
                </Styles.ImageIconContainer>
                <Styles.NavItemListContainer>
                    <Styles.NavItem
                        isActive={path.pathname === '/'}
                        margin="60px 0 0 0"
                        onClick={() => {
                            onClickHandleNavigate('/');
                        }}
                    >
                        Home
                    </Styles.NavItem>
                    {!auth && (
                        <Styles.NavItem
                            isActive={path.pathname === '/auth'}
                            onClick={() => {
                                onClickHandleNavigate('/auth');
                            }}
                        >
                            Join Us
                        </Styles.NavItem>
                    )}
                    {auth && (
                        <>
                            <Styles.NavItem
                                isActive={path.pathname === '/cart'}
                                onClick={() => {
                                    onClickHandleNavigate('/cart');
                                }}
                            >
                                Cart
                            </Styles.NavItem>
                            <Styles.NavItem
                                isActive={path.pathname === '/payments/user-history'}
                                onClick={() => {
                                    onClickHandleNavigate('/payments/user-history');
                                }}
                            >
                                Payment History
                            </Styles.NavItem>
                            <Styles.NavItem
                                isActive={path.pathname === '/profile'}
                                onClick={() => {
                                    onClickHandleNavigate('/profile');
                                }}
                            >
                                Profile
                            </Styles.NavItem>
                            <Styles.NavItem
                                onClick={() => {
                                    authService.clearAuth();
                                    cartStorageService.clearCart();
                                    onClickHandleNavigate('/');
                                }}
                            >
                                Sign out
                            </Styles.NavItem>
                        </>
                    )}
                </Styles.NavItemListContainer>
                <Styles.NavBarRightIconList>
                    {auth && (
                        <Icon
                            name="shopping-cart"
                            color="#3a3a4e"
                            onClick={() => {
                                onClickHandleNavigate('/cart');
                            }}
                        />
                    )}

                    {!auth ? (
                        <Icon name="log-in" color="#AAD7D9" onClick={() => onClickHandleNavigate('/auth')} />
                    ) : (
                        <Icon
                            name="log-out"
                            color="#ff8282"
                            onClick={() => {
                                authService.clearAuth();
                                cartStorageService.clearCart();
                                onClickHandleNavigate('/');
                            }}
                        />
                    )}
                </Styles.NavBarRightIconList>
            </Styles.NavBarWrapper>
            <Divider margin="0 0 18px 0" color="#AAD7D9" />
        </>
    );
};

export default NavigationBar;
