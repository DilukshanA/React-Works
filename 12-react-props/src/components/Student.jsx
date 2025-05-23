import PropTypes from 'prop-types';

    Student.propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        student: PropTypes.bool
    }

    Student.defaultProps = {
        name: "Guest",
        age: 0,
        student: false
    }

function Student(props) {

    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.student ? "Yes" : "No"}</p>
        </div>
    )
}

export default Student;