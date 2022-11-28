import { createContext } from 'react';
import { IUser } from 'interfaces';

interface ContextProps {
    isLoading: boolean;
    isLoggedIn: boolean;
    user?: IUser;
    signin: ({ email, password }: { email: string; password: string }) => Promise<void>
    signup: ({ name, email, password }: { name: string; email: string; password: string }) => Promise<void>
    signout: () => void;
}


export const AuthContext = createContext({} as ContextProps );
