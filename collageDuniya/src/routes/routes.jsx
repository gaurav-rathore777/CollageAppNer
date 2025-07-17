import Home from '../pages/Home';
import About from '../pages/About';
import MainLayout from '../layouts/MainLayout';

const routes = [
  {
    path: '/',
    element: <Home />,
    layout: MainLayout,
  },
  {
    path: '/about',
    element: <About />,
    layout: MainLayout,
  },
];

export default routes;
