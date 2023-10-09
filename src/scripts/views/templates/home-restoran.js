import CONFIG from '../../global/config';

const restoCard = (resto) => `
    <div tabindex="0" class="card">
      <a href="#/resto/${resto.id}" class="card-a-tag">
        <div class="img-container">
          <img tabindex="0" class="card-image lazyload" crossorigin="anonymous" 
          alt="${resto.name}" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"/>
        <div tabindex="0" class="card-content">
          <h2 class="card-content-title">${resto.name} - ${resto.rating}</h2>
          <h2 class="card-content-title">${resto.city}</h2>
        </div>
      </a>
    </div>
  `;

export default restoCard;
