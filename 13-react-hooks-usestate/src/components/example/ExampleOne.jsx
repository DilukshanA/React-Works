import React, { useState } from 'react'

const ExampleOne = () => {

    const [car, setCar] = useState(
        {
            brand: 'Ferari',
            model: 'F8',
            year: 2020,
            color: 'red',
        }
    );

    const changeColor = () => {
        // setCar((car) => {
        //     return {
        //         ...car, color: car.color === 'red' ? 'blue' : 'red'
        //     }
        // })
        setCar((car) => ({
            ...car, color: car.color === 'red' ? 'blue' : 'red'
        }))
    }
  return (
    <div className='text-2xl flex flex-col items-center justify-center font-semibold mt-10'>
        <h1>My {car.brand}</h1>
        <h1>It is a {car.color} {car.model} from {car.year}</h1>
        <button className='border-2 px-6 py-3 rounded-lg hover:bg-gray-100'
        onClick={changeColor}>
            Change
        </button>
    </div>
  )
}

export default ExampleOne