import React ,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
// console.log("Uppercase was clicked"+ text);    It is just to see in the coonsole
let newText=text.toUpperCase();
setText(newText);

    }
    const handledOnChange=(event)=>{ console.log("On change");

setText(event.target.value);

}
    const [text,setText]=useState('Enter the text here');
  return (
    <div>
        <h1>{props.heading}</h1>
  <div className="mb-3">
  <div className="container">

<textarea className="form-control"value={text} onChange={handledOnChange} id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn primarily" onClick={handleUpClick}>Convert to upper case</button>


  </div>
      
    </div>
  )
}
