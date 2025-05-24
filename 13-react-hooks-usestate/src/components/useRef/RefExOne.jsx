import React, { useEffect, useRef, useState } from 'react'

const RefExOne = () => {

    const [value, setValue] = useState(0);
    
    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     setCount((prev) => prev + 1);
    // })

    const count = useRef(0);

    useEffect(() => {
        console.log(count);
        count.current = count.current + 1;
    })

  return (
    <div className='flex flex-col items-center justify-center mt-12 text-2xl font-semibold space-y-4'>
        <button className='border-2 px-6 py-3 rounded-lg hover:bg-gray-100'
        onClick={() => setValue((prev) => prev + 1)}>
            +1
        </button>
        <h1>value: {value}</h1>
        <button className='border-2 px-6 py-3 rounded-lg hover:bg-gray-100'
        onClick={() => setValue((prev) => prev -1)}>
            -1
        </button>
        <h1>Rendered count : {count.current}</h1>
    </div>
  )
}

export default RefExOne