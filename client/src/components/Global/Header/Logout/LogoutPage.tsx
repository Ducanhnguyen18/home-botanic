import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import { LoginContext } from '../../App';
import { useAppDispatch } from '../../../../hooks/redux';
import { logoutThunk } from '../../../../features/registration/registrationSlice';
// import { RootState } from '../../../../store/store';

const LogoutPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const logout = async () => {
            try {
                dispatch(logoutThunk());

                navigate('/');
            } catch (error) {
                console.error(error);
            }
        };
        logout();
    }, [dispatch]);

    return null;
};

export default LogoutPage;
