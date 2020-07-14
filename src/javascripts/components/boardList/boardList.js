import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';
import boards from '../boards/boards';
import singleBoard from '../singleBoard/singleBoard';
import divManip from '../divManip/divManip';

const deleteBoardEvent = (e) => {
  const boardId = e.target.closest('.card').id;
  boardData.deleteBoard(boardId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildMyBoards();
    })
    .catch((err) => console.error(err));
};

const buildMyBoards = () => {
  boardData.getBoards()
    .then((response) => {
      const myBoards = response;
      let domString = `
      <h2 class="text-center mt-3 mb-3">My Boards</h2>
      <div class="d-flex flex-wrap card-deck">`;

      myBoards.forEach((board) => {
        domString += boards.boardBuilder(board);
      });
      domString += '</div>';

      utils.printToDom('#boards', domString);
    })
    .catch((err) => console.error('getBoards broke', err));
};

const boardEvents = () => {
  $('body').on('click', '#view-board', singleBoard.buildSingleBoard);
  $('body').on('click', '#delete-board', deleteBoardEvent);
  $('body').on('click', '#view-board', divManip.hideBoardsDiv);
};

export default { buildMyBoards, boardEvents };
