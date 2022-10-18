import React from "react";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import CardRender from "../Screens/CardRender";
import Home from "../Screens/Home";
import NotFound from '../Screens/NotFound'




export default function ReactRouter() {
  return (
    <Router>


        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='CardRender' element={<CardRender/>} />
            <Route path="*" element={<NotFound/>}/>
           
        </Routes>
     
    </Router>
  );
}
