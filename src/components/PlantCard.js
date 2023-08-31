import React,{ useState } from "react";
//pass plant as prop to the plant card and then display the plant card info in relevent slots
function PlantCard({plant}) {
  //destructure the data from the plant object and name it plant
  const { name, price, image} = plant;

  //create a state variable to mark the plant card as in stock and then apply this logic to the buttons in the ternary using an onCLick function
  const [inStock, setInStock] = useState(false);

    //fill in the plant card with the data from the plant object
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={()=>(setInStock(!inStock))} className="primary">In Stock</button>
      ) : (
        <button onClick={()=>(setInStock(!inStock))}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
