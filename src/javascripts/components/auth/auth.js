import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleProvider);
};

const loginButton = () => {
  $('#google-auth').click(signMeIn);
};

const logoutButton = () => {
  $('#navbar-logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

export default { loginButton, logoutButton };
