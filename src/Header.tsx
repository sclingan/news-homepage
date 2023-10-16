import logo from '../public/images/logo.svg';

function Header() {

    return (
        <header>
            <img src={logo} alt="a W logo"></img>
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