import utils from '../../helpers/utils';

const pinsBuilder = () => {
  const domString = '<h1>Pin Placeholder</h1>';

  utils.printToDom('#pins', domString);
};

export default { pinsBuilder };
