import { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export const UserDetailsProvider = ({ children }) => {
    // const [user, setUser] = useState({
    //     username:"ashwin is",
    //     userId:"24343"
    // });
    const [user, setUser] = useState(null);
    
    const setUserDetails = (Details) => {
        setUser(Details);
    };
    
    return (
        <UserContext.Provider value={{ user, setUserDetails }}>
            {children}
        </UserContext.Provider>
    );
};
