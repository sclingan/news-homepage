import logo from '../public/images/logo.svg';

function Header() {

    return (
        <header>
            <img src={logo} alt=""></img>
            <nav>
            Home
            New
            Popular
            Trending
            Categories
            </nav>
        </header>
    )
  }
  
  export default Header