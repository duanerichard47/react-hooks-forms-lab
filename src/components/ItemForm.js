
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit }) {
  const [name , setName ] = useState("");
  const [category , setCategory] = useState("Produce");
 
 function submittForm(event){
  event.preventDefault()
  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: name,
    category: category,
  };
  onItemFormSubmit(newItem)
 }

 
console.log(name)
console.log(category)
  return (
    <form className="NewItem"   onSubmit = {submittForm}>
      <label>
        Name:
        <input type="text" name="name" value ={name} onChange = {(event)=>setName(event.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" value = {category} onChange ={(event)=>setCategory(event.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
