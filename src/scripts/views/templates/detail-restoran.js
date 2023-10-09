import CONFIG from '../../global/config';

const restoDetail = (resto) => `
  <div class="detail">
    <div class="img-container">
        <img class="detail-img" alt="${resto.name}" src="${
  CONFIG.BASE_IMAGE_URL + resto.pictureId
}"/>
    </div>
    <ul class="detail-info">
      <li>
        <i title="restaurant" class="fas fa-utensils"></i>
        <p class="detail-name-address-rating">${resto.name}</p>
      </li>
      <li>
        <i title="address" <i class="fas fa-map-marker"></i>
        <p class="detail-name-address-rating">${resto.address}, ${resto.city}</p>
      </li>
      <li>
        <i title="ratings" class="fas fa-star"></i>
        <p class="detail-name-address-rating">${resto.rating}</p>
      </li>
      <li><p class="detail-desc class="fas fa-newspaper">${resto.description}</p></li>
    </ul>
          
    <h3>Menu</h3>
          
    <div class="detail-menu">
      <div class="detail-food">
        <h4>Makanan</h4>
        <ul>
          ${resto.menus.foods
    .map(
      (food, i) => `
                <li><p>${i + 1}) ${food.name}</p></li>
              `,
    )
    .join('')}
        <ul>
      </div>

      <div class="detail-drink">
        <h4>Minuman</h4>
        <ul>
          ${resto.menus.drinks
    .map(
      (drink, i) => `
                <li><p>${i + 1}) ${drink.name}</p></li>
              `,
    )
    .join('')}
        <ul>
      </div>
    </div>
    
    <h3 class="title-review">Customer Reviews</h3>

    <div class="detail-review">
    ${resto.customerReviews
    .map(
      (review) => `
        <div class="testimonial-box-container">
        <div class="testimonial-box">
            <div class="box-top">
                <div>
                    <div class="name-user">
                        <strong>${review.name}</strong>
                    </div>
                </div>
            </div>
            <div class="client-comment" tabindex="0">
            <p>${review.date}</p>
         </div>
            <div class="client-comment" tabindex="0">
               <p>${review.review}</p>
            </div>
        </div>
        </div>
        `,
    )
    .join('')}
    </div>
  </div>
`;

export default restoDetail;
