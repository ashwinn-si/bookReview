import { User, Lock, ArrowRightCircle, SquareX } from "lucide-react";
import {useState, useContext} from "react";
import { UserContext } from '../Context/UserDetails';

export default function SignUp({changePageStatus, togglePageStatus}) {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        name:""
    });
    const { user, setUserDetails } = useContext(UserContext);
    
    function handleChange(e){
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [e.target.name]: e.target.value,
        }));
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(credentials);
        setUserDetails({
            username: credentials.username,
        })
        changePageStatus("signUpPage", false)
    }
    
    return (
        <div className="w-full h-full min-h-screen flex justify-center items-center bg-bg absolute top-0 z-10 bg-opacity-80">
            <form className="bg-white shadow-lg rounded-2xl p-8 w-80 relative" onSubmit={handleSubmit}>
                <div className="relative">
                    <h2 className="text-2xl font-header font-semibold text-primary-text mb-6 text-center">SignUp</h2>
                    <SquareX className="text-red-600 absolute  top-1 right-1 cursor-pointer hover:bg-red-600 hover:text-white hover:rounded-md transition-all duration-300" onClick={() => changePageStatus("signUpPage", false)}/>
                </div>
                
                <div className="mb-6">
                    <label className="block text-sm font-body text-primary-text mb-1">Name</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                        <User className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="w-full outline-none text-sm font-body bg-transparent"
                            name="name"
                            onChange={handleChange}
                            defaultValue={credentials.name}
                        />
                    </div>
                </div>
                
                <div className="mb-4">
                    <label className="block text-sm font-body text-primary-text mb-1">Username</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                        <User className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Enter username"
                            className="w-full outline-none text-sm font-body bg-transparent"
                            name="username"
                            onChange={handleChange}
                            defaultValue={credentials.username}
                        />
                    </div>
                </div>
                
                <div className="mb-6">
                    <label className="block text-sm font-body text-primary-text mb-1">Password</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                        <Lock className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full outline-none text-sm font-body bg-transparent"
                            name="password"
                            onChange={handleChange}
                            defaultValue={credentials.password}
                        />
                    </div>
                </div>
                
                <button className="w-full flex justify-center items-center gap-2 bg-primary text-white py-2 rounded-lg hover:opacity-90 transition-all" type="submit">
                    <span className="font-body">SignUp</span>
                    <ArrowRightCircle className="w-5 h-5" />
                </button>
                <p className="text-center mt-2">Existing User ? <span className="text-accent font-bold tracking-wide cursor-pointer" onClick = {() => togglePageStatus("signUpPage","loginPage")}>LogIn</span></p>
            </form>
        </div>
    );
}
