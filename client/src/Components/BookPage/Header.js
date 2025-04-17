import { Star } from "lucide-react";

export default function Header({ title = "Ashwin", author = "Ashwin", stars = "5", count = "10" }) {
    const rating = parseFloat(stars);
    
    return (
        <>
            <h1 className="text-2xl font-semibold text-primaryText text-left w-full font-header">{title}</h1>
            <p className="text-sm text-primaryText text-left w-full font-body">by {author}</p>
            <div className="flex items-start gap-1 w-full ">
                {[...Array(Math.floor(rating))].map((_, i) => (
                    <Star key={i} size={18} fill="#D4A373" color="#D4A373" />
                ))}
                {rating % 1 !== 0 && (
                    <Star size={18} fill="#D4A373" color="#D4A373" className="opacity-50" />
                )}
                <span className="ml-2 text-sm text-primaryText">({count})</span>
            </div>
        </>
    );
}
