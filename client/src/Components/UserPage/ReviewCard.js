import { Star } from "lucide-react";

export default function ReviewCard({ bookname = "ashwin", stars = "4", review = "good book read again" }) {
    const rating = parseFloat(stars);
    
    return (
        <div className="w-full bg-zinc-50 rounded-md p-4 shadow-sm ">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <p className="text-lg sm:text-base font-semibold text-gray-800">{bookname}</p>
                <div className="flex gap-1 justify-start sm:justify-end items-center">
                    {[...Array(Math.floor(rating))].map((_, i) => (
                        <Star key={i} size={18} fill="#D4A373" color="#D4A373" />
                    ))}
                    {rating % 1 !== 0 && (
                        <Star size={18} fill="#D4A373" color="#D4A373" className="opacity-50" />
                    )}
                </div>
            </div>
            <p className="mt-2 text-sm sm:text-base text-gray-700 leading-snug">{review}</p>
        </div>
    );
}
