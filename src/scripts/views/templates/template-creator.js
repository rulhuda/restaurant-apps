import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <article tabindex="1" class="resto-item">
  <p class="resto-item__city" aria-label="This cafe from City ${restaurant.city}, Indonesia.">City : ${restaurant.city}</p>
  <img class="resto-item__thumbnail" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_M + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="this photo of ${restaurant.name} restaurant.">
  <div class="resto-item__content">
      <p class="resto-item__rating" aria-label="This cafe rating is ${restaurant.rating}.">Rating  : ${restaurant.rating}</p>

      <h3 class="resto-item__name-detail" aria-label="This restaurant name is ${restaurant.name}.">${restaurant.name}</h3>

      <h3 class="resto-item__menu resto-item__heading-detail">Restaurant Menu</h3>
      <div class="list-menus">
        <div class="menu-item">
          <h4 class="resto-item__heading-detail">Foods:</h4>
          ${restaurant.menus.foods.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}
        </div>
        <div class="menu-item">
          <h4 class="resto-item__heading-detail">Drinks:</h4>
          ${restaurant.menus.drinks.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}
        </div>
      </div>
      <br>

      <h3 class="resto-item__heading-detail">Address:</h3>
      <br>

      <p class="resto-item__address-detail">${restaurant.address}</p>
      <br>

      <h3 class="resto-item__heading-detail">Description:</h3>
      <br>

      <p class="resto-item__description-detail" aria-label="This restaurant description is ${restaurant.description}">${restaurant.description}.</p>
      <br>

      <h3 class="resto-item__heading-detail">Form Review</h3>
      <form id="postReview">
        <input type="hidden" id="txtId" value="${restaurant.id}">
        <label for="txtName">Your Name :</label>
        <br>
        <input type="text" id="txtName" placeholder="Type your name here..." class="form-control post">
        <br>
        <label for="txtReview">Your Review :</label>
        <br>
        <textarea id="txtReview" placeholder="Type your review here..." class="form-control post"></textarea>
        <br>
        <button type="submit" class="btn-post">Post</button>
      </form>
      <br>

      ${restaurant.customerReviews.reduce((show, value) => show.concat(`<br>
        <h4>${value.name}</h4>
        <p class="text-muted">${value.review}</p>
        <p class="text-lightblue">${value.date}</p>
        `), '<div class="customer-reviews"> <h3 class="customer-reviews__heading">Customer Reviews:</h3>')}
      
  </div>
  </article>
`;

const createRestaurantItemTemplate = (restaurant) => `
<article tabindex="1" class="resto-item">
<p class="resto-item__city" aria-label="This cafe from City ${restaurant.city}, Indonesia.">City : ${restaurant.city}</p>
<img class="resto-item__thumbnail" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_S + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="this photo of ${restaurant.name} restaurant.">
<div class="resto-item__content">
    <p class="resto-item__rating" aria-label="This cafe rating is ${restaurant.rating}.">Rating  : ${restaurant.rating}</p>
    <h3 class="resto-item__name" aria-label="This restaurant name is ${restaurant.name}."><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
    <p class="resto-item__description" aria-label="This restaurant description is ${restaurant.description}">${restaurant.description}.</p>
</div>
</article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
