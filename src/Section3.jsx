import React from 'react'
import Top from './Components/Section3/Top'
import Center from './Components/Section3/Center'
import Bottom from './Components/Section3/Bottom'
import Button from './Components/Section1/Button'

const Section3 = () => {
    return (
        <div>
            <Top />
            <Center />
            <Bottom />
            <div className='pt-10'>
                <Button text="Learn More" />
            </div>
        </div>
    )
}

export default Section3