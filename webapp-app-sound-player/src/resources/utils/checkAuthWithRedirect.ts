import { authAdmin } from '@/services/firebase/admin';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const checkAuthWithRedirect = async () => {
  const cookieStore = cookies();
  const userToken = cookieStore.get('userToken');

  if (!userToken) {
    redirect('/sign');
  }

  try {
    const token = await authAdmin.verifyIdToken(userToken!.value);
    if (!token) {
      redirect('/sign');
    }
  } catch (err) {
    redirect('/sign');
  }
};
