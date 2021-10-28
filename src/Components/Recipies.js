import React,{useState} from 'react'


function Recipies({recipie,findStore}) {


  
  

    return (
     
        <div className="card mb-4 box-shadow mx-2">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{recipie.title}</h4>
        </div>
        <div className="card-body">
          <h5 className="card-title pricing-card-title"> Course: {recipie.course}</h5>
          <h6>Cuisine: {recipie.cuisine}</h6>
          <ul className="list-unstyled mt-3 mb-4">
            {recipie.ingredients.map((ingradient,index)=>(
              <li key={index} >{ingradient.name} : {ingradient.quantity}</li>
            ))}
          
          </ul>
          <button onClick={()=>findStore(recipie)} type="button" className="btn btn-lg btn-block btn-outline-primary">Find Store</button>
        </div>
      </div>
      
    )
}

export default Recipies
