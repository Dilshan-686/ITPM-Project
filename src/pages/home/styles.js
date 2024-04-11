import styled from 'styled-components';

export const HomeImageContainer = styled.div`
    padding: 20px 20px 0 20px;

    height: 350px;
    background: #aad7d9;
    border: 2px solid #92c7cf;
    /* border-radius: 8px; */
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 8px;
    @media (max-width: 768px) {
        justify-content: center;
    }
    @media (max-width: 1440px) {
        padding: 40px 40px 0 40px;
    }
`;

export const HomeMainImage = styled.img`
    bottom: 0;
    left: 16px;
`;

export const ContentContainer = styled.div`
    font-family: 'Kaushan Script', cursive !important;
    display: flex;
    flex-direction: column;
    gap: 18px;
    height: 100%;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        display: none;
    }

    button {
        font-family: 'Kaushan Script', cursive !important;
        color: #3a3a4e;
    }
`;

export const Title = styled.h1`
    margin: 0;
    color: #3a3a4e;
    font-weight: 600;
`;

export const CategorySection = styled.div`
    height: fit-content;
    margin: 40px 0 40px 0;
`;

// SportsWear

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 36px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const GridItem = styled.div`
    width: 100%;
    height: fit-content;
    // min-height: 460px;
    background: yellow;
`;
