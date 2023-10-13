import retro from '../public/images/image-retro-pcs.jpg';
import laptop from '../public/images/image-top-laptops.jpg';
import gaming from '../public/images/image-gaming-growth.jpg';


function Section() {

    return (
        <section>
            <div className='section_div'>
                <img className='thumbnail' src={retro} alt=''></img>
                <div>
                  <h3 className='section_heading'>01</h3>
                  <h4 className='section_sub_heading'>Reviving Retro PCs</h4>
                  <p>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className='section_div'>
                <img className='thumbnail' src={laptop} alt=''></img>
                <div>
                  <h3 className='section_heading'>02</h3>
                  <h4 className='section_sub_heading'>Top 10 Laptops of 2022</h4>
                  <p>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className='section_div'>
                <img className='thumbnail' src={gaming} alt=''></img>
                <div>
                  <h3 className='section_heading'>03</h3>
                  <h4 className='section_sub_heading'>The Growth of Gaming</h4>
                  <p>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
  
        </section>
    )
  }
  
  export default Section