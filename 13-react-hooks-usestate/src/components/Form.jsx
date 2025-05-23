import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    //store name and age into local storage 
    const handkeClick = () => {
        console.log("Name : ",name);
        console.log("Age : ",age);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
    }
  return (
    <div className='flex flex-col items-center justify-center my-12 border-2 border-black rounded-xl
    mx-12 py-6'>
        <div className='flex items-center space-x-4'>
            <h1>Name</h1>
            <input type='text' placeholder='Enter your name' className='border border-1 border-black rounded-lg px-6 py-2' 
            onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className='flex items-center space-x-4 mt-4'>
            <h1>Age</h1>
            <input type='number' placeholder='Enter your age' className='border border-1 border-black rounded-lg px-6 py-2'
            onChange={(e) => setAge(e.target.value)}/>
        </div>
        <button className='mt-6 bg-blue-500 px-10 py-2 rounded-xl'
        onClick={() => handkeClick()}>Submit</button>

        <div>
            <h1>Submit Data</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    </div>
  )
}

export default Form