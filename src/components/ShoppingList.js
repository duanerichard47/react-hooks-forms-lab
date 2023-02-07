import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [onSearchChange , setOnSearchChange ] = useState("");
  const [onSubForm , setOnSubForm ] = useState("Produce");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleOnSearchChange (event) {
    console.log(event.target.value)
    setOnSearchChange(event.target.value);
  }

  // const itemsToDisplay = items.filter((item) => {
  //   if (selectedCategory === "All") return true;

  //   return item.category === selectedCategory;
  // });

  // const itemsToDisplaySrch = items.filter((item) => {
  //  return(item.name.toLowerCase().includes(onSearchChange.toLowerCase()))  cd
  // });
  const itemsToDisplay = items
    .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
    .filter((item) =>item.name.toLowerCase().includes(onSearchChange.toLowerCase()))


  // const itemsToDisplaySrchMapped =itemsToDisplaySrch.map((itemSrch) => {
    
  //   return(
    
  //   <Item key={itemSrch.id} name={itemSrch.name} category={itemSrch.category} />
  // )})

  function onItemFormSubmit (event) {
    event.preventdefault()
    setOnSubForm(event.target.value)


  }
  return (

    <div className="ShoppingList">
      <ItemForm onItemFormSubmit ={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange}  onSearchChange={onSearchChange} handleOnSearchChange={handleOnSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        {/* {itemsToDisplaySrchMapped } */}
      </ul>
    </div>
  );
}

export default ShoppingList;
