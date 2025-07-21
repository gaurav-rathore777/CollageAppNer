import Home from '../pages/Home';
import About from '../pages/About';
import MainLayout from '../layouts/MainLayout';
import PagesOne from '../pages/PageOne';

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
  {
    path: '*',
    element: <PagesOne/>,
    layout: MainLayout,
    
  }
];

export default routes;
