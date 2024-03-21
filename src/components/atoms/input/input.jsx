import * as Styles from './styles';

const Input = ({ placeholder, label, isPassWord, onChange }) => {
    return (
        <Styles.InputContainer>
            <Styles.InputLabel>{label}</Styles.InputLabel>
            <Styles.Input placeholder={placeholder} type={isPassWord && 'password'} onChange={onChange} />
        </Styles.InputContainer>
    );
};

export default Input;
