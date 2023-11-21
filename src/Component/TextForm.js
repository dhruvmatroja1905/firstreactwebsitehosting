import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
   
    let newText = text.toUpperCase();
    setText(newText);
  }
   const handleDownClick = ()=>{
   
    let newText = text.toLowerCase();
    setText(newText);
  }

  

  const handleOnchange = (event)=>{
   
    setText(event.target.value);

  }
  const handleClearClick = ()=>{
   
    
    setText("");
  }
    const [text, setText] = useState('Enter text here');
    
   
  return (
    <>
    <div className='container' style={{color:props.Mode==='light'?'black':'white'}}>
    <h1>{props.heading}  </h1>
      <div className="mb-3">
      <label htmlFor="Mybox" className="form-label">Example Textarea</label>
      <textarea className="form-control" value={text} onChange={handleOnchange} id="Mybox" rows="7" style={{backgroundColor: props.Mode==='dark'?'black':'white', color:props.Mode==='light'?'black':'white'}} ></textarea>
      <button className='btn btn-primary mx-3 my-3' onClick={handleUpClick}>Convert to UpperCase</button>
      <button className='btn btn-primary mx-3 my-3' onClick={handleDownClick}>Convert to LowerCase</button>
      <button className='btn btn-primary mx-3 my-3' onClick={handleClearClick}>Clear Text</button>
    
</div>
    </div>
    <div className='mx-5 my-5'style={{color:props.Mode==='light'?'black':'white'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length}characters</p>
    <p>{0.008 * text.split(" ").length}Minutes read</p>
    <h1>preview</h1>
    <p>{text.length>0?text:"Enter Something To Preview Here"}</p>
    </div>
    </>
  )
}
