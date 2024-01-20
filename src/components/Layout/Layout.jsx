import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <NavLink
          className={({ isActive }) =>
            `${css.navlink} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.navlink} ${isActive ? css.active : ''}`
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </header>
      <main className={css.container}>{children}</main>
    </div>
  );
};
