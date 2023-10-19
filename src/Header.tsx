import logo from '../public/images/logo.svg';
import iconMenu from '../public/images/icon-menu.svg';

function Header() {

    return (
        <header>
            <img src={logo} alt="a W logo"></img>
            <img src={iconMenu} className='menu-icon' alt='hamburger menu'></img>
            <nav>
              <a href="">Home</a>
              <a href="">New</a>
              <a href="">Popular</a>
              <a href="">Trending</a>
              <a href="">Categories</a>
            </nav>
        </header>
    )
  }
  
  export default Header