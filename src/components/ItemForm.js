import React,{useState} from "react";
import { v4 as uuid } from "uuid";
import Item from "./Item";

function ItemForm() {
  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory,
  };
  const [itemName, setInputItem]= useState([])
  const [itemCategory, setNewCategory] = useState([])
  const [newData, setNewData] = useState([])

  function onItemFormSubmit(event){
    event.preventDefault();
    if(newItem.length > 0){
      const formData = {name: itemName, category: itemCategory};
      const dataArray = {...newData, formData};
      setNewData(dataArray)
      setInputItem("")
      setNewCategory("")
    }
  }
  function handleItem(event){
    setInputItem(event.target.value)
  }
  function handleChange(event){
    setNewCategory(event.target.value)
  }
  const newSubmit = newData.map((data, index)=>{
    return(
      <Item id={index} name={data.name} category={data.category}/>
    )
  })

  return (
    <div>
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItem}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
    {newSubmit}
    </div>
  );
}

export default ItemForm;
