import { mockUser } from "./mockUser";

export interface AppContext {
    isLoggedIn?: boolean;
    user?: typeof mockUser;
};

let context: AppContext = {};

export { context };