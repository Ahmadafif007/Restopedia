import RestaurantSource from '../../data/resto-source';
import restoCard from '../templates/home-restoran';

const Home = {
  async render() {
    return `
      <div class="container">
        <div id="main-container">
          <h1 tabindex="0" class="main-content__title">Explore Restaurant</h1>

          <section id="explore-restaurant"></section>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const listContainer = document.querySelector('#explore-restaurant');

    try {
      const data = await RestaurantSource.getRestaurantList();
      data.restaurants.forEach((restaurant) => {
        listContainer.innerHTML += restoCard(restaurant);
      });
    } catch (err) {
      console.error(err);
      listContainer.innerHTML = `Error: ${err.message}`;
    }
  },
};

export default Home;
