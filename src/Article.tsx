import web3 from '../public/images/image-web-3-mobile.jpg';
import web3Desktop from '../public/images/image-web-3-desktop.jpg';


function Article() {

    return (
        <article>
            <picture>
                <source srcSet={web3} media=''></source>
                <source srcSet={web3Desktop} media=''></source>
                <img src={web3} alt=''></img>
            </picture>
             <h2>The Bright Future of Web 3.0?</h2>

             <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
             But is it really fulfilling its promise?</p>

             <button>Read more</button>
        </article>
    )
  }
  
  export default Article