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
   

    return (
        <div className='main'>
            <button  className='btn1' onClick={Adddata}>Add</button> <br/><br/>
            {status ? <Addtask/>  : null}


        </div>
    );
}
