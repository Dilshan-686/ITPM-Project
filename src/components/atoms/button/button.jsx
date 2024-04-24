import Spinner from '../spinner/spinner';
import * as Styles from './styles';

const Button = ({ width, height, background, border, label, onClick, disabled, isLoading }) => {
    return (
        <Styles.ButtonContainer
            heigh={height}
            width={width}
            background={!disabled ? background : '#e5e1da'}
            border={!disabled ? border : '#bababa'}
            onClick={onClick}
        >
            <Styles.Button disabled={disabled}>
                {isLoading && !disabled ? <Spinner color="#3a3a4e" /> : null}
                {label}
            </Styles.Button>
        </Styles.ButtonContainer>
    );
};

export default Button;
