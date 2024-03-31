import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    height: ${({ height }) => height ?? '50px'};
    width: ${({ width }) => width ?? '200px'};
    border-radius: 8px;
    background: ${({ background }) => background ?? '200px'};
    border: ${({ border }) => `2px solid ${border}` ?? 'none'};
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`;

export const Button = styled.button`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
        'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
`;
