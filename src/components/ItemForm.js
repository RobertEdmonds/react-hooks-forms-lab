import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  // const newItem = {
  //   id: uuid(), // the `uuid` library can be used to generate a unique id
  //   name: itemName,
  //   category: itemCategory,
  // };
  const [itemName, setInputItem]= useState("")
  const [itemCategory, setNewCategory] = useState("Produce")

  function onFormSubmit(event){
    event.preventDefault();
      const formData = {id:uuid(), name: itemName, category: itemCategory};
      onItemFormSubmit(formData)
      setInputItem("")
      setNewCategory("Produce")
  }
  function handleItem(event){
    setInputItem(event.target.value)
  }
  function handleChange(event){
    setNewCategory(event.target.value)
  }
  // const newSubmit = newData.map((data, index)=>{
  //   return(
  //     <Item id={index} name={data.name} category={data.category}/>
  //   )
  // })

  return (
    <div>
    <form className="NewItem" onSubmit={onFormSubmit}>
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
    </div>
  );
}

export default ItemForm;
