import styled from 'styled-components';

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 40px;
    height: calc(100vh - 80px);
    @media (max-width: 768px) {
        padding: 0px 20px;
    }
`;

export const LayoutInnerContainer = styled.div`
    display: flex;
    width: 100%;
    @media (min-width: 1440px) {
        max-width: 1440px;
    }
`;
