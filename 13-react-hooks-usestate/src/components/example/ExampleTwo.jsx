import React, { useEffect, useState } from 'react'

const ExampleTwo = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('John');

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
        }, 1000);
    },[count,name]);

    const changeName = () => {
        setName(name === 'John' ? 'Doe' : 'John');
    }

  return (
    <div className='text-2xl flex flex-col items-center justify-center font-semibold mt-10'>
        <h1>I have rendered {count} times</h1>
        <button className='border-2 px-6 py-3 rounded-lg hover:bg-gray-100'
        onClick={changeName}>
            Click
        </button>
    </div>
  )
}

export default ExampleTwo