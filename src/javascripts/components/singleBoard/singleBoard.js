import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
import divManip from '../divManip/divManip';
import newPin from '../newPin/newPin';
import editPin from '../editPin/editPin';
import './singleBoard.scss';

const removePinEvent = (e) => {
  e.preventDefault();
  const pinId = e.target.id;
  pinData.deletePins(pinId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildSingleBoard();
    })
    .catch((err) => console.error(err));
};

const addPinEvent = (e) => {
  e.preventDefault();
  const newPins = {
    boardId: document.getElementById('board-id-finder').dataset.boardId,
    link: $('#pin-webUrl').val(),
    imageUrl: $('#pin-imageUrl').val(),
  };
  pinData.addPin(newPins)
    .then(() => {
      divManip.hidePinFormDiv();
      // eslint-disable-next-line no-use-before-define
      rebuildBoards();
    })
    .catch((err) => console.error(err));
};

const editPinEvent = (e) => {
  e.preventDefault();
  const pinId = e.target.closest('.pin-updater').id;
  const updatedPin = {
    boardId: $('#edit-board-id').val(),
    link: $('#edit-webUrl').val(),
    imageUrl: $('#edit-imageUrl').val(),
  };
  pinData.updatePin(pinId, updatedPin)
    .then(() => {
      divManip.hideEditPinDiv();
      // eslint-disable-next-line no-use-before-define
      rebuildBoards();
    })
    .catch((err) => console.error(err));
};

const buildSingleBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  divManip.showPinsDiv();
  pinData.getPins()
    .then((response) => {
      const myPins = response;
      let domString = `
        <div class="d-flex flex-wrap pins card-deck" id="board-id-finder" data-board-id=${boardId}>`;
      myPins.forEach((pin) => {
        if (pin.boardId === boardId) {
          domString += `
          <div class="card text center pins" id="${pin.boardId}" style="width: 18rem;">
            <a href="${pin.link}">
              <img src="${pin.imageUrl}" class="card-img-top pin-image" alt="...">
            </a>
              <button class="btn btn-danger delete-pin" id="${pin.id}">Delete Pin</button>
              <button class="btn btn-secondary edit-pin" id="${pin.id}">Update Pin</button>          </div>`;
        }
      });

      domString += `
        </div>
        <div class="text-center mt-5">
          <button class="btn btn-danger" id="back-button">Back</button>
          <button class="btn btn-info ml-5" id="add-pin"><i class="fas fa-plus"></i></button>
        </div>`;

      utils.printToDom('#pins', domString);
    })
    .catch((err) => console.error('singleBoards broke', err));
};

const rebuildBoards = () => {
  // eslint-disable-next-line prefer-destructuring
  const boardId = document.getElementById('board-id-finder').dataset.boardId;
  divManip.showPinsDiv();
  pinData.getPins()
    .then((response) => {
      const myPins = response;
      let domString = `
        <div class="d-flex flex-wrap pins card-deck" id="board-id-finder" data-board-id=${boardId}>`;
      myPins.forEach((pin) => {
        if (pin.boardId === boardId) {
          domString += `
          <div class="card text center pins" id="${pin.boardId}" style="width: 18rem;">
            <a href="${pin.link}">
              <img src="${pin.imageUrl}" class="card-img-top pin-image" alt="...">
            </a>
              <button class="btn btn-danger delete-pin" id="${pin.id}">Delete pin</button>
              <button class="btn btn-secondary edit-pin" id="${pin.id}">Update Pin</button>          </div>`;
        }
      });

      domString += `
        </div>
        <div class="text-center mt-5">
          <button class="btn btn-danger" id="back-button">Back</button>
          <button class="btn btn-info ml-5" id="add-pin"><i class="fas fa-plus"></i></button>
        </div>`;

      utils.printToDom('#pins', domString);
    })
    .catch((err) => console.error('singleBoards broke', err));
};

const showEditForm = (e) => {
  editPin.editPinForm(e.target.id);
};

const pinEvents = () => {
  $('body').on('click', '#add-pin', newPin.showPinForm);
  $('body').one('click', '#pin-maker', addPinEvent);
  $('body').one('click', '.delete-pin', removePinEvent);
  $('body').on('click', '.edit-pin', showEditForm);
  $('body').on('click', '#update-pin', editPinEvent);
  $('body').on('click', '#back-button', divManip.showBoardsDiv);
  $('body').on('click', '#back-button', divManip.hidePinsDiv);
  $('body').on('click', '#back-button', divManip.hidePinFormDiv);
  $('body').on('click', '#back-button', divManip.hideEditPinDiv);
  $('body').on('click', '#my-boards', divManip.showBoardsDiv);
  $('body').on('click', '#my-boards', divManip.hidePinsDiv);
  $('body').on('click', '#my-boards', divManip.hidePinFormDiv);
  $('body').on('click', '#my-boards', divManip.hideEditPinDiv);
};

export default { buildSingleBoard, pinEvents, rebuildBoards };
