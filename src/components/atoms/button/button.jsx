import * as Styles from './styles';

const Button = ({ width, height, background, border, label, onClick, disabled }) => {
    return (
        <Styles.ButtonContainer
            heigh={height}
            width={width}
            background={!disabled ? background : '#e5e1da'}
            border={!disabled ? border : '#bababa'}
            onClick={onClick}
        >
            <Styles.Button disabled={disabled}>{label}</Styles.Button>
        </Styles.ButtonContainer>
    );
};

export default Button;
