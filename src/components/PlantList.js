import React from "react";
import PlantCard from "./PlantCard";


//pass in an array of plants down from the PlantPage component
function PlantList({plants}) {
  // console.log(plants);
  //map each plant in the array to a PlantCard component
  const plantsComponent = plants.map((plant)=>{
    return <PlantCard key={plant.id} plant={plant} />
  })
  return (
    //render the plantsComponent onto the page
    <ul className="cards">
      {plantsComponent}
      </ul>
  
    );

}

export default PlantList;
