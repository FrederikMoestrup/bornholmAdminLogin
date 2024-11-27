import { NavLink, Outlet } from 'react-router'
import Header from '../components/Header'

function MainLayout() {
  return (
    <div className='container'>
      <Header />
      <div className='lower-part'>
        <div className='sidebar'>
          <ul className='menu'>
            <li>
              <NavLink to='/travels'>Travels </NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
          </ul>
        </div>
        <div className='main-content'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainLayout