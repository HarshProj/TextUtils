import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route} from "react-router-dom"

function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="black"
      document.body.style.color="white"
      document.title="TextUtils-Darkmode";
      showAlert('Dark Mode has been enabled',"success")
      // setInterval(() => {
      //   document.title="TextUtils is Amazing";
        
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install it now TextUtils is Amazing";
        
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      document.body.style.color="black"
      document.title="TextUtils-Lightmode";
      showAlert('Light Mode has been enabled',"success")
    }
  }
  const toggleMode2=()=>{
    if(mode==='light'||mode==='dark'){
      setMode('blue')
      document.body.style.backgroundColor="blue"
      document.body.style.color="white"
      showAlert('Dark Mode has been enabled',"success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      document.body.style.color="black"
      showAlert('Light Mode has been enabled',"success")
    }
  }
  return (
    <>
        {/* <Navbar title="Hello" aboutText="About Texutils"/> */}
        {/* <Navbar/> */}
        {/* <Router> */}
          
        <Navbar title="Hello" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        <TextForm mode={mode} showAlert={showAlert} heading="Enter the text to analyze below"/>
        {/* <About/> */}
        {/* use exact other wise react will render only that component whose first character i matched */}
        {/* <Routes>
          <Route exact path='/about'  element={<About/>} />
          <Route exact path='/'element={<TextForm mode={mode} showAlert={showAlert} heading="Enter the text to analyze below"/>}/>
         
        </Routes> */}

        </div>
        {/* </Router> */}
    </>
  );
}

export default App;
