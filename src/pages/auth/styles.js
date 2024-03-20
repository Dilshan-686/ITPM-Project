import styled from 'styled-components';

export const AuthContainer = styled.div`
    display: flex;
    gap: 16px;
    flex-direction: column;
    min-height: 300px;
    padding: 22px 42px;

    h1 {
        color: #3a3a4e;
        margin: 0;
        font-size: 22px;
    }

    h3 {
        color: #3a3a4e;
        margin: 0;
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 12px;
    gap: 8px;
`;
