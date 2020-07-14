const showBoardsDiv = () => {
  $('#boards').removeClass('hide');
};

const hideBoardsDiv = () => {
  $('#boards').addClass('hide');
};

const showPinsDiv = () => {
  $('#pins').removeClass('hide');
};

const hidePinsDiv = () => {
  $('#pins').addClass('hide');
};

const showHomeDiv = () => {
  $('#home').removeClass('hide');
};

const hideHomeDiv = () => {
  $('#home').addClass('hide');
};

const showPinFormDiv = () => {
  $('#pinForm').removeClass('hide');
};

const hidePinFormDiv = () => {
  $('#pinForm').addClass('hide');
};

const showBoardFormDiv = () => {
  $('#boardForm').removeClass('hide');
};

const hideBoardFormDiv = () => {
  $('#boardForm').addClass('hide');
};

export default {
  showBoardsDiv,
  hideBoardsDiv,
  showPinsDiv,
  hidePinsDiv,
  showHomeDiv,
  hideHomeDiv,
  showPinFormDiv,
  hidePinFormDiv,
  showBoardFormDiv,
  hideBoardFormDiv,
};
