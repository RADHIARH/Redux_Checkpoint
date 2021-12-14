import React from 'react';
import { useSelector } from 'react-redux';
import { changedone } from '../redux/action';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { filterTasks } from '../redux/action';
const Listtask = () => {
         const state = useSelector((state) => state.reducer);
         const [checked, setchecked] = useState();
         const dispatch = useDispatch();
         const Done=(id)=>{
            document.getElementById(id).style.backgroundColor="A5CC89";
            dispatch(changedone(id))
                   }
        
        const filter=(done)=>{
            dispatch(filterTasks(done));
                     }
    return (
        <div className=" row list">  
             <div className="col tasklist m-4">
                  <h3 className=" m-4">Tasks List</h3>
                      {state.tasks.map((element,key)=>{
                                 return(
                                    element.isDone===false ?(
                                         <div className="card mb-3 "  key={key}  id={element.id} style={{backgroundColor:"#FF0005"}} >
                                            <div className="card-body ">
                                                <h3 className="color-black" >{element.description}<i className="fas fa-edit " id={element.id} onClick={()=>Done(element.id) }></i></h3>
                                            </div>
                                           
                                         </div>
                                  ):
                                        <div className="card mb-3 "   id={element.id} style={{backgroundColor:"#A5CC89"}}>
                                           <div className="card-body ">
                                              <h3 className="color-black" >{element.description}<i class="fas fa-check "   ></i></h3>
                                           </div>
                                        </div>
                                 )
                             })
                         }
             </div>
                                 
            <div className="col searchtask  m-4 ">
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
                            <button class="btn btn-secondary "   onClick={()=>filter(checked)} type="button"  >
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
