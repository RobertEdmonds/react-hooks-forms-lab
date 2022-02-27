import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, newSubmit}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [submittedData, setSubmittedData] = useState([])

  function onSearchChange(event){
      setSubmittedData(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsByNameDisplay = items.filter((item)=>{
    if(submittedData === item.name)return true;
    
    return item.name === submittedData;
  })

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  

  return (
    <div className="ShoppingList">
        <ItemForm newSubmit={newSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        {itemsByNameDisplay.map((item)=>(
          <Item key={item.id} name={item.name} category={item.category}/>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
