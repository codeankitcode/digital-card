import React from "react";
import twitterIcon from '../images/Twitter-Icon.png'
import facebookIcon from '../images/Facebook-Icon.png'
import githubIcon from '../images/GitHub-Icon.png'
import instagramIcon from '../images/Instagram-Icon.png'

export default function Footer(){
    return (
        <footer className="footer">
            <a href="https://twitter.com/bolankit" target="_blank"><img src={twitterIcon}/></a>
            <a href="https://www.facebook.com/bolankit/" target="_blank"><img src={facebookIcon}/></a>
            <a href="https://www.instagram.com/bolankit/" target="_blank"><img src={instagramIcon}/></a>
            <a href="https://github.com/codeankitcode" target="_blank"><img src={githubIcon}/></a>
        </footer>
    )
}