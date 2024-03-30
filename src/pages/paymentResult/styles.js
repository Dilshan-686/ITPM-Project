import styled from 'styled-components';

export const PaymentResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 40vh;
    padding: 24px;
    gap: 12px;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    width: 100%;
    label {
        color: ${({ isSuccuss }) => (isSuccuss ? '#92c7cf' : 'pink')};
        font-weight: 600;
    }
`;

export const TextMsgContainer = styled.div`
    display: flex;
    gap: 24px;
    justify-content: center;
    align-items: center;
`;

export const ButtonSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        height: 50px;
        width: 200px;
        border-radius: 8px;
        background: #aad7d9;
        border: 2px solid #92c7cf;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
