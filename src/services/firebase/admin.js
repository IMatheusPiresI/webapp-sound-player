import admin from 'firebase-admin';
import serviceAccount from '../../../firebase-admin.json';

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const authAdmin = admin.auth();

export { authAdmin };
