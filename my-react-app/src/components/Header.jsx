import { NavLink } from 'react-router'
import picture from '../assets/images/itvennerlogo.png';

function Header() {
  return (
    <div className='top-image'>
      <NavLink to='/'>
        <img className='header-logo' src={picture} alt='Logo' />
      </NavLink>
    </div>
  );
}

export default Header;
