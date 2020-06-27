import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');
const boardDiv = $('#boards');
const homeDiv = $('#home');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
      boardDiv.removeClass('hide');
      homeDiv.addClass('hide');
    } else {
      authDiv.removeClass('hide');
      logoutButton.addClass('hide');
      boardDiv.addClass('hide');
      homeDiv.removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
