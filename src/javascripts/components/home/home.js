import utils from '../../helpers/utils';

const homeBuilder = () => {
  const domString = `
  <div class="text-center mt-3">
    <h1>Pinterest</h1>
    <h3>Please Login to view your boards</h3>
  </div>`;

  utils.printToDom('#home', domString);
};

export default { homeBuilder };
