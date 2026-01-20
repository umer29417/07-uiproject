import React from 'react'
import "tailwindcss";
import Navbar from './Components/Section1/Navbar'
import Bottom from './Components/Section1/Bottom'
import Services from './Components/Section1/Services'
import Button from './Components/Section1/Button'



const Section1 = () => {
    return (
        <div>
            <Navbar />
            <Services />
            <Bottom />
            <Button text="MORE INFORMATION" />
        </div>
    )
}

export default Section1
