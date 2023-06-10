import { doc, getDoc } from 'firebase/firestore';
import { db } from '..';
import { IUser } from './types';

export const getUserById = async (userId: string) => {
  const userDocRef = doc(db, 'users', userId);

  const userDoc = await getDoc(userDocRef);

  if (!userDoc.exists()) return null;

  const user: IUser = userDoc.data() as IUser;

  return user;
};
