import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div className="flex flex-col item-center justify-center ">
            <h1 className="text-3xl">{count}</h1>

            <div>
                <button className="bg-green-500 px-10 py-2"
                onClick={increment}>+</button>
                <button className="bg-red-500 px-10 py-2"
                onClick={() => decrement()}>-</button>
            </div>
        </div>
    )
}

export default Counter;