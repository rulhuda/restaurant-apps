import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `  
    <section class="content">
    <div id="restaurants" class="restaurants">
        <h3 tabindex="1" class="resto__label" aria-label="this is restaurant label and above a list of restaurants.">Your Liked Restaurants</h3>
        <div id="restoList" class="resto-list">
        
        </div>
    </div>
  </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restoList');
    if (restaurants.length === 0) {
      console.log('Tidak ada resto!');
      restaurantContainer.innerHTML = `<h2 class="text-alert text-center">Add favorite restaurant first!</h2>
      `;
      return;
    }
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
