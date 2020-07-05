// import pinData from '../../helpers/data/pinData';
// import utils from '../../helpers/utils';
import './singleBoard.scss';

const buildSingleBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error(boardId);
};

export default { buildSingleBoard };
