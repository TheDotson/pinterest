import firebase from 'firebase/app';
import 'firebase/auth';
import utils from '../../helpers/utils';

const signMeIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleProvider);
};

const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-warning">Login with <i class="fab fa-google"></i></button>';
  utils.printToDom('#auth', domString);
  $('#google-auth').click(signMeIn);
};

export default { loginButton };
