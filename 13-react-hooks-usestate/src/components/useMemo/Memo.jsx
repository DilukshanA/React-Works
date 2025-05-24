import React, { useMemo, useState } from 'react'

const Memo = () => {

    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);


    function cubeNumber(num) {
        console.log('calculation done!');
        return Math.pow(num, 3);
    }

    // const result = cubeNumber(number); // this will recalculate on every render

    // solution using useMemo
    const result = useMemo(() => {
        return cubeNumber(number);
    },[number]); // this will recalculate only when 'number' changes

  return (
    <div className='flex flex-col items-center justify-center mt-12 text-2xl 
    font-semibold space-y-4'>
        <div className='felx flex-col items-center justify-center space-y-4'>
            <input type='number' value={number} className='border-1 rounded-lg px-4 py-2'
            onChange={(e) => setNumber(e.target.value)}/>
            <h1>Cube of {number} : {result}</h1>
        </div>
        <div className='felx flex-col items-center justify-center space-y-4'>
            <h1>Count : {count}</h1>
            <button className='border-2 px-6 py-3 rounded-lg hover:bg-gray-100'
            onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    </div>
  )
}

export default Memo