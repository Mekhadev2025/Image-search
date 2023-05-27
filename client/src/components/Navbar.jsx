import Home from "../pages/Home"
import SignUp from "../pages/SignUp"
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
export default function Navbar(){
return (
<div>
    
    <BrowserRouter>
        <Routes>
             <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            
        </Routes>
    </BrowserRouter>

         
 


</div>

)

}