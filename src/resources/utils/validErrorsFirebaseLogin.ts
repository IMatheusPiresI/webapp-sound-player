export const validErrorsFirebaseLogin = (errorMessage: string) => {
  let message = '';

  switch (errorMessage) {
    case 'auth/invalid-email':
      message = 'Invalid E-mail. Please, Check The Email Entered.';
      break;
    case 'auth/user-disabled':
      message = 'User Inactive, access other account.';
      break;
    case 'auth/user-not-found':
      message = 'User Not Found. Check The Email Entered';
      break;
    case 'auth/wrong-password':
      message = 'Incorrect Password. Check The Password Entered.';
      break;
    default:
      message = 'Authentication Error. Try Again!';
      break;
  }
  console.log(errorMessage);
  return message;
};
