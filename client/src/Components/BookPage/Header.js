import {Star} from "lucide-react"

export default function  Header({title = "ashwin", author = "ashwin", star = "5" }){
    return(
        <div >
            <p>{title}</p>
            <p>{author}</p>
            {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                <Star key={i} size={16} fill="#D4A373" color="#D4A373" />
            ))}
            {testimonial.rating % 1 !== 0 && (
                <Star size={16} fill="#D4A373" color="#D4A373" className="opacity-50" />
            )}
        </div>
    )
}