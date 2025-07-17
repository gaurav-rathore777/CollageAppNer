import { NavLink } from 'react-router-dom';
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  return (
    <nav style={{ marginTop: '0.5rem' }}>
      {/* <NavLink to="/" style={{ marginRight: '1rem' }}>Home</NavLink>
      <NavLink to="/about">About</NavLink> */}

      <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative group px-1 py-2 transition-colors duration-300 ${
                    isActive ? 'text-amber-400' : 'text-white'
                  }`
                }
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>

    </nav>
  );
};

export default Navbar;
