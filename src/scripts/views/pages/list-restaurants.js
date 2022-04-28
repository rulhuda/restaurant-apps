import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurants = {
  async render() {
    return `
    <div class="hero" style="background-image: url('images/heros/hero-image-restaurant.jpg');">
        <div class="hero__inner">
            <h1 tabindex="0" class="hero__title" aria-label="this hero title is SERESTA">SERESTA</h1>
            <h2 tabindex="0" class="hero__tagline" aria-label="this hero tagline is Search Resto in Nusantara!">Search Resto in Nusantara!</h2>
            <form id="searchForm">
              <input type="text" placeholder="Search here..." id="keyword" class="form-control search" required>
              <br>
              <button type="submit" id="searchButton" class="btn-search">Search</button>
            </form>
            <br>
            <h3 id="searchValue" class="text-white bg-dark-transparent"></h3>
        </div>
    </div>
    
    <section class="content">
      <div id="restaurants" class="restaurants">
          <h3 tabindex="0" class="resto__label" aria-label="this is restaurant label and above a list of restaurants.">List of Restaurants</h3>
          <div id="restoList" class="resto-list">

          </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantSource.listRestaurants();
      const restaurantList = document.querySelector('#restoList');
      restaurants.forEach((restaurant) => {
        restaurantList.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      console.error(error);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } finally {
      const searchForm = document.querySelector('#searchForm');
      const keyword = document.querySelector('#keyword');
      searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const restaurantResult = await RestaurantSource.searchRestaurant(keyword.value);
        console.log(restaurantResult);
        const searchValue = document.querySelector('#searchValue');
        searchValue.innerText = `Your search : ${keyword.value}`;
        if (restaurantResult.length === 0) {
          console.log(`${keyword.value} tidak ditemukan`);
          return;
        }
        const restaurantList = document.querySelector('#restoList');
        restaurantList.innerHTML = '';
        restaurantResult.forEach((restaurant) => {
          restaurantList.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      });
    }
  },
};

export default ListRestaurants;
