import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardData';
import boards from '../boards/boards';
import singleBoard from '../singleBoard/singleBoard';
import divManip from '../divManip/divManip';

const deleteBoardEvent = (e) => {
  console.error(e);
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

      $('body').on('click', '#view-board', singleBoard.buildSingleBoard);
      $('body').on('click', '#view-board', divManip.hideBoards);
      $('body').on('click', '#delete-board', deleteBoardEvent);
    })
    .catch((err) => console.error('getBoards broke', err));
};

export default { buildMyBoards };
