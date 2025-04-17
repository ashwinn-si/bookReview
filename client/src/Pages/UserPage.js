import { useContext, useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/UserPage/Header';
import ReviewCard from '../Components/BookPage/ReviewCard';
import { UserContext } from '../Context/UserDetails';
import Img from "./../Assets/Images/addReview.jpg"
import { useNavigate } from 'react-router-dom';

export default function UserPage(){
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([
        {
            username: "ashwin",
            reviews: "Really enjoyed reading this book. The story kept me hooked!",
            stars: "4.5"
        },
        {
            username: "meera",
            reviews: "A must-read for anyone who loves thrillers!",
            stars: "5"
        },
        {
            username: "john_doe",
            reviews: "It was decent, but I expected more from the ending.",
            stars: "3.5"
        },
        {
            username: "sneha",
            reviews: "Not my type of book. The pacing felt off.",
            stars: "2"
        },
        {
            username: "vikram99",
            reviews: "Excellent writing and well-developed characters.",
            stars: "4"
        },
        {
            username: "sarah_lee",
            reviews: "I finished it in one sitting. Loved it!",
            stars: "5"
        },
        {
            username: "karthik_m",
            reviews: "Good plot but slow in the middle chapters.",
            stars: "3"
        },
        {
            username: "anita",
            reviews: "Beautifully written and emotionally moving.",
            stars: "4.5"
        },
        {
            username: "ravi_teja",
            reviews: "Too predictable for my taste.",
            stars: "2.5"
        },
        {
            username: "julia",
            reviews: "Great book! Will definitely recommend to friends.",
            stars: "5"
        }
    ]);
    const {user, setUser} = useContext(UserContext)
    const [paginationLength, setPaginationLength] = useState(1);
    const [selectedPagination, setSelectedPagination] = useState(0)
    
    const [pageOpenStatus, setPageOpenStatus] = useState({
        loginPage : false,
        signUpPage : false,
        reviewPage : false
    });
    
    useEffect(()=> {
        setPaginationLength(Math.ceil(reviews.length / 5) )
        setSelectedPagination(0)
    },[reviews])
    
    const changePageStatus = (page, status) =>{
        if(page === "reviewPage" && !user){
            setPageOpenStatus((prevState) => ({
                ...prevState,
                loginPage: true
            }))
            return
        }else{
            setPageOpenStatus((prevState) => ({
                ...prevState,
                [page]: status
            }))
        }
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
        <div className="relative min-h-screen">
            <Navbar changePageStatus = {changePageStatus} currentPage={"BooksPage"}/>
            <div className="p-2 border border-x-4 border-y-0  mx-3  shadow-2xl min-h-[90vh] flex justify-start items-center flex-col">
                <div className="flex w-[80vw] justify-start items-center flex-col text-left gap-3 my-5 border-b-2 pb-5 border-b-hilight">
                    <Header username={user?.username} email = {user?.email} name = {user?.name}/>
                </div>
                <div className="flex w-[80vw] justify-center items-center flex-col gap-3 mb-3">
                    <p className="font-header text-2xl font-bold text-accent italic ">Reviews Made By You</p>
                    {
                        reviews?.slice(selectedPagination*5, selectedPagination*5 + 5).map((review,index) => (
                            <ReviewCard  username={review?.username} review={review.reviews} stars={review.stars} key={index}/>
                        ))
                    }
                    {
                        reviews.length == 0 ?
                            <>
                                <img src={Img}/>
                                <button className="p-2 border border-primary rounded-lg bg-primary text-bg font-header hover:bg-bg hover:text-primary transition-colors duration-300 font-semibold tracking-wider my-3"
                                        onClick={() => navigate("/")} >
                                    Add Your First Review
                                </button>
                            </>
                            : null
                    }
                </div>
                
                <div className="flex justify-center items-center gap-2">
                    {
                        Array.from({length : paginationLength}).map((currNumber, index) => (
                            <div className={`cursor-pointer py-2 px-3 border border-accent border-solid text-sm rounded-xl text-semibold ${selectedPagination === index ? 'bg-hilight text-bg' : ""}`} onClick={() => setSelectedPagination(index)} key={index}>
                                {index + 1}
                            </div>
                        ))
                    }
                </div>
                {
                    reviews?.length > 0 ?
                        <button className="p-2 border border-primary rounded-lg bg-primary text-bg font-header hover:bg-bg hover:text-primary transition-colors duration-300 font-semibold tracking-wider my-3"
                                onClick={() => navigate("/")} >
                            Home
                        </button>
                        : null
                }
            </div>
            <Footer />
        </div>
    )
}