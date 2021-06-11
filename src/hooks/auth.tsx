import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
 
import api from '../services/api';

interface User {
  investor_name: string;
  email: string;
  password: string;  
}
interface AuthState {
  'access-token': string;
  client: string;
  uid: string;
  user: User;
}
interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [authorization, user] = await AsyncStorage.multiGet([
        '@ioasys-enterprise:authorization',
        '@ioasys-enterprise:user',
      ]);




      if (authorization[1] && user[1]) {
        const {  accessToken, client, uid} = JSON.parse(authorization[1]);

        api.defaults.headers = {
          'access-token': accessToken,
          client,
          uid
        }
        console.log(api.defaults.headers)
        setData({ 'access-token': accessToken, client, uid , user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }
    loadStoragedData();
  }, []);
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('users/auth/sign_in', {
      email,
      password,
    });

    const { client, "access-token": accessToken, uid } = response.headers;
    const { investor: user } = response.data;

      

    await AsyncStorage.multiSet([
      ['@ioasys-enterprise:authorization', JSON.stringify({client, accessToken, uid})],          
      ['@ioasys-enterprise:user', JSON.stringify(user)],
    ]);
    api.defaults.headers = {
      'access-token': accessToken,
      client,
      uid
    };
    setData({ client, "access-token": accessToken, uid , user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@ioasys-enterprise:user', '@ioasys-enterprise:authorization']);

    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
export { AuthProvider, useAuth };
