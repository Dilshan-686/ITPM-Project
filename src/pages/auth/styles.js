import styled from 'styled-components';

export const AuthPage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const AuthContainer = styled.div`
    margin-top: 40px;
    display: flex;
    gap: 16px;
    flex-direction: column;
    min-height: 300px;
    padding: 22px 42px;
    border: 4px solid #e1fdfe;
    background: #edfcfd;
    border-radius: 12px;
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

    h4 {
        color: #e63333;
        margin: 0;
        font-size: 14px;
        font-weight: 600;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 12px;
    gap: 8px;
`;

export const ErrorContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;
