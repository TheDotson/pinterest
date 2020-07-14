import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';
import divManip from '../divManip/divManip';

const editPinForm = (pinId) => {
  divManip.showEditPinDiv();
  pinData.getPinsById(pinId)
    .then((response) => {
      const pin = response.data;
      const domString = `
      <form class="pin-updater" id="${pinId}">
        <div class="form-group">
          <label for="edit-board-id">Board ID</label>
          <input type="text" class="form-control pin-boardId" id="edit-board-id" value="${pin.boardId}">
        </div>
        <div class="form-group">
          <label for="edit-imageUrl">Image URL</label>
          <input type="text" class="form-control" id="edit-imageUrl" value="${pin.imageUrl}">
        </div>
        <div class="form-group">
          <label for="edit-webUrl">URL</label>
          <input type="text" class="form-control" id="edit-webUrl" value="${pin.link}">
        </div>
        <button type="submit" class="btn btn-primary update-pin" id="update-pin">Submit</button>
      </form>`;

      utils.printToDom('#editPin', domString);
    })
    .catch((err) => console.error(err));
};

export default { editPinForm };
