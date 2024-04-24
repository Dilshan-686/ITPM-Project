import { useEffect } from 'react';
import { authService } from '../shared';
import { useNavigate } from 'react-router-dom';

export const useAuthGuard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!authService.authGuard()) {
            navigate('/auth');
        }
    }, [navigate]);
    return authService.authGuard;
};
