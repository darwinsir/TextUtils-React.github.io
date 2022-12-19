import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log('Boss handleUpclick function is turned on')
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Your whole data is converted to UpperCase','success')
  }
  const handleDownClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert('Your whole data is converted to lowercase','success')
  }
  const handleOnChange = (event) =>{
    // console.log('Changing in progress');
    // setText('')
    setText(event.target.value)

  }




  // buttons
  const onKeyPress = ()=>{
    setText2('Stopped')
  }
  const onKeyDown = ()=>{
    setText2('Writing...')
  }
  const toReset = ()=>{
    setText('')
    props.showAlert('TextArea is Resetted','success')
  }
  const copy = ()=>{
    navigator.clipboard.writeText(text)
    props.showAlert('Your text is copied','success')
}

  
  const [text, setText] = useState('');
  const [text2,setText2] = useState('')
  let stringifyText = JSON.parse(JSON.stringify((text.split(' '))))
  let list = []

 
  const titleForm =() =>{
  stringifyText.forEach(desh => {
  //   list.push(desh)
      return list.push(desh.charAt(0).toUpperCase() + desh.slice(1));
    })
    const test = list.join(' ')
    // console.log(test)
    setText(test)
    props.showAlert("Your whole data changed to Title Form",'success')
  }
  
const extraSpaceRemover = ()=>{
  let newText = text.split(/[ ]+/)
  setText(newText.join(' '))
  props.showAlert('All Extra spaces are removed from Your Data','success')
}

    return (
        <>
        <div className="container my-1" style={{color: props.mode==='light'?'black':'#dcc2c2'}} >
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <h1>{props.heading}</h1>
    <div className='material-symbols-outlined little-Border'><div onClick={copy} style={{display: 'flex',justifyContent: 'end', width:'100%'}}>
<span className="material-symbols-outlined" style={{display:'flex'}}>
content_copy
</span>
</div></div>
    <div className="form-floating" >
    <textarea className="form-control textarea" value={text} style={{backgroundColor: props.mode ==='dark'?'whitesmoke':'#rgb(235 210 210)',color: 'black'}} onChange={handleOnChange} placeholder="Enter the Text" id="floatingTextarea" rows={100} cols={150} onKeyUp={onKeyPress} onKeyDown={onKeyDown} formcontrolname="txt" ></textarea>
    {/* <label for="forMyBox">Comments</label> */}
    </div><br />
<div style={{display:'grid',gridTemplateColumns:'2fr 2fr'}}><div>{text2}</div>
<div>
  <p style={{display: 'flex',justifyContent: 'end'}}>{0.0032*(text.split(' ').length - 1)} Minutes to read</p>
  <p style={{display: 'flex',justifyContent: 'end'}}>{text.split(' ').length - 1} Words and {text.length} Characters</p>
</div>
</div><br />
<button className="btn btn-primary" onClick={handleUpClick}>convert to upper case</button>
<button className="btn btn-primary" id='side-btn' onClick={handleDownClick}>convert to lowecase</button>
<button className="btn btn-primary" id='side-btn' onClick={toReset}>Clear Text Area</button>
<button className="btn btn-primary" id='side-btn' onClick={titleForm}>Title form</button>
<button className="btn btn-primary" id='side-btn' onClick={extraSpaceRemover}>Extra Space Remover</button>
<div className='my-5'>
<h2>Preview</h2>
<p className='preview'>{text.length>0?text.slice(0,280)+'....':'Enter the text to preview'}</p></div>
</div>

</>
  )
}
