import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
import './singleBoard.scss';

const buildSingleBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  pinData.getPins()
    .then((response) => {
      const myPins = response;
      let domString = `
        <div class="d-flex flex-wrap pins card-deck">`;
      myPins.forEach((pin) => {
        if (pin.boardId === boardId) {
          domString += `
          <div class="card text center" style="width: 18rem;">
            <img src="${pin.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
              <a target="_blank" href="${pin.link}" class="btn btn-primary">View Pin</a>
              </div>
              </div>`;
        }
      });
      domString += '</div>';

      utils.printToDom('#pins', domString);
    })
    .catch((err) => console.error('singleBoards broke', err));
};

export default { buildSingleBoard };
