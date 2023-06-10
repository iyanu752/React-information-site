import React from 'react';
import PortfolioImg from './portfolio picture.jpg';
import Email from './icons8-email-30.png';
import Linkedin from './icons8-linkedin-48.png';


function Info() {
    return (
        <div>
        <div className='info-container'>
        <img className='info-img' src= {PortfolioImg} />
        <h2> Ahmed Iyanuoluwa</h2>
        <p> Software developer</p>
        <p><a>Github site</a></p>
        <button> <img src= {Email} /> Email</button>
        <button> <img src= {Linkedin} /> LinkedIN </button>


        </div>
       
    </div>
    );
    
}

export default Info;

