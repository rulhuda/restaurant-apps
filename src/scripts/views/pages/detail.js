import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <section class="content">
      <div id="restaurants" class="restaurants">
          <h3 tabindex="1" class="resto__label" aria-label="this is restaurant label and above a list of restaurants.">Detail Restaurant</h3>
          <div id="restoList" class="resto-list-detail">
          
          </div>
          <div id="likeButtonContainer"></div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurants(url.id);
    const restaurantContainer = document.querySelector('#restoList');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
