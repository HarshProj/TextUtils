import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Upper case was clicked")
        const Upcase=text.toUpperCase();
        setText(Upcase);
        props.showAlert("Converted to Upper Case","success")
      }
      const handleLoClick=()=>{
        const Upcase=text.toLowerCase();
        setText(Upcase);
        props.showAlert("Converted to Lower Case","success")
      }
      const handleClrClick=()=>{
        const Upcase="";
        setText(Upcase);
        props.showAlert("Text Cleared","success")
      }
      const handleCopy=()=>{
        const copy=document.getElementById("myBox");
        // var copy=text;
        copy.select();
        navigator.clipboard.writeText(copy.value);
        props.showAlert("Copied to clip Board","success")
      }
      //Very bahut jaruri aur msst  function hoiss 
      const handleRemove=()=>{
        const copy=text.split(/[ ]+/);
        setText(copy.join(" "))
        props.showAlert("Extra spaces are removed","success")
      }
      const Remove=()=>{
        const copy=text.split(/[ ]+/);
        return copy.join(" ")
      }
      
      const handleRevClick=()=>{
        let Rev="";
        let n=text.length-1;
        let i=0;
        while(text[i]!=null){
          Rev+=text[n];
          n--;
          i++;
        }
        setText(Rev);
        props.showAlert("Text is reversed","success")
    }

    const handleOnChange=(event)=>{
        // console.log("Upper case was clicked")
        setText(event.target.value)
    }
    const [text,setText]=useState("");
  return (<>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea  className="form-control" value={text} id="myBox" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowererCase</button>
        <button className="btn btn-primary mx-1" onClick={handleRevClick}>Reverse The text</button>
        <button className="btn btn-primary mx-1" onClick={handleClrClick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleRemove}>Remove extra spaces</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{Remove().split(" ").length-1} words and {Remove().length} characters</p>
      <p>{0.008*(Remove().split(" ").length-1)} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter your text box above preview here"}</p>
    </div>
  </>
  )
}
