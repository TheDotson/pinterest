import firebase from 'firebase/app';
import 'firebase/auth';
import boardList from '../../components/boardList/boardList';
import pins from '../../components/pins/pins';

const loginButton = $('#google-auth');
const logoutButton = $('#navbar-logout-button');
const boardsDiv = $('#boards');
const pinsDiv = $('#pins');
const homeDiv = $('#home');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      boardsDiv.removeClass('hide');
      pinsDiv.removeClass('hide');
      homeDiv.addClass('hide');

      boardList.buildMyBoards();
      pins.pinsBuilder();
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      boardsDiv.addClass('hide');
      pinsDiv.addClass('hide');
      homeDiv.removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
