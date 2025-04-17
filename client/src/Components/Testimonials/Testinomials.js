import { User, Star } from 'lucide-react';

export default function Testimonials() {
    const testimonialData = [
        {
            username: "ashwin",
            text: "One of the best pages to find the books. The recommendations are always spot on!",
            rating: 5
        },
        {
            username: "sarah_j",
            text: "I've discovered so many amazing authors through this platform. The user interface is intuitive and the collection is vast.",
            rating: 4.5
        },
        {
            username: "bookworm42",
            text: "As an avid reader, I appreciate how well-organized everything is. Finding my next read has never been easier.",
            rating: 5
        },
        {
            username: "literary_explorer",
            text: "The community reviews helped me discover hidden gems I would have otherwise missed. Truly a reader's paradise!",
            rating: 4.5
        }
    ];
    
    return (
        <section className="py-12 bg-gray-50" id="testimonials">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2 font-header">What Our Users Say</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonialData.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
                        >
                            <div className="mb-4 flex items-center">
                                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white mr-3">
                                    <User size={18} />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-800 font-body">@{testimonial.username}</p>
                                    <div className="flex items-center mt-1">
                                        {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                                            <Star key={i} size={16} fill="#D4A373" color="#D4A373" />
                                        ))}
                                        {testimonial.rating % 1 !== 0 && (
                                            <Star size={16} fill="#D4A373" color="#D4A373" className="opacity-50" />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 italic flex-grow">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}