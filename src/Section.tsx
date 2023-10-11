import retro from '../public/images/image-retro-pcs.jpg';
import laptop from '../public/images/image-top-laptops.jpg';
import gaming from '../public/images/image-gaming-growth.jpg';


function Section() {

    return (
        <section>
            <div>
                <p>
                <img className='thumbnail' src={retro} alt=''></img>
                01
                Reviving Retro PCs
                What happens when old PCs are given modern upgrades?</p>
                </div>
            <div>
                <p>
                <img className='thumbnail' src={laptop} alt=''></img>
                02
                Top 10 Laptops of 2022
                Our best picks for various needs and budgets.</p>
                </div>
            <div>
                <p>
                <img className='thumbnail' src={gaming} alt=''></img>
                03
                The Growth of Gaming
                How the pandemic has sparked fresh opportunities.</p>
                </div>
  
        </section>
    )
  }
  
  export default Section