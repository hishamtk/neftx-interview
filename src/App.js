import React from "react";
import { recipies, stores } from "./data";

function App() {
  return (
    <div className="container">
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">NeftX Interview</h5>

       
      </div>

      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Find Stores</h1>
        <p className="lead">
        </p>
      </div> <div className="container px-4 py-5" id="custom-cards">
    <h2 className="pb-2 border-bottom">Custom Recipies</h2>

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

      {recipies.map(recipie =>(
        <div class="card mb-4 box-shadow mx-2">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">{recipie.title}</h4>
        </div>
        <div class="card-body">
          <h5 class="card-title pricing-card-title"> Course: {recipie.course}</h5>
          <h6>Cuisine: {recipie.cuisine}</h6>
          <ul class="list-unstyled mt-3 mb-4">
            {recipie.ingredients.map((ingradient,index)=>(
              <li key={index} >{ingradient.name} : {ingradient.quantity}</li>
            ))}
          
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-outline-primary">Find Store</button>
        </div>
      </div>
      ))}
      
      </div>

      </div>

      
    </div>








   
  );
}

export default App;
