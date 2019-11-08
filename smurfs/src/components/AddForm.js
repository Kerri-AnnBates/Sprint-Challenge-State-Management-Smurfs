import React, {useState} from 'react'

const AddForm = () => {
    const [value, setValue] = useState({
        name: '',
        age: '',
        height: ''
    });

    const [smurf, setSmurf] = useState({});
    
    const handleChange = (name, e) => {
        setValue({...value, [name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSmurf = {
            name: value.name,
            age: value.age,
            height: value.height
        }
        console.log(newSmurf);
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

export default AddForm;