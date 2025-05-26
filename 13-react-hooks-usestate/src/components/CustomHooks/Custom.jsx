import React, { useEffect, useState } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'

const Custom = () => {

    // const [name, setName] = useState(
    //     localStorage.getItem("username") ?
    //     localStorage.getItem("username") :''
    // );

    // useEffect(() => {
    //     localStorage.setItem("username", name);
    // },[name]);

    const [name, setName] = useLocalStorage("username",'');
    const [status, setStatus] = useLocalStorage('status', '');

  return (
    <div className='flex flex-col items-center justify-center mt-12 text-2xl 
    font-semibold space-y-4'>
        <input type='text' className='border-1 rounded-lg px-4 py-2'
        placeholder='Enter your name' value={name}
        onChange={(e) => setName(e.target.value)}/>
        <input type='text' className='border-1 rounded-lg px-4 py-2'
        placeholder='Enter your status' value={status}
        onChange={(e) => setStatus(e.target.value)}/>
        <h1>Hello, {name}!</h1>
        <h1>Your status : {status}</h1>
    </div>
  )
}

export default Custom