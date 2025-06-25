import { createBrowserRouter } from 'react-router';
import HomeLayOut from '../Layouts/Home/HomeLayOut';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Career from '../Pages/Career/Career';
import CategoryNews from '../Components/categoryNews/CategoryNews';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Ragister/Register';
import AuthLayOut from '../Layouts/Auth/AuthLayOut';
import NewsDetails from '../Pages/NewsDetails/NewsDetails';
import PrivateRoute from '../Provider/PrivateRoute/PrivateRoute';
import Loading from '../Pages/Loading/Loading';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/career',
        Component: Career,
      },
      {
        path: '/category/:catId',
        Component: CategoryNews,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: '/auth',
    Component: AuthLayOut,
    children: [
      {
        path: '/auth/login',
        Component: Login,
      },
      {
        path: '/auth/register',
        Component: Register,
      },
    ],
  },
  {
    path: '/news-details/:id',
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch('/news.json'),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: '/*',
    element: <h2>error</h2>,
  },
]);

export default router;
