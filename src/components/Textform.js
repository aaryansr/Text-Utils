//Learning States in React Native
import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick =()=>{
        console.log("Upper Case Button was clicked   " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted Text to Uppercase","success")
    }
    const handleLowClick =()=>{
        console.log("Lower Case Button was clicked   " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted Text to Lowercase","success")
    }
    const handleOnChange =(event)=>{
        console.log('On Change')
        setText(event.target.value)
    }
    
    const [text,setText] =useState('Hooks and Whatnot');
    return (
    <>
    <div className='container' style={{color: props.mode==='#042743'?'white':'#042743'}} >
        <h1 >{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">{props.categ}</label>
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange}
            style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='#042743'?'white':'#042743'}}
            rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2'
        onClick={handleUpClick}>
        Convert to UPCS</button>
        <button className='btn btn-primary mx-2'
        onClick={handleLowClick}>
        Convert to LCS</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='#042743'?'white':'#042743'}}>
        <h1>Your Text Summary </h1>
        <p> {text.split(" ").length} words {text.length} characters</p>
        <p> {0.008*text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something Here"}</p>
    </div>    
    </>
  )
}
