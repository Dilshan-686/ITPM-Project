import styled from 'styled-components';

export const NavBarWrapper = styled.nav`
    height: 36px;
    background-color: #ffffff;
    color: #3a3a4e;
    padding: 12px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        padding: 12px 20px;
        padding-bottom: ${({ isOpen }) => (isOpen ? '100px' : '12px')};
        transition: padding-bottom 0.3s ease;
        overflow: hidden;
        height: ${({ isOpen }) => (isOpen ? '100vh' : '36px')};
    }
`;

export const NavItem = styled.div`
    cursor: pointer;
    border-bottom: ${({ isActive }) => (isActive ? '2px solid #92c7cf' : 'none')};
    @media (max-width: 768px) {
        margin: ${({ margin }) => margin};
    }
`;

export const Icon = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        position: absolute;
        align-items: center;
        right: 20px;
        top: 18px;
        cursor: pointer;
        height: 24px;
        width: 24px;
    }
`;

export const NavItemListContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    font-size: 20px;
    font-weight: 600;
    width: 100%;
    height: 100%;
    align-items: center;
    @media (max-width: 768px) {
        align-items: center;
        justify-items: center;
        flex-direction: column;
        font-size: 18px;
    }
`;

export const NavBarRightIconList = styled.div`
    display: flex;
    gap: 12px;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const IconImage = styled.img`
    width: 24p;
    height: 24px;
    border-radius: 50%;
`;

export const ImageIconContainer = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        position: absolute;
        align-items: center;
        left: 20px;
        top: 18px;
        cursor: pointer;
        height: 24px;
        width: 24px;
    }
`;
