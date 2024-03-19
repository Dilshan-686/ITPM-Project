import { Input } from '../../components';
import Modal from '../../components/molecules/Modal/modal';

const Auth = ({ isOpen, closeModal }) => {
    return (
        <Modal isOpen={isOpen} onClose={closeModal}>
            <div style={{ width: '300px' }}>
                Sign / Sign Up
                <h2>user NAme</h2>
                <p>working on styling.</p>
                <Input />
                <h2>PW</h2>
                <p>working on styling.</p>
                <Input />
                <button onClick={closeModal}>Close Modal</button>
            </div>
        </Modal>
    );
};

export default Auth;
