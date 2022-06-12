import React from 'react'
import './navBar.css'


export default function NavBar() {

    return (
        
        <nav>
        <div className="logo">
                <a href=""><img src="https://res.cloudinary.com/pgsama/image/upload/v1654583288/nbfic1gv08lmf6r5hopu.png" alt=""/></a>
            </div>
            <div className="nav-links">
                <a className="menu-item" href="#home">Inicio</a>
                <a className="menu-item" href="">Nosotros</a>
                <a className="menu-item" href="#categories">Productos</a>
                <a className="menu-item-highlight"href="">Ingresar</a>
                <a className="menu-item-register" href="">Registrate</a>
            </div>
            <div className="menu-icon">
                <i className="fa fa-bars"></i>

            </div>
        </nav>
       
    );


}