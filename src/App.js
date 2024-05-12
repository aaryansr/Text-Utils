
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import { BrowserRouter, Route } from "react-router-dom";
// import {
//   Routes,
// } from "react-router-dom";
import Alert from './components/Alert';
function App() {
  const [mode,setMode]= useState('light');
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    //Here type defines the type of Alert
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  
  return (
    <>
    {/*<BrowserRouter>*/}
      <Navbar title="TextUtils" title2="About US" mode={mode} set={setMode} set1={showAlert}/>
      <Alert alert={alert} />
      <div className='container my-3'>
        {/*<Routes>*/}
          {/* <Route path="/about" element={<About/>}></Route> */}
          {/* <Route path="/" element={<Textform heading="Enter the text to Utilise" categ="Write Text Here" mode={mode} showAlert={showAlert}/>}></Route> */}
        {/*</Routes>*/}
        <Textform heading="Enter the text to Utilise" categ="Write Text Here" mode={mode} showAlert={showAlert}/>
        {/*<About />*/} 
      </div>
      {/* </BrowserRouter>       */}
    </>  
);}

export default App;
