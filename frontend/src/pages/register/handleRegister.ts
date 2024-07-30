import { ERROR_MESSAGES } from "@constants/errorMessages";

interface RegisterFormData {
    username: string;
    email: string;
    password: string;
}

interface RegisterContext {
    setError: (errorMessage: string | null) => void;
    setIsLoading: (isLoading: boolean) => void;
}

export async function handleRegister(formData: RegisterFormData, context: RegisterContext) {
    const { username, email, password } = formData;
    const { setError, setIsLoading } = context;

    setIsLoading(true);
    setError(null);

    if (username.trim() === '' || email.trim() === '' || password.length < 6) {
        setError('Please fill in all fields and ensure the password is at least 6 characters long.');
        setIsLoading(false);
        return;
    }

    try {
        console.log('Registering', { username, email, password });
    } catch (error: any) {
        setError(ERROR_MESSAGES.VALIDATION_ERROR);
    } finally {
        setIsLoading(false);
    }
};
