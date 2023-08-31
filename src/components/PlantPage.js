import React,{useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
//create a variable that stores the API key
const API = "http://localhost:6001/plants"

//create state for plant here because header does not need to take in any data and this is the highest necessary component
function PlantPage() {
  
  //plants is an array of plants from the database. the array is empty for mapping purposes
  const [plants, setPlants] = useState([]);
 
  //create a variable that stores the current search term then pass it to the Search component below
  const [currentSearch, setCurrentSearch] = useState("");
  console.log(currentSearch);
  //wrap with useEffect and create the fetch function that fetches the plants from the database 
  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setPlants(data))
   
  },[])
  //function that adds a new plant to the database using a spread operator and POST method after adding the new plant to the database
    function addPlant(newPlant) {
      fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPlant)  
      })
      .then(res => res.json())
      .then(data => setPlants([...plants, data]));
      
      setPlants([...plants, newPlant]);
    }//pass this function as a prop in the NewPlantForm component below and in the component itself
 
 //create a function/variable that filters the plants based on the current search term and passes it to the PlantList component below
 const filteredPlants = plants.filter((plant)=>{
        return plant.name.toLowerCase().includes(currentSearch.toLowerCase());
 })
 
    return (
    //pass props to childeren components
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search setCurrentSearch={setCurrentSearch}/>
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
