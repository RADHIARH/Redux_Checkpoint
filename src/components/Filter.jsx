import React from 'react';
import { useSelector } from 'react-redux';
const Filter = () => {
             const state = useSelector((state) => state.reducer);
    return (
      <div className=" row list">  
        <div className="col">
            <h3 className=" m-4">Tasks Filter</h3>
            {
                             state.filter.map((element,key)=>{
                                
                                 return( 
                                         <div className="card mb-3 "   style={{backgroundColor:"red"}} >
                                            
                                             <div className="card-body ">
                                     <h3 className="color-black" >{element.description}</h3>
                                  </div>
                                  
                                  </div>
                                  
                                   
                                 )
                             })
                         }
         </div>                 
    </div>
    );
}

export default Filter;
