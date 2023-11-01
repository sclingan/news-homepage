import logo from '../public/images/logo.svg';
import iconMenu from '../public/images/icon-menu.svg';
import iconClose from '../public/images/icon-menu-close.svg';

function Header() {
    function close() {
      let close = document.getElementById('icon-close');
      let nav = document.getElementById('nav');
      close?.classList.remove('icon-close');
      close?.classList.add('hidden');
      nav?.classList.remove('nav');
      nav?.classList.add('nav-hidden');
    }

    function open() {
      let close = document.getElementById('icon-close');
      let nav = document.getElementById('nav');
      close?.classList.remove('hidden');
      close?.classList.add('icon-close');
      nav?.classList.remove('nav-hidden');
      nav?.classList.add('nav');

    }
    return (
        <header>
            <img src={logo} alt="a W logo"></img>
            <button className='menu-icon' id='icon-open' onClick={open}><img src={iconMenu} className='menu-icon' alt='hamburger menu'></img></button>
            <nav id='nav' className='nav-hidden'>
              <button className='hidden' id='icon-close' onClick={close}><img src={iconClose} alt='menu-close'></img></button>
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