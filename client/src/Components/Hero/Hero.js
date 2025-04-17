import bgImage from './../../Assets/Images/bgImage.jpg';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative z-10 h-[60vh] w-full flex justify-center items-center"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <div className="relative z-20 px-4 max-w-4xl">
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