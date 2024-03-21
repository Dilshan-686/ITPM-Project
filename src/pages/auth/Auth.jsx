import { useEffect, useState } from 'react';
import * as Styles from './styles';
import { Button, Icon, Input } from '../../components';
import Modal from '../../components/molecules/Modal/modal';
import { SignIN, SignUp } from '../../services';
import { v4 as uuidv4 } from 'uuid';

const Auth = ({ isOpen, closeModal }) => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPW, setConfirmPW] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);

    //validation
    useEffect(() => {
        if (isSignIn) {
            if (password === '' || username === '') {
                setErrorMsg('all fields required');
            } else {
                setErrorMsg(null);
            }
        } else {
            if (password === '' || username === '') {
                setErrorMsg('all fields required');
            } else if (password !== confirmPW) {
                setErrorMsg('password not match');
            } else {
                setErrorMsg(null);
            }
        }
    }, [username, password, confirmPW, isSignIn]);

    const handleSignUp = () => {
        SignUp(uuidv4(), username, password);
    };

    const handleSignIn = () => {
        SignIN(username, password);
    };

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
                <Input
                    placeholder="username"
                    label="User Name"
                    onChange={({ target: { value } }) => {
                        setUserName(value);
                    }}
                />
                <Input
                    placeholder="password"
                    label="Password"
                    isPassWord
                    onChange={({ target: { value } }) => {
                        setPassword(value);
                    }}
                />
                {!isSignIn ? (
                    <Input
                        placeholder="re enter password"
                        label="Confirm Password"
                        isPassWord
                        onChange={({ target: { value } }) => {
                            setConfirmPW(value);
                        }}
                    />
                ) : null}
                {errorMsg ? (
                    <Styles.ErrorContainer>
                        <Icon name="alert-circle" color="#e63333" /> <h4>{errorMsg}</h4>
                    </Styles.ErrorContainer>
                ) : null}
                <Styles.ButtonsContainer>
                    <Button
                        onClick={isSignIn ? handleSignIn : handleSignUp}
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
