import { mockUser } from "../services/mock/mockUser";

export interface AuthContext {
    isLoggedIn?: boolean;
    user?: typeof mockUser;
};

let context: AuthContext = {};

export { context };