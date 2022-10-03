import './App.css';
import "mdb-react-ui-kit/dist/css/mdb.min.css"
import "mdb-react-ui-kit/dist/mdb-react-ui-kit"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login.jsx/Login';
import Home from './Home/Home';
import Card from './Product/Card';
import Portal from './Portal';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/allmovies" element={<Card/>}/>

    </Routes>
    </BrowserRouter>
    
    </>
  
  );
}

export default App;
