import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

const AddForm = (props) => {
    const { addSmurf } = props;

    const [value, setValue] = useState({
        name: '',
        age: '',
        height: ''
    });

    // Handle change dynamically
    const handleChange = (name, e) => {
        setValue({ ...value, [name]: e.target.value });
    }

    // Handle submit to create new smurf
    const handleSubmit = (e) => {
        e.preventDefault();
        const newSmurf = {
            name: value.name,
            age: value.age,
            height: value.height
        }
        addSmurf(newSmurf);
        setValue({ name: '', age: '', height: ''});
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name">Name: <input
                    type="text"
                    placeholder="Enter smurf name"
                    name="name"
                    value={value.name}
                    onChange={(e) => handleChange(e.target.name, e)}
                /></label>
                <label htmlFor="age">Age: <input
                    type="text"
                    placeholder="Enter smurf age"
                    name="age"
                    value={value.age}
                    onChange={(e) => handleChange(e.target.name, e)}
                /></label>
                <label htmlFor="height">Height: <input
                    type="text"
                    placeholder="Enter smurf height"
                    name="height"
                    value={value.height}
                    onChange={(e) => handleChange(e.target.name, e)}
                /></label>
                <input type="submit" value="Add Smurf" />
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { addSmurf })(AddForm);