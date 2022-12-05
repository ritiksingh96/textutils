import React , {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick =()=> {
        //console.log("Uppercase was Clicked" + text );
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case", "Success");
    }

    const handleloClick =()=> {
      //console.log("Uppercase was Clicked" + text );
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lower case","Success");
  }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }

    const handleRemoveSpace = ()=>{
     let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert("Extra spaces removed" ,"Success");
  }

  const handleCopy = ()=>{
    var Text = document.getElementById("myBox");
      Text.select();

      // Copy the text inside the text field
       navigator.clipboard.writeText(Text.value);
      props.showAlert("Text copied" , "Success"); 
  }

    const [text , setText] = useState('Enter text here');
    // text ="new text"; wrong way to change the state
    // setText("new text"); // correct way to change state
  return (
    <> 
       <div className="container" style={{color : props.mode === 'dark' ? 'white' : '#004d4d'}}>
         <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control"  value = {text} onChange={handleOnChange} 
        style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white' ,color : props.mode === 'dark' ? 'white' : '#004d4d' }}  
        id="myBox" rows="10"></textarea>
        </div>
         <button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert to Upper Case </button>
         <button className="btn btn-primary mx-2" onClick={handleloClick}>Covert to lower Case </button>
         <button className="btn btn-primary mx-2" onClick={handleOnChange}>Clear Text </button>
         <button className="btn btn-primary mx-2" onClick={handleRemoveSpace}>Remove Extra Space </button>
         <button className="btn btn-primary mx-2" onClick={handleCopy}>copy Text </button>
      </div>
      <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : '#004d4d'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
    
  )
}
