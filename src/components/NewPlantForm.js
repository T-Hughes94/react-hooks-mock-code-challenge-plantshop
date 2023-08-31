//pass the data down from the plant-page component here as props after creating
import React,{useState} from "react";
//New Plant Form is a child component of the plant-page component
function NewPlantForm({addPlant}) {
  function submitForm(e) {
    e.preventDefault();
   console.log( e.target.name.value) 
   //create a new plant object with the name, image, and price
   const newPlant = {
    name: e.target.name.value,
    image: e.target.image.value,
    price: e.target.price.value
   }
   //add the new plant object to the plant-page component
   addPlant(newPlant)
  }
  //create an onSubmit to pass the submit form into the form HTML element itself
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e)=>submitForm(e)}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
