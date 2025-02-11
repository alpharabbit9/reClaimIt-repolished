import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // for navigation to the details page

const LostFoundItems = () => {
    const [items, setItems] = useState([]);

    // Fetch items from the API when the component is mounted
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('https://y-nine-lake.vercel.app/items');
                const data = await response.json();

                // Ensure the data is an array before setting state
                if (Array.isArray(data)) {
                    setItems(data);
                } else {
                    console.error("Unexpected data format:", data);
                    setItems([]);
                }
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, []);

    return (
        <div className="bg-orange-50 min-h-screen py-20">
            <div className="bg-orange-100 text-center text-gray-700 py-20">
                <h2 className="text-4xl font-bold">Latest Found Items</h2>
                <p>Browse the latest items turned in or reported as lost.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 p-16 w-11/12 mx-auto">
                {items.length === 0 ? (
                    <div className="text-center text-gray-400 col-span-full">
                        No items found. Check back later!
                    </div>
                ) : (
                    items.map((item) => (
                        <div key={item._id} className="card bg-orange-100  p-4 text-gray-700 border border-white shadow-xl">
                            <figure>
                                <img src={item.photo} alt={item.title} className="w-full h-56 object-cover rounded-box" />
                            </figure>
                            <div className="card-body">
                                <h3 className="card-title">{item.title}</h3>
                                <p><strong>Category:</strong> {item.category}</p>
                                <p><strong>Location:</strong> {item.location}</p>
                                <p><strong>Date:</strong> {item.date}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/items/${item._id}`} className="btn bg-amber-700 text-white">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default LostFoundItems;
