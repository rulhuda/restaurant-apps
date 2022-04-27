import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <section class="content">
      <div id="restaurants" class="restaurants">
          <h3 tabindex="1" class="resto__label" aria-label="this is restaurant label and above a list of restaurants.">Detail Restaurant</h3>
          <div id="restoList" class="resto-list-detail">
          
          </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurants(url.id);
    const restaurantDetail = restaurant.restaurant;
    const restaurantContainer = document.querySelector('#restoList');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurantDetail);
  },
};

export default Detail;
