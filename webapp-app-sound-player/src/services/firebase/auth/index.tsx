import { auth } from '..';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const loginWithEmailAndPassword = async (email: string, password: string) => {
  const user = await signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      return userCredential.user;
    }
  );

  return user;
};

export { loginWithEmailAndPassword };
