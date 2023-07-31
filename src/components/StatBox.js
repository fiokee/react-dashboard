import React from 'react'
import './StatBox.css'
import Icons from '../assets/icons.png';
import This from '../assets/chevron-down.png';
const StatBox = () => {
  return (
    <div className='box'>
      <main className="cards">
        <section className="cardcontact">
            <div className="icons">
                <img src={Icons} alt="Contact us."/>
                <p>This Week <img className='this-img' src={This}></img></p> 
            </div>
            <div className='sales'>
            <p>Sales</p>
            <p>Volume</p>
            </div>
            <div className='price'>
            <p>#4,000,000.00</p>
            <p>450</p>
            <span><p className='minus'> +20.00%</p></span>
            </div>
        </section>
    </main>

    <main className="cards">
        <section className="cardcontact">
            <div className="icons">
                <img src={Icons} alt="Contact us."/>
                <p>This Week <img className='this-img' src={This}></img></p> 
            </div>
            <div className='sales'>
            <p>Sales</p>
            <p>Volume</p>
            </div>
            <div className='price'>
            <p>#4,000,000.00</p>
            <p>450</p>
            <span><p className='minus'> +20.00%</p></span>
            </div>
        </section>
    </main>

    <main className="cards">
        <section className="cardcontact">
            <div className="icons">
                <img src={Icons} alt="Contact us."/>
                <p>This Week <img className='this-img' src={This}></img></p> 
            </div>
            <div className='sales'>
            <p>Sales</p>
            <p>Volume</p>
            </div>
            <div className='price'>
            <p>#4,000,000.00</p>
            <p>450</p>
            <span><p className='minus'> +20.00%</p></span>
            </div>
        </section>
    </main>
    </div>
  )
}

export default StatBox
