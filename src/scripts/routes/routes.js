import Detail from '../views/pages/detail';
import Like from '../views/pages/like';
import ListRestaurants from '../views/pages/list-restaurants';

const routes = {
  '/': ListRestaurants,
  '/list-restaurants': ListRestaurants,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
