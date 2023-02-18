import React from "react";
import twitterIcon from '../images/Twitter-Icon.png'
import facebookIcon from '../images/Facebook-Icon.png'
import githubIcon from '../images/GitHub-Icon.png'
import instagramIcon from '../images/Instagram-Icon.png'

export default function Footer(){
    return (
        <footer className="footer">
            <a href="#"><img src={twitterIcon}/></a>
            <a href="#"><img src={facebookIcon}/></a>
            <a href="#"><img src={instagramIcon}/></a>
            <a href="#"><img src={githubIcon}/></a>
        </footer>
    )
}