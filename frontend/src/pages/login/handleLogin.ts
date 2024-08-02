import { Paths } from '@app/Paths';
import { NavigateFunction } from 'react-router-dom';
import { postLogin } from '@app/services/mock/mockApi';
import { ERROR_MESSAGES } from '@app/constants/errorMessages';
import { mockUser } from '@app/services/mock/mockUser';

interface LoginFormData {
    email: string;
    password: string;
}

interface LoginContext {
    setError: (errorMessage: string | null) => void;
    setIsLoading: (isLoading: boolean) => void;
    navigate: NavigateFunction;
}

export async function handleLogin(formData: LoginFormData, context: LoginContext) {
    const { email, password } = formData;
    const { setError, setIsLoading, navigate } = context;

    setIsLoading(true);
    setError(null);

    if (email.trim() === '' || password.length < 6) {
        setError(ERROR_MESSAGES.VALIDATION_ERROR);
        setIsLoading(false);
        return { success: false };
    }

    try {
        const response = await postLogin(email, password);
        console.log(response);
        navigate(Paths.Postsfeed);
        return { success: true, user: mockUser };
    } catch (error: any) {
        setError(error.message);
        return { success: false };
    } finally {
        setIsLoading(false);
    }
}