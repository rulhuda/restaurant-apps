import swal from 'sweetalert';
import FavoriteRestaurantIdb from '../data/favoriterestaurant-idb';
import CONFIG from '../globals/config';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';
import NotificationHelper from './notification-helper';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      swal('Success', 'Success add restaurant to favorite', 'success').then(
        NotificationHelper.sendNotification({
          title: `${this._restaurant.name}`,
          options: {
            body: this._restaurant.description,
            image: CONFIG.BASE_IMAGE_URL_M + this._restaurant.pictureId,
          },
        }),
      );
      await this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      swal('Success', 'Success remove restaurant from favorite', 'success').then(this._renderButton());
    });
  },
};

export default LikeButtonInitiator;
