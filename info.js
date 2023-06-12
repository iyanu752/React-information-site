import React from 'react';
import PortfolioImg from './portfolio picture.jpg';
import Email from './icons8-email-30.png';
import Linkedin from './icons8-linkedin-48.png';


function Info() {
    return (
        <div>
    
        <img className='info-img' src= {PortfolioImg} />
        <h2> Ahmed Iyanuoluwa</h2>
        <p className='software-dev'> Software developer</p> 



        <div className='flex-buttons'>
            <div className='flex-email'>
            <button className='email-btn'> <img className='email-logo' src= {Email} /> Email</button>
            </div>
            <div className='flex-linkedin '>
            <button className='linkedin-btn'> <img className='linkedin-logo' src= {Linkedin} /> LinkedIN </button>
            </div>

            
         </div>       
    </div>
    );
    
}

export default Info;

