import React, { useState } from 'react';

const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleMouseOver = (index) => {
        setRating(index);
    };

    const handleMouseOut = () => {
        setRating(0);
    };

    const handleClick = (index) => {
        setRating(index);
    };

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    return (
        <div className=" max-w-4xl bg-white  space-y-2 ">
            <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }, (_, index) => (
                    <svg
                        key={index}
                        className={`w-6 h-6 cursor-pointer ${index < rating ? 'text-green-500' : 'text-gray-300'
                            }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"

                        onClick={() => handleClick(index + 1)}
                    >
                        <path
                            d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z"
                        />
                    </svg>
                ))}
            </div>

            <div>
                <textarea
                    className="w-full border border-gray-300 rounded-lg outline-none px-3"
                    rows="4"
                    placeholder="Leave your comments here..."
                    value={comment}
                    onChange={handleChange}
                />
                <button className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg">
                    Submit
                </button>
            </div>

        </div>
    );
};



export default FeedbackForm