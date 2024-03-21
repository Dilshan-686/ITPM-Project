import * as Styles from './styles';

const Modal = ({ isOpen, children }) => {
    return (
        <Styles.ModalBackground isOpen={isOpen}>
            <Styles.ModalContent onClick={(e) => e.stopPropagation()}>{children}</Styles.ModalContent>
        </Styles.ModalBackground>
    );
};

export default Modal;
