import React from "react";
import Twitter from "./icons8-twitter-50 (1).png";
import Instagram from "./icons8-instagram-50.png";
import Github from "./icons8-github-64.png";
function Handles() {
    return(
        <div className="footer-container">

        <div className="footer-twitter">
        <button className="twitter-btn" >
                <img className="twitter-img" src= {Twitter} />
            </button>
        </div>

        <div className="footer-instagram">
        <button className="instagram-btn" >
            <img className="instagram-img" src= {Instagram} />
            </button>

        </div>

        <div className="footer-github">
        <button className="github-btn">
                <img className="github-img" src= {Github} />
            </button>
        </div>
             
        </div>
    );
}

export default Handles;