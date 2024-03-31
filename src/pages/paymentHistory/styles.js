import styled from 'styled-components';

export const PaymentHistoryPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    h2 {
        font-size: 24px;
        font-weight: 600;
        color: #3a3a4e;
    }

    table {
        margin: 20px;
        border: 2px solid #92c7cf;
        width: 700px;
        @media (max-width: 768px) {
            width: calc(100vw - 40px);
        }
    }
    th {
        border-bottom: 2px solid #92c7cf;
        width: 25%;
    }

    td {
        padding-left: 4px;
    }
    tr {
        text-align: left;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    div {
        padding: 8px;
        border: 1px solid #3a3a4e;
        background: aliceblue;
        border-radius: 50%;
    }
    div {
        :hover {
            color: pink;
        }
    }
`;
