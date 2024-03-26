import styled from 'styled-components';

export const CartCardContainer = styled.div`
    padding: 12px;
    display: flex;
    height: fit-content;
    max-height: 60px;
    background: #ffffff;
    gap: 18px;
    border: 2px solid #e5e1da;
`;

export const ImageContainer = styled.img`
    height: 48px;
    width: 48px;
    object-fit: fill;
    border-radius: 4px;
`;

export const CardItemDetailsSection = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    h4,
    h5 {
        margin: 0;
        text-align: left;
        font-weight: 600;
    }
    h4 {
        color: #3a3a4e;
    }
    h5 {
        color: #92c7cf;
    }
`;

export const TextSection = styled.div``;

export const ButtonSection = styled.div`
    display: flex;
    flex-direction: column;
    height: 48px;
    justify-content: space-between;
    align-items: flex-end;
    h6 {
        margin: 0;
        text-align: center;
    }
`;

export const IconButton = styled.div`
    display: flex;
    align-items: center;
`;
