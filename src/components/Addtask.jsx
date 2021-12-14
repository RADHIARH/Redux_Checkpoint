import React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from '../redux/action';

const Addtask = () => {
        const [input,setinput]=useState();
        const dispatch = useDispatch();
        const add=(desc)=>{
        dispatch(addTask(desc));   
    }
    return (
    <div className="addtask">
        <div className="card">
            <div className="card-header text-center">
                     <h3>TO DO LIST</h3>
            </div>
            <div className="card-body">
                <div className="form-group ">
                   <label htmlFor="task">
                                 Add a task to do
                    </label>                         
                    <input 
                    className="form-control mt-4"
                    id="task"
                    value={input}
                    onChange={event=>setinput(event.target.value)}
                         />
                    <button className=" btn btn-primary  btn-block mt-5  " onClick={()=>{add(input)}} >Add to do list
                    </button>    
                </div>         
            </div>
        </div>
    </div>
    );
}
export default Addtask;
