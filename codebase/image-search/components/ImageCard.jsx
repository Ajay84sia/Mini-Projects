import React from "react";

const ImageCard = ({ item, setSelectedImage, setShowModal }) => {
  const { description, user, urls, links } = item;

  const handleViewDetails = () => {
    setSelectedImage(item);
    setShowModal(true);
  };


  return (
    <div className="bg-white rounded-lg shadow-md font-mono">
      <img
        src={urls.regular}
        alt={description}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <p className="text-gray-600 text-center truncate">
          <b>Captured By : </b>
          {user.name}{" "}
        </p>
        <div className="text-center">
          <button
            onClick={handleViewDetails}
            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none text-lg lg:text-xl font-semibold font-mono"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
