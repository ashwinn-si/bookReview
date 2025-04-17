import { useContext, useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import BookCard from './BookCard';
import { BookContext } from '../../Context/BookDetails';
import SkeletonCard from './../SkeletonCard';

export default function FeatureBooks() {
    const [categories, setCategories] = useState([
        'Fiction',
        'Non-Fiction',
        'Science Fiction',
        'Mystery',
        'Biography',
        'Romance',
    ]);

    const { books } = useContext(BookContext);
    const [showBooks, setShowBooks] = useState(books);
    const [searchBookName, setSearchBookName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [lengthPagination, setLengthPagination] = useState(1);
    const [selectedPagination, setSelectedPagination] = useState(0);

    useEffect(() => {
        let filteredBooks = books;

        if (selectedCategory.length > 0) {
            filteredBooks = filteredBooks.filter(book =>
                book.category.some(cat => selectedCategory.includes(cat))
            );
        }

        if (searchBookName.length > 0) {
            filteredBooks = filteredBooks.filter(book =>
                book.name.toLowerCase().includes(searchBookName.toLowerCase())
            );
        }

        setShowBooks(filteredBooks);
        setSelectedPagination(0);
        setLengthPagination(Math.ceil(filteredBooks?.length / 3));
    }, [selectedCategory, searchBookName, books]);

    return (
        <section id="review" className="w-full px-4 py-8 md:py-12">
            <h2 className="text-center font-header text-2xl md:text-4xl italic text-accent font-bold mb-6 md:mb-8">
                Feature Books
            </h2>

            <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl mx-auto">
                <div className="w-full md:w-1/3 order-1 md:order-2">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full p-3 pr-10 rounded-lg outline-none text-primaryText font-body bg-bg border border-accent/30 focus:border-accent transition-all duration-300"
                            value={searchBookName}
                            onChange={e => setSearchBookName(e.target.value)}
                        />
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent/60" />
                    </div>
                </div>

                <div className="w-full md:w-2/3 order-2 md:order-1">
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {categories.map((category, index) => (
                            <button
                                className={`py-2 px-4 rounded-lg text-sm md:text-base transition-all duration-300 border font-[550] ${
                                    selectedCategory.includes(category)
                                        ? 'bg-accent text-bg border-accent font-medium'
                                        : 'border-accent/40 text-primaryText hover:bg-accent/10'
                                }`}
                                key={index}
                                onClick={() =>
                                    setSelectedCategory(prevState => {
                                        if (prevState.includes(category)) {
                                            return prevState.filter(
                                                currCategory =>
                                                    currCategory !== category
                                            );
                                        } else {
                                            return [...prevState, category];
                                        }
                                    })
                                }
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 w-full max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {!showBooks
                    ? Array.from({ length: 3 }).map((_, i) => (
                          <SkeletonCard key={i} />
                      ))
                    : showBooks
                          .slice(
                              selectedPagination * 3,
                              selectedPagination * 3 + 3
                          )
                          .map((book, index) => (
                              <BookCard Book={book} key={index} />
                          ))}
            </div>
            <div className="mt-4 flex justify-center items-center gap-3">
                {Array.from({ length: lengthPagination }).map((_, index) => (
                    <div
                        className={`cursor-pointer py-2 px-3 border border-accent border-solid text-sm rounded-xl text-semibold ${selectedPagination === index ? 'bg-hilight text-bg' : ''}`}
                        onClick={() => setSelectedPagination(index)}
                        key={index}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
        </section>
    );
}