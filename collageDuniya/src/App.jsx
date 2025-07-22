import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes/routes';
import NotFound from './pages/NotFound';
// import '@fontsource/poppins';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element, layout: Layout }, index) => {
          const pageElement = Layout ? <Layout>{element}</Layout> : element;
          return <Route key={index} path={path} element={pageElement} />;
        })}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
