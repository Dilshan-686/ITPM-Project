import { useState } from 'react';
import * as Styles from './styles';
import { Button, Input } from '../../components';
import Modal from '../../components/molecules/Modal/modal';

const Auth = ({ isOpen, closeModal }) => {
    const [isSignIn, setIsSignIn] = useState(true);
    return (
        <Modal isOpen={isOpen} onClose={closeModal}>
            <Styles.AuthContainer>
                <h1>{isSignIn ? 'Sign in' : 'Sign up'}</h1>
                <h3
                    onClick={() => {
                        setIsSignIn(!isSignIn);
                    }}
                >
                    {isSignIn ? 'Dn`t have account?' : 'Already have an account?'}
                </h3>
                <Input placeholder="username" label="User Name" />
                <Input placeholder="password" label="Password" isPassWord />
                {!isSignIn ? <Input placeholder="re enter password" label="Confirm Password" isPassWord /> : null}
                <Styles.ButtonsContainer>
                    <Button
                        onClick={closeModal}
                        background="#aad7d9"
                        border="#92c7cf"
                        label={isSignIn ? 'Sign in' : 'Sign up'}
                    />
                    <Button onClick={closeModal} border="#92c7cf" label="Close" />
                </Styles.ButtonsContainer>
            </Styles.AuthContainer>
        </Modal>
    );
};

export default Auth;
