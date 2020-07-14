import utils from '../../helpers/utils';
import divManip from '../divManip/divManip';

const showForm = () => {
  divManip.showBoardFormDiv();
  const domString = ` 
  <form>
    <div class="form-group">
      <label for="board-name">Board Name</label>
      <input type="text" class="form-control" id="board-name" placeholder="Board Name">
    </div>
    <button type="submit" class="btn btn-primary" id="board-maker">Submit</button>
  </form>`;

  utils.printToDom('#boardForm', domString);
};

export default { showForm };
