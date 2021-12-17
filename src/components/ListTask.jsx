import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { filterTasks } from '../redux/action';
import { deletetask } from '../redux/action';
import { showtask } from '../redux/action';
import { useHistory } from "react-router-dom";
import { done } from '../redux/action';
const Listtask = () => {
         const state = useSelector((state) => state.reducer);
         const [checked, setchecked] = useState();
         const dispatch = useDispatch();
         const history = useHistory();
         
        const Delete=(id)=>{
        dispatch(deletetask(id))
                   }
        const ShowTask=(id)=>{
        dispatch(showtask(id))
         history.push("/edit");
                   }
        const Done=(id)=>{
        dispatch(done(id))
                   }
        
        const filter=(done)=>{
            dispatch(filterTasks(done));
                     }
    return (
        <div className=" row list">  
             <div className="col tasklist  ">
                  <h3 className=" m-4 text-white">Tasks List</h3>
                      {state.tasks.map((element,key)=>{
                                 return(
                                    element.isDone===false ?(
                                        <div className='d-flex' >
                                             <div className='card m-2 '   onClick={()=>Done(element.id)}style={{backgroundColor:"#FF0005"}}>
                                                 <h3 className="color-black " >{element.description}   </h3>
                                                 </div>
                                                 
                                                 <i className="fas fa-edit text-white "  onClick={()=>ShowTask(element.id)} id={element.id}>  </i>
                                                 <i class="fas fa-times text-white" onClick={()=>Delete(element.id)}> </i>
                                                
                                           </div>
                                         
                                  ):
                                            
                                                
                                                 <div className='d-flex' >
                                             <div className='card m-2 ' style={{backgroundColor:"#A5CC89"}}>
                                                 <h3 className="color-black " >{element.description}   </h3>
                                                 </div>
                                                 
                                                 <i className="fas fa-edit text-white "  onClick={()=>ShowTask(element.id)} id={element.id}>  </i>
                                                 <i class="fas fa-times text-white" onClick={()=>Delete(element.id)}> </i>
                                                
                                           </div>
                                
                                 )
                             })
                         }
             </div>
                                 
            <div className="col searchtask ">
                 <h3  className="mb-4">Filter Tasks</h3>
                             {/* Dropdown */}
                        <div className=" d-flex">
                            <div className="form-check">
                                <input class="form-check-input" type="checkbox" value={checked}  onChange={()=>setchecked(true)} id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                                        Done
                                 </label>
                            </div>
                            <div class="form-check done">
                                <input class="form-check-input" type="checkbox" value={checked}  onChange={()=>setchecked(false)} id="flexCheckChecked" />
                                    <label class="form-check-label" for="flexCheckChecked">
                                                        Not Done
                                    </label>
                            </div>
                            <button class="btn btn-secondary  filter"   onClick={()=>filter(checked)} type="button"  >
                                    Filter Tasks
                            </button>
                        </div>
                        <div className="m-4">
                            {state.filter.map((element)=>{
                             return(
                                  element.isDone===false ?(
                                        <div className="card m-4 "  style={{backgroundColor:"#FF0005"}} >
                                            <div className="card-header">
                                              <h5>You have to do:</h5>
                                            </div>
                                            <div className="card-body ">
                                             <h3 className="color-black" >{element.description}</h3>
                                            </div>
                                        </div>):
                                       <div className="card m-4 "  style={{backgroundColor:"#A5CC89"}} >
                                             <div className="card-header">
                                               <h5>You've done:</h5>
                                            </div>
                                             <div className="card-body ">
                                             <h3 className="color-black" >{element.description}</h3>
                                             </div>
                                        </div>
                             )})}
                        </div>     
            </div>              
       </div>
    );
}

export default Listtask;
