import React from 'react'
import { categories } from './ShoppingList'
const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  // Handle category selection change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
        <select 
        value={selectedCategory}
        onChange={handleCategoryChange}
        style={{marginRight:'5px'}}>
            <option value='All'>Tous les plans</option>
        {
            categories.map((cat)=>(
                <option key={cat} value={cat}>{cat}</option>
            ))
        }
        </select>
        <button onClick={() => setSelectedCategory('All')}>Reinitialiser</button>
    </div>
  )
}

export default Categories