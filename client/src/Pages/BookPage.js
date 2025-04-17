import { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Login from '../Components/Login/Login';
import SignUp from '../Components/SignUp/SignUp';
import Footer from '../Components/Footer/Footer';

export default function BookPage(){
    
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
            <Navbar changePageStatus = {changePageStatus} currentPage={"BooksPage"}/>
            
            <Footer />
            {
                pageOpenStatus.loginPage ?
                    <Login changePageStatus = {changePageStatus} togglePageStatus = {togglePageStatus} /> : null
            }
            {
                pageOpenStatus.signUpPage ?
                    <SignUp changePageStatus = {changePageStatus} togglePageStatus = {togglePageStatus} /> : null
            }
        </div>
    )
}