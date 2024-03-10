
import './App.css';
import H1 from './components/Home';
import R1 from './components/Register';
import S1 from './components/Signin';
import F1 from './components/Forget';
import LO from './components/Login';
import UP from './components/Update';
import DE from './components/Delete';
import N1 from './components/Nav';
import RN from './components/Resposivenavbar';
import N2 from './components/Navi';
import S2 from './components/Ser';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
  <BrowserRouter>
    <div className="App">
      
      

      <div className="App-body hp" >
      <N1/>



      <Routes>  
        <Route path='/' element={<H1 />}></Route>
        <Route path='/Reg' element={<R1 />}></Route>
        <Route path='/B' element={<H1 />}></Route>
        <Route path='/S1' element={<S1 />}></Route>
        <Route path='/F1' element={<F1 />}></Route>
        <Route path='/log' element={<LO />}></Route>
        <Route path='/upd' element={<UP/>}></Route>
        <Route path='/del' element={<DE />}></Route>
        <Route path='/Ser' element={<S2 />}></Route>
        
      </Routes>


      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
