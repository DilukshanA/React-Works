import React, { useReducer } from 'react'

const Reducer = () => {

    const initialSatate = {
        count: 0,
    }

    const reducer = (state, action) => {
        if(action.type === 'INCREASE') {
            return {
                ...state,
                count: state.count + 1,
            }
        }
        if(action.type === 'DECREASE') {
            return {
                ...state,
                count: state.count -1,
            }
        }
        if(action.type === 'INPUT') {
            return {
                ...state,
                count: action.payload,
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialSatate);

  return (
    <div className='flex flex-col items-center justify-center mt-12 text-2xl 
    font-semibold space-y-4'>
        <h1>Count : {state.count}</h1>
        <div className='flex space-x-2'>
            <button className='border-2 px-6 py-3 rounded-xl hover:bg-gray-100'
            onClick={() => dispatch({ type: 'INCREASE'})}>
                Increase
            </button>
            <button className='border-2 px-6 py-3 rounded-xl hover:bg-gray-100'
            onClick={() => dispatch({ type: 'DECREASE'})}>
                Decrease
            </button>
        </div>
        <input type='number' value={state.count} className='border-1 rounded-lg px-4 py-2'
        onChange={(e) => dispatch({type: 'INPUT', payload: e.target.value})} />
    </div>
  )
}

export default Reducer