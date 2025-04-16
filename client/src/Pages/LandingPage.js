import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp";
import FeatureBooks from "../Components/FeatureBooks/FeatureBooks";

export default function LandingPage() {
    return (
        <div className="relative">
            <Navbar />
            <Hero />
            <FeatureBooks />
        </div>
        
    )
}