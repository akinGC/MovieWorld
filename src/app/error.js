'use client'
import React from 'react'

function Error({error,reset}) {
    return (
        <div className=' flex flex-col justify-center items-center mt-24'>
            <h1 className=' text-amber-500 text-2xl'>Something went wrong</h1>
            <button className='mt-3 border rounded p-3 bg-blue-500 active:scale-50'>Try again!</button>
        </div>
    )
}

export default Error
