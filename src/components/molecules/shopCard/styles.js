import styled from 'styled-components';

export const ShopCardContainer = styled.div`
    border: 2px solid #e1afd1;
    height: fit-content;
    width: 100%;
    background: gray;
    h1 {
        margin: 0;
        color: #3a3a4e;
    }
    h2 {
        margin: 12px 0;
        color: #3a3a4e;
    }
`;

export const ShopCardInnerContainer = styled.div`
    padding: 20px;
    height: fit-content;
    background: pink;
    @media (max-width: 768px) {
        padding: 12px;
    }
`;

export const ShopCardImage = styled.img`
    width: 100%;
`;

export const ShopCardDetails = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        padding: 12px;
    }
`;

export const ShopCardDetailsItem = styled.div`
    width: fit-content;
    flex-direction: column;
    display: flex;
    gap: 8px;
`;

export const IconContainer = styled.div`
    display: flex;
    gap: 8px;
    font-weight: 600;
    cursor: pointer;
    color: ${({ color }) => color ?? '#3a3a4e'};
`;
