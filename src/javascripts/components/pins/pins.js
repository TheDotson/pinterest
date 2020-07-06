const showDiv = () => {
  $('#pins').removeClass('hide');
};

const hideDiv = () => {
  $('#pins').addClass('hide');
};

export default { showDiv, hideDiv };
