
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import "../styles/Navbar.css"
export default function Navbar(){
return (
    <div className="navbar bg-body-tertiary">
        <div className="container-fluid">
                    <Link to="/" className='LINK'>Auth-Mern</Link>
                    <button>
                    <Link to="/signup" className='LINK'>Sign up</Link>
                    </button>
        </div>
                    
    </div>
)
}