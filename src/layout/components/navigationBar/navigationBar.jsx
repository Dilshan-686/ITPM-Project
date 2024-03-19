import { useNavigate } from 'react-router-dom';
import { Divider, Icon } from '../../../components';
import * as Styles from './styles';
import React, { useState, useEffect } from 'react';

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const onClickHandleNavigate = (pathname) => {
        navigate({ pathname });
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

    return (
        <>
            <Styles.NavBarWrapper isOpen={isOpen}>
                <Styles.Icon onClick={toggleMenu}>{isOpen ? <Icon name="x" /> : <Icon name="menu" />}</Styles.Icon>
                <Styles.NavItemListContainer>
                    <Styles.NavItem
                        margin="60px 0 0 0"
                        onClick={() => {
                            onClickHandleNavigate('/');
                        }}
                    >
                        Home
                    </Styles.NavItem>
                    <Styles.NavItem>Cart</Styles.NavItem>
                    <Styles.NavItem>About</Styles.NavItem>
                    <Styles.NavItem>Contact</Styles.NavItem>
                    <Styles.NavItem>Services</Styles.NavItem>
                </Styles.NavItemListContainer>
                <Styles.NavBarRightIconList>
                    <Icon
                        name="shopping-cart"
                        color="#3a3a4e"
                        onClick={() => {
                            onClickHandleNavigate('/cart');
                        }}
                    />

                    <Icon name="log-in" color="#3a3a4e" />
                </Styles.NavBarRightIconList>
            </Styles.NavBarWrapper>
            <Divider margin="0 0 18px 0" color="#AAD7D9" />
        </>
    );
};

export default NavigationBar;
