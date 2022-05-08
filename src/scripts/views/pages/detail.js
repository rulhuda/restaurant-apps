import swal from 'sweetalert';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <section class="content">
      <div id="restaurants" class="restaurants">
          <h3 tabindex="0" class="resto__label" aria-label="this is restaurant label and above a list of restaurants.">Detail Restaurant</h3>
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

    const formPost = document.querySelector('#postReview');
    const txtId = document.querySelector('#txtId');
    const txtName = document.querySelector('#txtName');
    const txtReview = document.querySelector('#txtReview');
    formPost.addEventListener('submit', async (e) => {
      e.preventDefault();
      const review = {
        id: txtId.value,
        name: txtName.value,
        review: txtReview.value,
      };
      const postReview = await RestaurantSource.addReview(review);

      const customerReviewsElement = document.querySelector('.customer-reviews');

      const reviewCustomer = (review) => {
        let resultReview = '';

        review.customerReviews.forEach((customer) => {
          resultReview += `
            <h4>${customer.name}</h4>
            <p class="text-muted">${customer.review}</p>
            <p class="text-lightblue">${customer.date}</p>
            <br>
          `;
        });

        return resultReview;
      };

      customerReviewsElement.innerHTML = `
        <h3 class="customer-reviews__heading">Customer Reviews:</h3>
        <br>
        ${reviewCustomer(postReview)}
      `;

      txtName.value = '';
      txtReview.value = '';
      swal('Success', 'Post your review', 'success');
    });
  },
};

export default Detail;
