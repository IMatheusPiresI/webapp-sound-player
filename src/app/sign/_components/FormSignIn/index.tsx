'use client';

import { Button } from '@/components/Button';
import { InputForm } from '@/components/Form/InputForm';
import Image from 'next/image';
import React, { useState } from 'react';
import { IState } from './types';
import { loginWithEmailAndPassword } from '@/services/firebase/auth';
import nookies from 'nookies';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/resources/hooks/useAuthContext';
import { toast } from 'react-toastify';
import { FirebaseError } from 'firebase/app';
import { validErrorsFirebaseLogin } from '@/resources/utils/validErrorsFirebaseLogin';

export const FormSign: React.FC = () => {
  const { setUser } = useAuthContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { push } = useRouter();

  const handleChangeValueInput =
    (setState: IState) => (event: React.FormEvent<HTMLInputElement>) => {
      setState(event.currentTarget.value);
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const user = await loginWithEmailAndPassword(email, password);
      if (!user) return;

      setUser(user);
      nookies.set(null, 'userToken', user.token, { path: '/' });
      push('/');
    } catch (err) {
      const error = err as FirebaseError;
      const messageLoginError = validErrorsFirebaseLogin(error.code);
      console.log('error', messageLoginError);
      toast.error(messageLoginError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="px-4 py-6 border border-white rounded-lg max-w-lg w-full"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center">
        <div className="border border-white rounded-full w-36 h-36 flex items-center justify-center bg-white/[0.4]">
          <Image
            src="/phone-hearth.png"
            alt="phone hearth"
            width={120}
            height={100}
          />
        </div>
        <div className="w-full flex flex-col items-center">
          <h2 className="mt-8 text-3xl font-bold text-white tracking-wider">
            Sign
          </h2>
          <div className="mt-12 w-full">
            <InputForm
              type="email"
              label="E-mail"
              id="email"
              required
              value={email}
              onChange={handleChangeValueInput(setEmail)}
              autoCorrect="off"
            />
          </div>
          <div className="mt-6 w-full">
            <InputForm
              type="password"
              label="Password"
              id="password"
              required
              value={password}
              onChange={handleChangeValueInput(setPassword)}
            />
          </div>
        </div>
        <div className="w-full mt-16 flex items-center justify-center">
          <div className="max-w-xs w-full">
            <Button title="Enter" type="submit" loading={loading} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormSign;
