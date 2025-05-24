import { useState } from "react";

const RenderCheck = () => {

    const [count, setCount] = useState(0);

    console.log('Component Rendered');

  return (
    <div className='flex flex-col items-center justify-center mt-12 text-2xl 
    font-semibold space-y-4'>
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

export default RenderCheck