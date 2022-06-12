import React from 'react'
import './HomeSection.css'

export default function HomeSection() {

    return (
        // eslint-disable-next-line react/style-prop-object
        <div className='home-box'>
        <div className="home-container">
            <h1>Bienvenidos a LLOWITEC!! Tienda Tecnologica Online a tu Alcance</h1>
            <p >
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit quia nemo corporis quos fuga eveniet assumenda, obcaecati corrupti iure reprehenderit temporibus similique deserunt sint optio eligendi itaque incidunt libero.
            </p>
        </div>
        <div className="home-image">
            <img src="https://res.cloudinary.com/pgsama/image/upload/v1654583289/cmlgjati6kmqfsrf8ojq.png" alt=""/>
        </div>
        </div>
    )
    
}
