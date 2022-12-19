// import logo from './logo.svg';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import './App.css';
import './boot.css';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


// let name = 'harry'
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#353232'
      showAlert('Dark mode has been enabled', 'success')
      document.title = 'TextUtils -- DarkMode On';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode has been enabled', 'success')
      document.title = 'TextUtils -- DarkMode Off'
    }
    setTimeout(() => {
      document.title = 'TextUtils -- Home'
    }, 3000);
  }
  return (
    <>
      {/* <Router> */}
        <Navbar siteName='Capitilizer App' mode={mode} navItem1='Home' navItem2='About ' toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-1">
          {/* <Routes> */}
            {/* <Route path='about' element={<About/>}/> */}
          {/* </Routes> */}
          {/* <Routes> */}
            {/* <Route path='/' element={}/> */}
            <TextForm showAlert={showAlert} heading='Enter the text to analyze' mode={mode} />
          {/* </Routes> */}
        </div>
              
      {/* </Router> */}






      {/* <Navbar/> */}
    </>
  )
}
export default App;
