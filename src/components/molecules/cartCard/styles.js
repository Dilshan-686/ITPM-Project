import styled from 'styled-components';

export const CartCardContainer = styled.div`
    padding: 12px;
    display: flex;
    height: fit-content;
    max-height: 76px;
    background: #ffffff;
    gap: 18px;
    border: 2px solid #e5e1da;
`;

export const ImageContainer = styled.img`
    height: 64px;
    width: 64px;
    object-fit: fill;
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
        display: flex;
        color: #92c7cf;
    }
`;

export const TextSection = styled.div``;

export const ButtonSection = styled.div`
    display: flex;
    flex-direction: column;
    height: 64px;
    justify-content: space-between;
    align-items: flex-end;
    h6 {
        margin: 0;
        text-align: center;
    }
`;

export const IconButton = styled.div`
    align-items: center;
    background: aliceblue;
    border-radius: 50%;
    align-items: center;
    padding: ${({ padding }) => padding};
    border-radius: ${({ border }) => border};
`;

export const IconButtonList = styled.div`
    height: fit-content;
    display: flex;
    gap: 8px;
`;
