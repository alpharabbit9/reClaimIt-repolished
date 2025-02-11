import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LatestFindAndLostItems = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://y-nine-lake.vercel.app/items')
            .then((response) => response.json())
            .then((data) => {
                const sortedItems = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setItems(sortedItems.slice(0, 6));
            })
            .catch((error) => console.error('Error fetching items:', error));
    }, []);

    const handleViewDetails = (id) => {
        navigate(`/details/${id}`);
    };



    return (
        <div className=" px-16 text-gray-700 bg-orange-50">
            <p className='text-center mb-3'> --- Helping You Reclaim What Matters ---</p>
            <h2 className="text-3xl font-bold text-center mb-6">Latest Find & Lost Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  w-11/12 mx-auto">
                {items.map((item) => (
                    <div key={item.id} className="card bg-orange-100 border border-white shadow-md p-4 rounded-2xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                        <img
                            src={item.photo}
                            alt={item.title}
                            className="w-full h-40 object-cover rounded-t-xl mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-5">{item.description.slice(0, 100)}...</p>
                        <button
                            onClick={() => handleViewDetails(item.id)}
                            className="btn bg-amber-900 hover:bg-amber-700 text-white w-full mt-3"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <Link to={'/lostFoundItems'}>
                    <button className="btn bg-amber-700 text-white px-8 rounded-2xl">
                        See All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LatestFindAndLostItems;
