import React from 'react'
import ImgContainer from "./ImgContainer"
import "tailwindcss";
import Nav from './Nav';


const Navbar = () => {
    return (
        <div className='p-4 h-30==25 w-full flex justify-between'>
            <ImgContainer />
            <Nav />
        </div>
    )
}

export default Navbar