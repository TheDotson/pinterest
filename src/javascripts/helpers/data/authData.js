import firebase from 'firebase/app';
import 'firebase/auth';
import boardList from '../../components/boardList/boardList';
import boards from '../../components/boards/boards';
import pins from '../../components/pins/pins';
import home from '../../components/home/home';

const loginButton = $('#google-auth');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      boards.showDiv();
      pins.showDiv();

      boardList.buildMyBoards();
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      boards.hideDiv();
      pins.hideDiv();

      home.homeBuilder();
    }
  });
};

export default { checkLoginStatus };
