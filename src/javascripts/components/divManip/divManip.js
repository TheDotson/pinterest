const showBoards = () => {
  $('#boards').removeClass('hide');
};

const hideBoards = () => {
  $('#boards').addClass('hide');
};

const showPins = () => {
  $('#pins').removeClass('hide');
};

const hidePins = () => {
  $('#pins').addClass('hide');
};

const showHome = () => {
  $('#home').removeClass('hide');
};

const hideHome = () => {
  $('#home').addClass('hide');
};

export default {
  showBoards,
  hideBoards,
  showPins,
  hidePins,
  showHome,
  hideHome,
};
