import styled from 'styled-components';

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    z-index: 999;
    transition: opacity 0.3s ease;
`;

export const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    max-width: 80%;
    max-height: 80%;
    overflow: auto;
    transition: transform 0.3s ease;
`;
