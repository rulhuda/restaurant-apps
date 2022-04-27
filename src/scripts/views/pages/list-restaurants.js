import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurants = {
  async render() {
    return `
    <div class="hero">
        <div class="hero__inner">
            <h1 tabindex="1" class="hero__title" aria-label="this hero title is SERESTA">SERESTA</h1>
            <br>
            <h2 tabindex="1" class="hero__tagline" aria-label="this hero tagline is Search Resto in Nusantara!">Search Resto in Nusantara!</h2>
        </div>
    </div>
    
    <section class="content">
      <div id="restaurants" class="restaurants">
          <h3 tabindex="1" class="resto__label" aria-label="this is restaurant label and above a list of restaurants.">List of Restaurants</h3>
          <div id="restoList" class="resto-list">

          </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantList = document.querySelector('#restoList');
    restaurants.forEach((restaurant) => {
      restaurantList.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ListRestaurants;
