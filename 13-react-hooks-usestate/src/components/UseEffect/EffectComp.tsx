import { useEffect, useState } from "react";

function EffectComp() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green-500");

    function add() {
        setCount(c => c + 1);
    }

    function remove() {
        setCount(c => c - 1)
    }

    function changeColor() {
        setColor(c => c === "green-500" ? "red-500" : "green-500");
    }

    useEffect(() => {
        document.title = `Count : ${count} ${color}`;
    }, [count, color]);

    return (
        <div className="flex flex-col items-center justify-center">
            <div>
                <h1 className="text-4xl font-semibold">Count : {count}</h1>
            </div>
            <div className="mt-6 space-x-4">
                <button className="border-2 px-6 py-3 rounded-lg text-lg"
                onClick={add}>
                    Add
                </button>
                <button className="border-2 px-6 py-3 rounded-lg text-lg"
                onClick={remove}>
                    Remove
                </button>
            </div>

            <div className="mt-6">
                <h1 className={`text-4xl font-semibold mb-6 text-${color}`}>Color : {color}</h1>
                <button className="border-2 px-6 py-3 rounded-lg text-lg"
                onClick={changeColor}>
                    Change Color
                </button>
            </div>
        </div>
    )
}

export default EffectComp;