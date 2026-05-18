import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'How it works' },
  { to: '/pets', label: 'Pets' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />

        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-cta">
          <Link className="btn" to="/pets">Browse pets</Link>
          <Link className="btn primary" to="/contact">Adoption help</Link>
        </div>
      </div>
    </header>
  );
}
