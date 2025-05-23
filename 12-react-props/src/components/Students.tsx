type StudentProps = {
    name?: string,
    age?: number,
    isStudent?: boolean
}

function Students(props : StudentProps) {

    const {
        name ="Guest",
        age = 0,
        isStudent = false
    } = props
    
    return (
        <div className="border border-2 border-black p-4 m-4 rounded-2xl">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>isStudent: {isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

export default Students