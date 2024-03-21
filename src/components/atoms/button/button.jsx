import * as Styles from './styles';

const Button = ({ width, height, background, border, label, onClick }) => {
    return (
        <Styles.ButtonContainer heigh={height} width={width} background={background} border={border} onClick={onClick}>
            <Styles.Button>{label}</Styles.Button>
        </Styles.ButtonContainer>
    );
};

export default Button;
