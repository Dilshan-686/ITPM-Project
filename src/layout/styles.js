import styled from 'styled-components';

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 40px;
    height: calc(100vh - 80px);
    @media (max-width: 768px) {
        padding: 0px 20px;
    }
`;
