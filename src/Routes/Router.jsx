import { createBrowserRouter } from 'react-router';
import HomeLayOut from '../Layouts/HomeLayOut';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Career from '../Pages/Career/Career';
import CategoryNews from '../Components/categoryNews/CategoryNews';

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
      },
    ],
  },
  {
    path: '/auth',
    element: <h2>auth</h2>,
  },
  {
    path: '/news',
    element: <h3>news</h3>,
  },
  {
    path: '/*',
    element: <h2>error</h2>,
  },
]);

export default router;
