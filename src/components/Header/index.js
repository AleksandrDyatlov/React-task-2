import { NavLink, Link } from 'react-router-dom';

import './style.scss';
import { NavList, NavItem } from '../Nav';
import logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <strong className="logo">
          <Link to="/">
            <img src={logo} alt="My App" />
          </Link>
        </strong>
        <nav className="navbar">
          <NavList style={'main-nav'}>
            <NavItem>
              <NavLink to={'/'}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'/about'}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'/post'}>Post</NavLink>
            </NavItem>
          </NavList>
        </nav>
      </div>
    </header>
  );
}

export default Header;
