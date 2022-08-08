import React from "react";
import troll_face from "../images/troll-face.png";
function Header(){
    return(
       <header className="header">
        <img className="header--image" alt="Troll Face" src={troll_face} />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project"> React Course - project 3</h4>
       </header>
    )
}
export default Header;