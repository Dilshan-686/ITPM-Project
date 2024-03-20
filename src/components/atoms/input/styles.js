import styled from 'styled-components';

export const Input = styled.input`
    height: 32px;
    padding: 0 12px;
    font-size: 18px;
    min-width: 200px;
    border-radius: 4px;
    color: #3a3a4e;
    border: 1.5px solid #92c7cf;
    :focus {
        border: 1.5px solid #05505c;
    }
`;

export const InputLabel = styled.label`
    font-size: 18px;
    color: #3a3a4e;
    font-weight: 600;
`;

export const InputContainer = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
    align-items: flex-start;
`;
