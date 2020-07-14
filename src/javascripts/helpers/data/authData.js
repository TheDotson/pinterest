import firebase from 'firebase/app';
import 'firebase/auth';
import boardList from '../../components/boardList/boardList';
import singleBoard from '../../components/singleBoard/singleBoard';
import home from '../../components/home/home';
import divManip from '../../components/divManip/divManip';

const loginButton = $('#google-auth');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      loginButton.addClass('hide');
      logoutButton.removeClass('hide');
      divManip.showBoardsDiv();
      divManip.hideHomeDiv();

      boardList.buildMyBoards();
      boardList.boardEvents();
      singleBoard.pinEvents();
    } else {
      loginButton.removeClass('hide');
      logoutButton.addClass('hide');
      divManip.hideBoardsDiv();
      divManip.hidePinsDiv();
      divManip.showHomeDiv();

      home.homeBuilder();
    }
  });
};

export default { checkLoginStatus };
