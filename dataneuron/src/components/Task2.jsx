import React from 'react';
// Corrected the import statement for axios
import axios from 'axios';
import Addtask from './Addtask';
import './style/style.css' 

export default function Task2() {
    const [status, setstatus] = React.useState(false)
    function Adddata(){
        setstatus(true)
    }
    // function postdata(){
    //     // Assuming you might want to send some data with the post request, you can pass it as the second argument to axios.post
    //     axios.post('http://localhost:3001/api/add', { /* your data here */ })
    //          .then((r) => console.log('yes'))
    //          .catch((error) => console.error('Error posting data:', error)); // It's good practice to catch any errors
    // }

     // The empty array ensures this effect runs only once after the initial render

    return (
        <div className='main'>
            <button  className='btn1' onClick={Adddata}>Add</button> <br/><br/>
            {status ? <Addtask/>  : null}


        </div>
    );
}
