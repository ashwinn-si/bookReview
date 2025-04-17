import { useContext, useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/UserPage/Header';
import ReviewCard from '../Components/UserPage/ReviewCard';
import Img from "./../Assets/Images/addReview.jpg"
import { useNavigate } from 'react-router-dom';
import api from '../Api';
import { UserContext } from '../Context/UserDetails';

export default function UserPage(){
    const navigate = useNavigate();
    const [reviews, setReviews] = useState();
    const { user, setUserDetails } = useContext(UserContext);
    const [paginationLength, setPaginationLength] = useState(1);
    const [selectedPagination, setSelectedPagination] = useState(0)
    
    const [pageOpenStatus, setPageOpenStatus] = useState({
        loginPage : false,
        signUpPage : false,
        reviewPage : false
    });

    async function fetchData(){
        const response = await api.get(`user/user-review?username=${user?.username}`);
        setReviews(response.data);
    }
    useEffect(() => {
        fetchData();
    },[])
    
    useEffect(()=> {
        if(!reviews) return
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
                            <ReviewCard  bookname={review.name} stars = {review.stars} author = {review.author} review={review.review} key={index}/>
                        ))
                    }
                    {
                        !reviews || reviews.length === 0 ?
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