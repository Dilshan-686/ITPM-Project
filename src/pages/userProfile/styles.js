import styled from 'styled-components';

export const UserProfilePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    gap: 40px;
    label {
        color: #ffffff !important;
        font-size: 18px;
    }
`;

export const Image = styled.img`
    height: 300px;
    width: 300px;
    border-radius: 50%;
    border: 4px solid #aad7d9;
    @media (max-width: 768px) {
        height: 200px;
        width: 200px;
    }
`;

export const TextContainer = styled.div`
    h1 {
        margin: 0;
        padding: 16px 0;
    }
    @media (max-width: 768px) {
        h1 {
            padding: 8px 0;
        }
    }
`;
