import firebase from 'firebase/app';
import 'firebase/auth';

const loginButton = $('#google-auth');
const logoutButton = $('#navbar-logout-button');
const boardsDiv = $('#boards');
const pinsDiv = $('#pins');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      boardsDiv.removeClass('hide');
      pinsDiv.removeClass('hide');
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      boardsDiv.addClass('hide');
      pinsDiv.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
