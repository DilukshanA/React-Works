import { useState } from "react";
import userData from './../../../data/user'

function StateObject() {

    const [user, setUser] = useState(userData);
    return (
        <div className="my-8 flex flex-col items-center">
            {user.map((u) => (
                <div key={u.id} className="flex flex-col text-xl border-1 px-6 py-4 rounded-lg">
                    <h1>id : {u.id}</h1>
                    <h1>Name : {u.name}</h1>
                    <h1>Age : {u.age}</h1>
                </div>
            ))}
        </div>
    )
}

export default StateObject;