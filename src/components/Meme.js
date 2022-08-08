import React, { useEffect }  from "react";
import memesData from "../memesData";
import {useState} from 'react';
function Meme(){

    const [meme, setMeme]=useState({
        topText:'',
        bottomText:'',
        randomImage:'http://i.imgflip.com/1bij.jpg'
    });
    
    const [allMemes,setAllMemes]=useState(memesData);

    useEffect(()=>{
        async function getMemes(){
            const res=await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data.data.memes);
        }
        getMemes()
    },[])

    function getMemeImage(){
        console.log("clicked");
        // const memesArray=allMemes.data.memes;
        const randomNumber=Math.floor(Math.random()*allMemes.length);
        const url=allMemes[randomNumber].url;
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url,
        }));  
    }

    function handleChange(event){
        const {name, value}=event.target;
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value,
        }))
    }
    return (
        <main>
            <div className="form">
            <input 
            className="form--input" 
            type="text" 
            placeholder="Top Text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}

            />
            <input 
            className="form--input" 
            type="text" 
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}

            />
            <button 
            className="form--button" 
            onClick={getMemeImage
            }>Get a New Meme Image </button> 
            </div>
            <div className="meme">
            <img src={meme.randomImage} className="meme--image" alt="Meme Image"/>
            <h2 className="meme--text top">{meme.topText} </h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}
export default Meme;