import firebase from 'firebase/app';
import 'firebase/auth';
import boardList from '../../components/boardList/boardList';
import home from '../../components/home/home';
import divManip from '../../components/divManip/divManip';

const loginButton = $('#google-auth');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      divManip.showBoards();

      boardList.buildMyBoards();
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      divManip.hideBoards();
      divManip.hidePins();

      home.homeBuilder();
    }
  });
};

export default { checkLoginStatus };
