
 import React from 'react'
 import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Layout from "../src/pages/Layout"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
 export default function App()
 {
    return(
<BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="signup" element={<SignUp/>} />
         </Route>
       </Routes>
     </BrowserRouter>
       
    )
 }