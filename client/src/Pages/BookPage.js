import { useContext, useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Login from '../Components/Login/Login';
import SignUp from '../Components/SignUp/SignUp';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/BookPage/Header';
import ReviewCard from '../Components/BookPage/ReviewCard';
import { UserContext } from '../Context/UserDetails';
import AddReviewCard from '../Components/BookPage/AddReviewCard';
import Img from "./../Assets/Images/addReview.jpg"
import { useParams } from 'react-router-dom';
import api from '../Api';

export default function BookPage(){
    const [reviews, setReviews] = useState([]);
    const {user, setUser} = useContext(UserContext)
    const [paginationLength, setPaginationLength] = useState(1);
    const [selectedPagination, setSelectedPagination] = useState(0)
    const [bookId, setBookId] = useState(useParams().bookId)
    
    const fetchData = async () => {
        const response = await api.get(`/book/book-review?bookId=${bookId}`);
        setReviews(response.data)
    }

    useEffect(() => {
        if(bookId){
            fetchData();
        }
    },[bookId])

    const [pageOpenStatus, setPageOpenStatus] = useState({
        loginPage : false,
        signUpPage : false,
        reviewPage : false
    });
    
    useEffect(()=> {
        setPaginationLength(Math.ceil(reviews.length / 5) )
        setSelectedPagination(0)
    },[reviews])
    
    const changePageStatus = (page, status, fetchDataStatus = false) =>{
        if (fetchDataStatus) {
            fetchData();
        }
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
    function handleAddReview(review, rating) {
        api.post('/user/add-review', {
            username: user.username,
            review: review,
            stars: rating,
            bookId: bookId,
        })
        .then(response => {
           changePageStatus('reviewPage', false, true);
        })
        .catch(error => {
            console.log('error has occured in the add review api', error);
        });
    }
    
    
    return (
        <div className="relative min-h-screen">
            <Navbar
                changePageStatus={changePageStatus}
                currentPage={'BooksPage'}
            />
            <div className="p-2 border border-x-4 border-y-0  mx-3  shadow-2xl min-h-[90vh] flex justify-start items-center flex-col">
                <div className="flex w-[80vw] justify-start items-center flex-col text-left gap-3 my-5 border-b-2 pb-5 border-b-hilight">
                    <Header />
                </div>
                <div className="flex w-[80vw] justify-center items-center flex-col gap-3 mb-3">
                    <p className="font-header text-2xl font-bold text-accent italic ">
                        Reviews
                    </p>
                    {reviews
                        ?.slice(
                            selectedPagination * 5,
                            selectedPagination * 5 + 5
                        )
                        .map((review, index) => (
                            <ReviewCard
                                username={review?.username}
                                review={review.review}
                                stars={review.stars}
                                key={index}
                            />
                        ))}
                    {reviews.length == 0 ? (
                        <>
                            <p className="text-2xl font-header font-bold my-10 text-primary">
                                Be the first to add the Review
                            </p>
                            <img src={Img} />
                        </>
                    ) : null}
                </div>
                <button
                    className="p-2 border border-primary rounded-lg bg-primary text-bg font-header hover:bg-bg hover:text-primary transition-colors duration-300 font-semibold tracking-wider my-3"
                    onClick={() => changePageStatus('reviewPage', true)}
                >
                    Add Your Review
                </button>
                <div className="flex justify-center items-center gap-2">
                    {Array.from({ length: paginationLength }).map(
                        (currNumber, index) => (
                            <div
                                className={`cursor-pointer py-2 px-3 border border-accent border-solid text-sm rounded-xl text-semibold ${selectedPagination === index ? 'bg-hilight text-bg' : ''}`}
                                onClick={() => setSelectedPagination(index)}
                                key={index}
                            >
                                {index + 1}
                            </div>
                        )
                    )}
                </div>
            </div>
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
            {pageOpenStatus.reviewPage ? (
                <AddReviewCard
                    changePageStatus={changePageStatus}
                    bookId={bookId}
                    handleAddReview = {handleAddReview}
                />
            ) : null}
        </div>
    );
}