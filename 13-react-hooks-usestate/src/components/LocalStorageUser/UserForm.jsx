import React, { useState } from 'react'

const UserForm = () => {

  const [user, setUser] = useState(
    {
      name:'',
      age:''
    }
  );

  function handleSubmit() {
    console.log(user);
  }

  return (
    <div className='flex flex-col items-center border-2 rounded-2xl mx-4 my-4'>
      <div className='flex items-center my-8 space-x-6'>
        <h1>Name : </h1>
        <input type='text' placeholder='Enter your Name' className='border-1 border-black rounded-lg px-6 py-2'
        onChange={(e) => setUser(
          {...user, name: e.target.value}
        )}/>
      </div>
      <div className='flex items-center mb-8 space-x-6'>
        <h1>Age : </h1>
        <input type='number' placeholder='Enter your Age' className='border-1 border-black rounded-lg px-6 py-2'
        onChange={(e) => setUser(
          {...user, age: e.target.value}
        )}/>
      </div>

      <button className='border-1 py-4 px-6'
      onClick={handleSubmit}>Console</button>
    </div>
  )
}

export default UserForm