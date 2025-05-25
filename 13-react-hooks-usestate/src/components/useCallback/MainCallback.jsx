import React, { useCallback, useState } from 'react'
import Header from './Header';

const MainCallback = () => {

    const [count, setCount] = useState(0);

    // const newFn = () => {} // this will create a new function on every render

    // solution using useCallback
    const newFn = useCallback(() => {}, []);

  return (
    <div className='flex flex-col items-center justify-center mt-12 text-2xl 
    font-semibold space-y-4'>
        <Header newFn={newFn}/>
        <h1>Count : {count}</h1>
        <button className='border-2 px-6 py-3 rounded-lg hover:bg-gray-100'
        onClick={() => setCount((prev) => prev + 1)}>
            Increase
        </button>
    </div>
  )
}

export default MainCallback