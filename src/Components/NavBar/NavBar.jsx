import React, {useState} from 'react';
import './NavBar.css'
import { FaBars } from "react-icons/fa6";

function NavBar() {
    const [isOPen, setIsOpen] =useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOPen);
    }


    return (
        <>
            <header>
        <div className="container">
            <nav>
                <img src="../../Assets/logo.png" alt="Logo" />
                <ul className={isOPen ? "nav-link active" : "nav-link"}>
                    <li><a href="/home" className='active'>Home</a></li>
                    <li><a href="/find_job">Find Job</a></li>
                    <li><a href="/earnings">Earnings</a></li>
                    <li><a href="/Appointments">Appointments</a></li>
                    <li><a href="/profile">Profile</a></li>
                </ul>
                <div className="icon" onClick={toggleMenu}>
                    <FaBars />
                </div>
            </nav>
        </div>
        </header>
    <section>
        <div className="container">
            <div className="content">

            </div>
        </div>
    </section>
    </>
    );
}

export default NavBar;
