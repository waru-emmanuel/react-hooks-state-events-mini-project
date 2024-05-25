import React, {useState} from "react";

function CategoryFilter({category, onCategoryChange}) {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        onCategoryChange(category);
    };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {category.map((category) => (
         <button key={category}
         className={selectedCategory === category ? "selected" : ""}
         onClick={() => handleCategoryChange(category)}>{category}
         </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
