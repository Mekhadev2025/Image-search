
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
export default function Navbar(){
return (
    <div className="navbar">
    
   <div className="sections">
   <ul>
        <li>
          <Link to="/" className='LINK'>HOME</Link>
        </li>
        <li>
          <Link to="/signup" className='LINK'>Sign up</Link>
        </li>
        
      </ul>
</div>
 
  

 </div>

 

)

}