import utils from '../../helpers/utils';

const homeBuilder = () => {
  const domString = `
  <div class="col-6">
    <h1>Pinterest</h1>
  </div>`;

  utils.printToDom('#home', domString);
};

export default { homeBuilder };
