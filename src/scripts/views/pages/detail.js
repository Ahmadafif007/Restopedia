import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/resto-source';
import restoDetail from '../templates/detail-restoran';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
       <div class="container">
        <div class="like" id="likeButtonContainer"></div>

        <div id="main-container">
          <h1 tabindex="0" class="main-content__title">Informasi Restoran</h1>

          <section tabindex="0" title="menampilkan informasi lengkap restoran" id="detail-resto"></section>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const mainContainer = document.querySelector('#main-container');
    const detailContainer = document.querySelector('#detail-resto');
    const skipLinkElem = document.querySelector('.skip-link');
    mainContainer.style.display = 'none';

    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#detail-resto').focus();
    });

    try {
      const data = await RestaurantSource.getRestaurantDetail(url.id);
      console.info(data);
      // eslint-disable-next-line new-cap
      detailContainer.innerHTML += restoDetail(data.restaurant);
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        data,
      });
      mainContainer.style.display = 'block';
    } catch (err) {
      console.error(err);

      mainContainer.style.display = 'block';
      detailContainer.innerHTML = `Error: ${err.message}`;
    }
  },
};

export default Detail;
