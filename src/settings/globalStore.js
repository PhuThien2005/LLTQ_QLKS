import { signify } from 'react-signify';

export const sIsLoggedIn = signify(!!localStorage.getItem('userToken'));