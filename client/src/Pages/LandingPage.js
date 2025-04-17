import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import FeatureBooks from "../Components/FeatureBooks/FeatureBooks";
import { useState } from 'react';
import Testimonials from '../Components/Testimonials/Testinomials';
import Footer from '../Components/Footer/Footer';
import AddBook from '../Components/Admin/AddBook';

export default function LandingPage() {
    const [pageOpenStatus, setPageOpenStatus] = useState({
        loginPage : false,
        signUpPage : false,
    });
    
    const changePageStatus = (page, status) =>{
        setPageOpenStatus((prevState) => ({
            ...prevState,
            [page]: status,
        }));
    }
    
    const togglePageStatus = (currPage, togglePage) =>{
        setPageOpenStatus((prevState) => ({
            ...prevState,
            [currPage]: false,
            [togglePage]: true,
        }));
    }
    
    return (
        <div className="relative">
            <Navbar changePageStatus={changePageStatus} />
            <Hero />
            <FeatureBooks />
            <Testimonials />
            <Footer />
            {pageOpenStatus.loginPage ? (
                <Login
                    changePageStatus={changePageStatus}
                    togglePageStatus={togglePageStatus}
                />
            ) : null}
            {pageOpenStatus.signUpPage ? (
                <SignUp
                    changePageStatus={changePageStatus}
                    togglePageStatus={togglePageStatus}
                />
            ) : null}
            {
                pageOpenStatus.addBookPage ? (
                <AddBook
                    changePageStatus={changePageStatus}
                    togglePageStatus={togglePageStatus}
                />
            ) : null
            }
        </div>
    );
}