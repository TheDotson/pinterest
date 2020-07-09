import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
import divManip from '../divManip/divManip';
import './singleBoard.scss';

const removePinEvent = (e) => {
  const pinId = e.target.closest('.card').id;
  pinData.deletePins(pinId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      rebuildBoards(e);
    })
    .catch((err) => console.error(err));
};

const buildSingleBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  divManip.showPins();
  pinData.getPins()
    .then((response) => {
      const myPins = response;
      let domString = `
        <div class="d-flex flex-wrap pins card-deck">`;
      myPins.forEach((pin) => {
        if (pin.boardId === boardId) {
          domString += `
          <div class="card text center" id="${pin.id}" style="width: 18rem;">
            <img src="${pin.imageUrl}" class="card-img-top" alt="...">
              <a target="_blank" href="${pin.link}" class="btn btn-primary">View Pin</a>
              <button class="btn btn-secondary delete-pin" id="${pin.boardId}">Delete pin</button>
          </div>`;
        }
      });

      domString += `
        </div>
        <div class="text-center mt-5">
          <button class="btn btn-danger" id="back-button">Back</button>
        </div>`;

      utils.printToDom('#pins', domString);
      $('body').on('click', '#back-button', divManip.showBoards);
      $('body').on('click', '#back-button', divManip.hidePins);
      $('body').on('click', '#my-boards', divManip.showBoards);
      $('body').on('click', '#my-boards', divManip.hidePins);
      $('body').on('click', '.delete-pin', removePinEvent);
    })
    .catch((err) => console.error('singleBoards broke', err));
};

const rebuildBoards = (e) => {
  const boardId = e.target.id;
  divManip.showPins();
  pinData.getPins()
    .then((response) => {
      const myPins = response;
      let domString = `
        <div class="d-flex flex-wrap pins card-deck">`;
      myPins.forEach((pin) => {
        if (pin.boardId === boardId) {
          domString += `
          <div class="card text center" id="${pin.id}" style="width: 18rem;">
            <img src="${pin.imageUrl}" class="card-img-top" alt="...">
              <a target="_blank" href="${pin.link}" class="btn btn-primary">View Pin</a>
              <button class="btn btn-secondary delete-pin" id="${pin.boardId}">Delete pin</button>
          </div>`;
        }
      });

      domString += `
        </div>
        <div class="text-center mt-5">
          <button class="btn btn-danger" id="back-button">Back</button>
        </div>`;

      utils.printToDom('#pins', domString);
      $('body').on('click', '#back-button', divManip.showBoards);
      $('body').on('click', '#back-button', divManip.hidePins);
      $('body').on('click', '#my-boards', divManip.showBoards);
      $('body').on('click', '#my-boards', divManip.hidePins);
    })
    .catch((err) => console.error('singleBoards broke', err));
};

export default { buildSingleBoard };
