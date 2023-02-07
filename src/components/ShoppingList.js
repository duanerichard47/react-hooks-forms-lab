import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [onSearchChange , setOnSearchChange ] = useState("");
  const [itemsList, setItemsList] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleOnSearchChange (event) {
    console.log(event.target.value)
    setOnSearchChange(event.target.value);
  }

  const itemsToDisplay = itemsList
    .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
    .filter((item) =>item.name.toLowerCase().includes(onSearchChange.toLowerCase()))



  function onItemFormSubmit (newObject) {

    setItemsList([...itemsList,newObject])
    }

    // const newItemArr = { ...items, onSubForm}

    // const newItemArrMap = itemsToDisplay.map(item =>
    //   <item key={item.id} name={item.name} category={item.category} />)

 
  return (

    <div className="ShoppingList">
      <ItemForm onItemFormSubmit ={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange}  search={onSearchChange} onSearchChange={handleOnSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
         {/* {newItemArrMap} */}
      </ul>
    </div>
  );
}

export default ShoppingList;
