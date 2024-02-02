import axios from 'axios';
import React from 'react';
import './style/style.css'
import Update from './Update';
export default function Addtask() {
    const [submit,setsubmit]=React.useState(false)
    const [formData, setFormData] = React.useState({
        role: '',
        name: '',
        title: '',
        description: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        setsubmit(true)

        e.preventDefault();
        axios.post('http://localhost:3001/api/add', formData)
             .then((response) => console.log(response))
             .catch((error) => console.log(error));


    }


    return (
        <div className='form'>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Role:</label>
                <input 
                    type="text" 
                    name="role" 
                    value={formData.role} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Title:</label>
                <input 
                    type="text" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Description:</label>
                <input 
                    type="text" 
                    name="description" 
                    value={formData.description} 
                    onChange={handleChange} 
                />
            </div> <br/><br/>
            <button className='btn2' type="submit">Submit</button>
        </form>

{submit ? <Update/>:null}


        </div>
    );
}
