import { Contact } from 'lucide-react'
import React from 'react'
import ContactUser from './Components/Section4/ContactUser'
import AuthImg from './Components/Section4/AuthImg'

const Section4 = () => {
    return (
        <div className='flex flex-wrap justify-around'>
            <AuthImg />
            <ContactUser />
        </div>
    )
}

export default Section4