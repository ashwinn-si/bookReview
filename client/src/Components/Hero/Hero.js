import bgImage from './../../Assets/Images/bgImage.jpg';

export default function Hero() {
    return (
        <section
            id="Home"
            className="relative h-[60vh] md:h-[50vh] lg:h-[40vh] w-full bg-cover bg-center flex justify-center items-center"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className="relative w-full max-w-6xl px-4 md:px-8 z-10">
                <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white font-header mb-2 md:mb-4">
                    Discover Your Next Favorite Book
                </h1>
                
                <p className="text-center text-base sm:text-xl md:text-2xl font-medium text-white font-header max-w-3xl mx-auto">
                    Join our community of book lovers to find great books, share your thoughts, and connect with fellow readers.
                </p>
            </div>
        </section>
    );
}