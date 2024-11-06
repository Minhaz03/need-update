import React, { useState } from "react"; 
import Gadgets from "../Gadgets/Gadgets"; 
 
const Banner = () => { 
  const [selectedCategory, setSelectedCategory] = useState("All Product"); 
 
  const handleSelectedCategory = (categoryName) => { 
    setSelectedCategory(categoryName); 
  }; 
 
  return ( 
    <div> 
      <div className="flex flex-col md:flex-row p-4 bg-gray-100 min-h-screen mt-[500px] rounded-xl"> 
        {/* Sidebar */} 
        <div className="w-full md:w-1/4 lg:w-1/5 p-4"> 
          <ul className="space-y-4"> 
            {["All Product", "Laptops", "Phones", "Accessories", "Smart Watches", "Headphones", "Tablets", "Cameras", "Gaming Consoles", "Gaming Mice"].map((category) => ( 
              <li key={category}> 
                <button 
                  onClick={() => handleSelectedCategory(category)} 
                  className={`w-full py-2 rounded-full ${ 
                    selectedCategory === category ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700" 
                  }`} 
                > 
                  {category} 
                </button> 
              </li> 
            ))} 
          </ul> 
        </div> 
 
        {/* Product Grid */} 
        <div className="w-full md:w-3/4 lg:w-4/5 p-4"> 
          <Gadgets selectedCategory={selectedCategory} /> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default Banner;