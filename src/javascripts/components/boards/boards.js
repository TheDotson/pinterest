const showDiv = () => {
  $('#boards').removeClass('hide');
};

const hideDiv = () => {
  $('#boards').addClass('hide');
};

const boardBuilder = (board) => {
  const domString = `
    <div class="card text-center board-card" id="${board.id}">
      <div class="card-body" id="${board.id}">
        <h5 class="card-title">${board.name}</h5>
        <button id="view-board" class="btn btn-secondary">View Board</button>
      </div>
    </div>`;

  return domString;
};

export default { boardBuilder, showDiv, hideDiv };
