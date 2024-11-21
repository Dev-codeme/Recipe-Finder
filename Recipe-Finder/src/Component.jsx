import React, { useState, useEffect } from "react";

function Component() {
  const [dishes, setDishes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch all dishes from the API
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => response.json())
      .then((data) => setDishes(data.meals))
      .catch((err) => console.log(err));
  }, []);

  // Filter dishes based on search term
  const filteredDishes = dishes.filter((dish) =>
    dish.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
      {/* Search Bar */}
      <div className="flex items-center space-x-4 mb-8 bg-white p-4 rounded-lg shadow-md max-w-md w-full">
        <input
          type="text"
          className="border-2 border-gray-300 focus:border-blue-400 focus:outline-none p-2 w-full rounded-lg text-gray-700"
          placeholder="Search for dishes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-blue-500 text-white font-semibold p-2 w-24 rounded-lg">
          Search
        </button>
      </div>

      {/* Displaying filtered dishes */}
      {filteredDishes.length > 0 ? (
        filteredDishes.map((dish) => (
          <div
            key={dish.idMeal}
            className="border border-gray-300 rounded-lg shadow-lg max-w-md w-full bg-white p-6 mb-4 transition duration-300"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src={dish.strMealThumb}
                alt={dish.strMeal}
              />
              <div>
                <p className="text-lg font-bold text-gray-800">{dish.strMeal}</p>
                <p className="text-sm text-gray-500">{dish.strArea}</p>
              </div>
            </div>

            <div className="text-gray-600 line-clamp-5">
              <p>{dish.strInstructions}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No dishes found</p>
      )}
    </div>
  );
}

export default Component;
