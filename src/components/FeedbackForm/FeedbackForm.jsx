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
        <div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-lg font-semibold">Rate Us</h2>
            <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }, (_, index) => (
                    <svg
                        key={index}
                        className={`w-6 h-6 cursor-pointer ${index < rating ? 'text-green-500' : 'text-gray-300'
                            }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseOut={handleMouseOut}
                        onClick={() => handleClick(index + 1)}
                    >
                        <path
                            d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z"
                        />
                    </svg>
                ))}
            </div>
            <div>
                <p className="text-gray-600">You rated: {rating} star{rating !== 1 ? 's' : ''}</p>
            </div>
            <div>
                <textarea
                    className="w-full p-2 border border-gray-300 rounded-lg mt-2"
                    rows="4"
                    placeholder="Leave your comments here..."
                    value={comment}
                    onChange={handleChange}
                />
            </div>
            <div>
                <p className="text-gray-600">Your comment: {comment}</p>
            </div>
        </div>
    );
};



export default FeedbackForm