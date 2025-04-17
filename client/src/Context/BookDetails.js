import { createContext, useState, useContext } from 'react';

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
    const [books, setBooks] = useState([
        {
            name: "The Timeless Tale",
            author: "Jane Rivers",
            category: ["Fiction", "Romance"],
            stars: 4.6
        },
        {
            name: "Mystery in the Shadows",
            author: "Elena Grace",
            category: ["Mystery"],
            stars: 4.2
        },
        {
            name: "Love Beyond the Stars",
            author: "Mark Leto",
            category: ["Romance", "Science Fiction"],
            stars: 4.8
        },
        {
            name: "Journey Through Time",
            author: "Robert Gale",
            category: ["Science Fiction"],
            stars: 4.1
        },
        {
            name: "The Real Me",
            author: "Sara Thompson",
            category: ["Biography"],
            stars: 4.3
        },
        {
            name: "Unlocking the Mind",
            author: "Dr. Hannah Lee",
            category: ["Non-Fiction"],
            stars: 4.7
        },
        {
            name: "Tangled Hearts",
            author: "Isabelle Dawn",
            category: ["Romance"],
            stars: 4.4
        },
        {
            name: "The Unknown Truth",
            author: "Carlos Mendez",
            category: ["Mystery", "Fiction"],
            stars: 4.0
        },
        {
            name: "Beyond Human",
            author: "Emily Ross",
            category: ["Science Fiction", "Non-Fiction"],
            stars: 4.5
        },
        {
            name: "A Life Remembered",
            author: "Benjamin Carter",
            category: ["Biography", "Fiction"],
            stars: 4.6
        }
    ]);
    
    const setBooksDetails = (Details) => {
        setBooks(Details);
    };
    
    return (
        <BookContext.Provider value={{ books, setBooksDetails }}>
            {children}
        </BookContext.Provider>
    );
};
