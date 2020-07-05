const boardBuilder = (board) => {
  const domString = `
  <div class="card text-center" id="${board.id}">
    <div class="card-body board-card" id="${board.id}">
      <h5 class="card-title">${board.name}</h5>
      <button class="btn btn-secondary view-board">View Board</button>
    </div>
  </div>`;

  return domString;
};

export default { boardBuilder };
