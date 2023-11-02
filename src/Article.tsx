import web3 from '../public/images/image-web-3-mobile.jpg';
import web3Desktop from '../public/images/image-web-3-desktop.jpg';


function Article() {

    return (
        <article id='article'>
            <picture>
                <source srcSet={web3Desktop} media='(min-width: 50rem)'></source>
                <img src={web3} alt='colorful blocks, pegs and triangles'></img>
            </picture>
             <h2>The Bright Future of Web 3.0?</h2>

             <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
             But is it really fulfilling its promise?</p>

             <button className='button-more'>Read more</button>
        </article>
    )
  }
  
  export default Article