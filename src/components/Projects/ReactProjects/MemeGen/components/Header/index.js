import React from "react"
import './index.scss'
import LogoM from "../../images/logo4.png" 

export default function Header() {
    return (
        <header className="header">
            <img 
                src={LogoM}
                className="header-image"
            />
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">React Project</h4>
        </header>
    )
}