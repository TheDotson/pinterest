const boardBuilder = (board) => {
  const domString = `<div class="card">
                      <div class="card-body">
                        <h5 class="card-title">${board.name}</h5>
                      </div>
                    </div>`;

  return domString;
};

export default { boardBuilder };
