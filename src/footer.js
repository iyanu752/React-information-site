import React from "react";
import Twitter from "./icons8-twitter-50 (1).png";
import Instagram from "./icons8-instagram-50.png";
import Github from "./icons8-github-64.png";
function Handles() {
    return(
        <div className="footer-container">
            <div className="footer-twitter">
                <img src= {Twitter} />
            </div>

            <div className="footer-instagram">
            <img src= {Instagram} />
            </div>

            <div className="footer-github">
                <img src= {Github} />
            </div>
        </div>
    );
}

export default Handles;