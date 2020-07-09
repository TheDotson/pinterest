const boardBuilder = (board) => {
  const domString = `
    <div class="card text-center board-card" id="${board.id}">
      <div class="card-body" id="${board.name}">
        <h5 class="card-title">${board.name}</h5>
        <button class="btn btn-secondary" id="view-board">View Board</button>
        <button class="btn btn-secondary" id="delete-board">Delete</button>
      </div>
    </div>`;

  return domString;
};

export default { boardBuilder };
