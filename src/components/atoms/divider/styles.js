import styled from 'styled-components';

export const DividerContainer = styled.hr`
    background: ${({ color }) => color ?? '#000000'};
    margin: ${({ margin }) => margin ?? '0px'};
    width: 100%;
    opacity: 0.5;
`;
