import utils from '../../helpers/utils';
import divManip from '../divManip/divManip';

const showPinForm = () => {
  divManip.showPinFormDiv();
  const domString = `
  <div class="card" id="pin-form">
    <form>
      <div class="form-group">
        <label for="pin-boardId">Board ID</label>
        <input type="text" class="form-control" id="pin-boardId" placeholder="board1">
      </div>
      <div class="form-group">
        <label for="pin-imageUrl">Image URL</label>
        <input type="text" class="form-control" id="pin-imageUrl" placeholder="http://">
      </div>
      <div class="form-group">
        <label for="pin-webUrl">URL</label>
        <input type="text" class="form-control" id="pin-webUrl" placeholder="http://">
      </div>
      <button type="submit" class="btn btn-primary" id="pin-creator">Submit</button>
    </form>
  </div>
  `;

  utils.printToDom('#pinForm', domString);
};

export default { showPinForm };
