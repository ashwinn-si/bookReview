import { User, BookOpen, Tag, SquareX, Plus } from 'lucide-react';
import { useState, useContext } from 'react';
import { UserContext } from '../../Context/UserDetails';
import api from '../../Api';
import { useBookContext } from '../../Context/BookDetails';

export default function AddBook({ changePageStatus }) {
    const { user } = useContext(UserContext);
    const {fetchData} = useBookContext()
    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        description: '',
    });

    const [categories, setCategories] = useState([
        'Fiction',
        'Non-Fiction',
        'Science Fiction',
        'Mystery',
        'Biography',
        'Romance',
    ]);

    const [selectedCategory, setSelectedCategory] = useState([]);

    function handleChange(e) {
        setBookData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        api.post('/admin/add-book', {
            name: bookData.title,
            author: bookData.author,
            category: selectedCategory,
        })
            .then(response => {
               
                return fetchData();
            })
            .then(() => {
               
                changePageStatus('addBookPage', false);
            })
            .catch(error => {
                console.error('Error adding book:', error);
                
                alert('Failed to add book. Please try again.');
            });

       
    }

    return (
        <div className="w-full h-full min-h-screen flex justify-center items-center bg-bg absolute top-0 z-10 bg-opacity-80">
            <form
                className="bg-white shadow-lg rounded-2xl p-8 w-96 relative"
                onSubmit={handleSubmit}
            >
                <div className="relative">
                    <h2 className="text-2xl font-header font-semibold text-primary-text mb-6 text-center">
                        Add New Book
                    </h2>
                    <SquareX
                        className="text-red-600 absolute top-1 right-1 cursor-pointer hover:bg-red-600 hover:text-white hover:rounded-md transition-all duration-300"
                        onClick={() => changePageStatus('addBookPage', false)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-body text-primary-text mb-1">
                        Book Title
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                        <BookOpen className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Enter book title"
                            className="w-full outline-none text-sm font-body bg-transparent"
                            name="title"
                            onChange={handleChange}
                            value={bookData.title}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-body text-primary-text mb-1">
                        Author
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                        <User className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Enter author name"
                            className="w-full outline-none text-sm font-body bg-transparent"
                            name="author"
                            onChange={handleChange}
                            value={bookData.author}
                        />
                    </div>
                </div>

                {/* <div className="mb-4">
                    <label className="block text-sm font-body text-primary-text mb-1">
                        Description
                    </label>
                    <div className="flex items-start border border-gray-300 rounded-lg px-3 py-2">
                        <textarea
                            placeholder="Enter book description"
                            className="w-full outline-none text-sm font-body bg-transparent resize-none h-20"
                            name="description"
                            onChange={handleChange}
                            value={bookData.description}
                        />
                    </div>
                </div> */}

                <div className="mb-6">
                    <label className="block text-sm font-body text-primary-text mb-2">
                        Categories
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category, index) => (
                            <button
                                type="button"
                                className={`py-1 px-3 rounded-lg text-sm transition-all duration-300 border font-medium ${
                                    selectedCategory.includes(category)
                                        ? 'bg-accent text-bg border-accent'
                                        : 'border-accent/40 text-primary-text hover:bg-accent/10'
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

                <button
                    className="w-full flex justify-center items-center gap-2 bg-primary text-white py-2 rounded-lg hover:opacity-90 transition-all"
                    type="submit"
                >
                    <span className="font-body">Add Book</span>
                    <Plus className="w-5 h-5" />
                </button>
            </form>
        </div>
    );
}
