import Hero from '../pages/Hero';
import Navbar from './Navbar';

const Header = () => {
  return (
  <>
    <header className='' style={{ background: '#222222', padding: '1rem' }}>
      <h1 className='text-white opacity-17 text-3xl'>CollageDuniya App</h1>
      <Navbar />
    </header>
      <Hero/>
  </>
  );
};

export default Header;
