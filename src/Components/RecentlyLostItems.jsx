
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const RecentlyLostItems = () => {
    const [items, setItems] = useState([]);

    
    useEffect(() => {
        fetch("/lost.json")
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => console.error("Error fetching lost items:", error));
    }, []);

    return (
        <div className="py-10 bg-orange-50 text-gray-700">
            <h2 className="text-3xl font-bold text-center mb-4">Recently Lost Items</h2>
            <p className="text-center mb-8">
                Browse the latest reports of lost items in Bangladesh.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 w-11/12 mx-auto">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="p-4 bg-orange-100 shadow-md  rounded-lg border border-white  transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <img className="w-full rounded-2xl mb-3 object-contain" src={item.image} alt="" />
                        <h3 className="font-bold text-lg mb-2">
                            Item Lost: {item.item}
                        </h3>
                        <p className="">
                            <strong>Location:</strong> {item.location}
                        </p>
                        <p className="">
                            <strong>Category:</strong> {item.category}
                        </p>
                        <div className="mt-4">
                            
                            <Link  className="btn btn-outline" to={'/lostFoundItems'}>View Lost Item</Link>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentlyLostItems;
