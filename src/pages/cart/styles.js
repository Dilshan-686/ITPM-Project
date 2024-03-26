import styled from 'styled-components';

export const CartPageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 100%;
    gap: 18px;
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
    flex-grow: 1;
    max-width: 680px;
    @media (max-width: 768px) {
        width: 100%;
        max-width: unset;
    }
`;
export const BagInnerContainer = styled.div`
    padding: 16px;
    height: 100%;
    border: 2px solid #e5e1da;
    @media (min-width: 1240px) {
        padding: 36px;
    }
    h3 {
        color: #92c7cf;
    }
`;

export const BagItems = styled.div``;

export const Summary = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    background: #ffffff;
    h3 {
        color: #92c7cf;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const SummaryInnerContainer = styled.div`
    padding: 16px;
    border: 2px solid #aad7d9;
    height: 100%;
    @media (min-width: 1240px) {
        padding: 36px;
    }
`;

export const Title = styled.h3`
    margin: 0;
    color: #3a3a4e;
    font-weight: 600;
`;

export const CardListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 12px;
`;

export const SummaryItemContainer = styled.div`
    color: #3a3a4e;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: ${({ padding }) => padding};
`;

export const SummaryItemTitle = styled.h2`
    margin: 0;
    text-align: left;
    font-size: 18px;
`;

export const SummaryItemValue = styled.h2`
    margin: 0;
    text-align: right;
    font-size: 18px;
    opacity: 0.6;
`;
