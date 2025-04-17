import React, { useState } from 'react';
import { SquareX, ArrowRightCircle, Star } from 'lucide-react';

const AddReviewCard = ({ changePageStatus }) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    
    const handleRating = (star) => {
        setRating(star);
    };
    
    const handleReviewChange = (e) => {
        setReview(e.target.value); // Update the review state
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(review, rating)
        changePageStatus("reviewPage", false)
    };
    
    return (
        <div className="w-full h-full min-h-screen flex justify-center items-center bg-bg absolute top-0 z-10 bg-opacity-80">
            <form className="bg-white shadow-lg rounded-2xl p-8 w-[350px] lg:w-[500px] relative" onSubmit={onSubmit}>
                <div className="relative mb-6">
                    <h2 className="text-2xl font-header font-semibold text-primary-text text-center text-accent">Add Your Review</h2>
                    <SquareX className="text-red-600 absolute top-2 right-2 cursor-pointer hover:bg-red-600 hover:text-white hover:rounded-md transition-all duration-300" onClick={() => changePageStatus("reviewPage", false)} />
                </div>
                
                <div className="mb-4">
                    <textarea
                        placeholder="Enter your Review"
                        className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        value={review}
                        onChange={handleReviewChange}
                        required
                    />
                </div>
                
                <div className="mb-4 flex w-full justify-between items-center">
                    <p className="font-semibold font-header text-accent">Rating</p>
                    <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                className={`cursor-pointer transition-all ${star <= rating ? 'text-yellow-500' : 'text-gray-300'} hover:text-yellow-400`}
                                fill={star <= rating ? "currentColor" : "none"}
                                onClick={() => handleRating(star)}
                            />
                        ))}
                    </div>
                </div>
                
                <button className="w-full flex justify-center items-center gap-2 bg-hilight hover:bg-accent  duration-200 text-white py-2 rounded-lg hover:opacity-90 transition-all" type="submit">
                    <span className="font-body">Add Review</span>
                    <ArrowRightCircle className="w-5 h-5" />
                </button>
            </form>
        </div>
    );
};

export default AddReviewCard;