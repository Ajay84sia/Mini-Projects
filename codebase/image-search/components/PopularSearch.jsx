import React, { useState } from "react";

const PopularSearch = ({ onPopularSearch, searchValue, setSearchValue }) => {
  const popularKeywords = [
    "Animals",
    "Office",
    "Mobile",
    "Motorbike",
    "Cars",
    "Nature",
  ];
  const [currentPage, setCurrentPage] = useState(1);

  const handlePopularSearchClick = (keyword) => {
    setSearchValue(keyword);
    setCurrentPage(1);
    onPopularSearch(keyword, 1);
  };

  return (
    <div className="pt-28 flex justify-center">
      <div>
        <h2 className="text-xl font-bold mb-4 text-center text-2xl font-mono">
          Popular Searches
        </h2>
        <div className="flex flex-wrap gap-2 px-8">
          {popularKeywords.map((keyword) => (
            <button
              key={keyword}
              className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none text-lg lg:text-2xl font-semibold font-mono"
              onClick={() => handlePopularSearchClick(keyword)}
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularSearch;
