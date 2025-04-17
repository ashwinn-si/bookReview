import { createContext, useState, useContext, useEffect } from 'react';
import api from '../Api';

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState(() => {
        const storedBooks = localStorage.getItem('books');
        return storedBooks ? JSON.parse(storedBooks) : null;
    });

    const fetchData = async () => {
        try {
            const response = await api.get('/book/all-books');
            setBooks(response.data);
        } catch (error) {
            console.error('Failed to fetch books:', error);
        }
    };

    useEffect(() => {
        if (!books) {
            fetchData();
        }

        
        const handleUnload = () => {
            localStorage.removeItem('books');
        };

        window.addEventListener('beforeunload', handleUnload);

        
        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, []);

    useEffect(() => {
        if (books) {
            localStorage.setItem('books', JSON.stringify(books));
        }
    }, [books]);

    const setBooksDetails = Details => {
        setBooks(Details);
    };

    return (
        <BookContext.Provider value={{ books, setBooksDetails, fetchData }}>
            {children}
        </BookContext.Provider>
    );
};

export const useBookContext = () => useContext(BookContext);
