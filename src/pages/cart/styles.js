import styled from 'styled-components';

export const CartPageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 100%;
    gap: 18px;
    flex-grow: 1;
    margin-bottom: 40px;
    @media (max-width: 768px) {
        padding-bottom: 20px;
        flex-direction: column;
    }
`;

export const Bag = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    background: #fbf9f1;
    border-radius: 8px;
    flex-grow: 1;
`;
export const BagInnerContainer = styled.div`
    padding: 16px;
    border: 2px solid #e5e1da;
    height: 100%;
    border-radius: 8px;
`;

export const BagItems = styled.div``;

export const Summary = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    background: #aad7d9;
    border-radius: 8px;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const SummaryInnerContainer = styled.div`
    padding: 16px;
    border: 2px solid #92c7cf;
    height: 100%;
    border-radius: 8px;
`;

export const Title = styled.h3`
    margin: 0;
    color: #3a3a4e;
    font-weight: 600;
`;
