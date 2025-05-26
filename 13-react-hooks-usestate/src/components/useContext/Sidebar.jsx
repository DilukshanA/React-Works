import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Sidebar = () => {

    const {name} = useContext(AppContext);
    const {phone} = useContext(AppContext);

  return (
    <div className='felx -flex-col border-2 p-4 rounded-lg m-4'>
        Sidebar
        <h1>Name : {name}</h1>
        <h1>Phone : {phone}</h1> 
    </div>
  )
}

export default Sidebar