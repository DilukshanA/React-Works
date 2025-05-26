import React, { useEffect, useLayoutEffect } from 'react'

const UseLayout = () => {

    useEffect(() => {
        console.log('Message from useEffect');
    })

    useLayoutEffect(() => {
        console.log('Message from useLayoutEffect');
    })

  return (
    <div className='flex flex-col items-center justify-center mt-12 text-2xl 
    font-semibold space-y-4'>
        <h1>Text Message</h1>
        {Array(4000).fill('').map((item, index) => (
            <li key={index}>{Math.pow(Math.random(), 2)}</li>
        ))}
    </div>
  )
}

export default UseLayout