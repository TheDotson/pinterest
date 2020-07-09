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
      divManip.hideHome();

      boardList.buildMyBoards();
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      divManip.hideBoards();
      divManip.hidePins();
      divManip.showHome();

      home.homeBuilder();
    }
  });
};

export default { checkLoginStatus };
