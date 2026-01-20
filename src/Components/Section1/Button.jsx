import React from 'react'

const Button = ({ text }) => {
    return (
        <div className='w-full flex items-center justify-center pb-15'>
            <button className='border-blue-700 border-4 px-20 py-5 text-[25px] text-blue-700 hover:bg-blue-700 hover:text-white rounded-2xl hover:cursor-pointer'>
                {text}
            </button>
        </div>
    )
}

export default Button
