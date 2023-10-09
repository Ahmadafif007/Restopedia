import '../components/food-list';
import '../components/search-bar';
import DataSource from '../data/data-source';
import '../components/rencana-list';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const foodListElement = document.querySelector('food-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchFood(searchElement.value);
      // eslint-disable-next-line no-use-before-define
      renderResult(result);
      window.location = '#hasil';
    } catch (message) {
      // eslint-disable-next-line no-use-before-define
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    foodListElement.foods = results;
  };

  const fallbackResult = (message) => {
    foodListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};
export default main;
