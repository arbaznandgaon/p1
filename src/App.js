import logo from './logo.svg';
import './App.css';
import AboutUs from './Components/AboutUs';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContactUs from './Components/ContactUs';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path='/' Component={AboutUs}/>

        <Route path='/contact' Component={ContactUs}/>
       
      </Routes>
    </BrowserRouter>
     {/* <AboutUs/> */}
    </div>
  );
}

export default App;
