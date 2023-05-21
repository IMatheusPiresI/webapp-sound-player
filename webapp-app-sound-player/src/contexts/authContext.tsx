import { auth } from '@/services/firebase';
import { getAllMusics } from '@/services/firebase/musics';
import { getUserById } from '@/services/firebase/user';
import { IUser } from '@/services/firebase/user/types';
import { usePathname, useRouter } from 'next/navigation';
import React, { ReactNode, createContext, useEffect, useState } from 'react';

type IChildren = {
  children: ReactNode;
};

type IAuthContext = {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
};
export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: React.FC<IChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const { push } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user?.email) {
      auth.onIdTokenChanged(async (userCredential) => {
        if (!userCredential) {
          push('/sign');
          setUser(null);
          return;
        }
        const user = await getUserById(userCredential.uid);
        setUser(user);
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {user?.email || pathname === '/sign' ? children : null}
    </AuthContext.Provider>
  );
};
