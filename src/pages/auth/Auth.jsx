import { useEffect, useState } from 'react';
import * as Styles from './styles';
import { Button, Input } from '../../components';
import { SignIN, SignUp } from '../../services';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../shared';
import { toast } from 'react-toastify';

const Auth = () => {
    const navigate = useNavigate();
    const [isSignIn, setIsSignIn] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPW, setConfirmPW] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);

    //localhost too fast loading state not visible @temp use loading state set to 1 sec
    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    }, [isLoading]);

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

    const handleSignUp = async () => {
        setIsLoading(true);
        if (!errorMsg) {
            const response = await SignUp(uuidv4(), username, password);
            if (response?.data?.error) {
                toast.error(response.data.error);
            } else if (response?.data?.message) {
                toast.success(response.data?.message);
                //clear ps fields
                setConfirmPW('');
                setIsSignIn(true);
            }
        } else {
            toast.error(errorMsg);
        }
        setIsLoading(false);
    };

    const handleSignIn = async () => {
        setIsLoading(true);
        if (!errorMsg) {
            const response = await SignIN(username, password);
            console.log(response);
            if (response?.data?.error) {
                toast.error(response.data.error);
            } else if (response?.data?.accessToken) {
                toast.success(response.data?.message);
                navigate('/');
            }
        } else {
            toast.error(errorMsg);
        }
        setIsLoading(false);
    };

    if (authService.authGuard()) {
        navigate('/');
        return null;
    }

    return (
        <Styles.AuthPage>
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

                <Styles.ButtonsContainer>
                    <Button
                        isLoading={isLoading}
                        onClick={isSignIn ? handleSignIn : handleSignUp}
                        background="#aad7d9"
                        border="#92c7cf"
                        label={isSignIn ? 'Sign in' : 'Sign up'}
                    />
                    <Button
                        onClick={() => {
                            navigate('/');
                        }}
                        border="#92c7cf"
                        label="Back"
                    />
                </Styles.ButtonsContainer>
            </Styles.AuthContainer>
        </Styles.AuthPage>
    );
};

export default Auth;
