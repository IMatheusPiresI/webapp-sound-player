import { auth } from '..';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getUserById } from '../user';

const loginWithEmailAndPassword = async (email: string, password: string) => {
  const user = await signInWithEmailAndPassword(auth, email, password).then(
    async (userCredential) => {
      const userRecovered = await getUserById(userCredential.user.uid);

      const token = await userCredential.user.getIdToken();
      return {
        ...userRecovered,
        token,
      };
    }
  );

  return user;
};

export { loginWithEmailAndPassword };
