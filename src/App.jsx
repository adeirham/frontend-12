// import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Route, Routes } from 'react-router-dom'
// import Home from './Pages/home'
// import LandingPage from './Pages/LandingPage'
// import Landing from './Pages/Landing'


// function App() {

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/landingpage" element={<Landing/>} />
//       </Routes>
//     </>
//   )
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import IndukProps from "./Pages/induk.props";
import Landing from "./Pages/Landing";
import State from "./Pages/State";
import EvenHandling from "./Pages/eventhandling";
import UseEffect from "./Pages/UseEffect";
import ReactContext from "./Pages/ReactContext";
import GetMahasiswa from "./Componen/admin/GetMahasiswa";
import CreateMahasiswa from "./Componen/admin/CreateMahasiswa";
import Login from "./Componen/auth/Login";
import Register from "./Componen/auth/Register";




function App() {
  return ( 
    <>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/indukprops" element={<IndukProps/>}/>
          <Route path="/landingpage" element={<Landing/>}/>
          <Route path="/state" element={<State/>}/>
          <Route path="/eventhandling" element={<EvenHandling/>}/>
          <Route path="/effect" element={<UseEffect/>}/>
          <Route path="/reactcontext" element={<ReactContext/>}/>
          <Route path="/get" element={<GetMahasiswa/>}/>
          <Route path="/tambah" element={<CreateMahasiswa/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
   );
}

export default App;
