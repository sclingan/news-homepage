import logo from '../public/images/logo.svg';
import iconMenu from '../public/images/icon-menu.svg';
import iconClose from '../public/images/icon-menu-close.svg';

function Header() {

    return (
        <header>
            <img src={logo} alt="a W logo"></img>
            {/* <img src={iconMenu} className='menu-icon' alt='hamburger menu'></img> */}
            <nav>
              <img src={iconClose} alt='' className='icon-close'></img>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">New</a></li>
                <li><a href="">Popular</a></li>
                <li><a href="">Trending</a></li>
                <li><a href="">Categories</a></li>
              </ul>
            </nav>
        </header>
    )
  }
  
  export default Header