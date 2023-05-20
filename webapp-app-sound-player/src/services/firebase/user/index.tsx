import { doc, getDoc } from 'firebase/firestore';
import { db } from '..';

export const getUserById = async (userId: string) => {
  const userDocRef = doc(db, 'users', userId);

  const userDoc = await getDoc(userDocRef);

  if (!userDoc.exists()) return;

  const user = userDoc.data();
  return user;
};
