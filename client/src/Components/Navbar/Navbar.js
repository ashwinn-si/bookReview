import { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserDetails';
import { NavItems } from "./NavItems";
import { User, Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';

export default function Navbar({changePageStatus}) {
    const { user, setUserDetails } = useContext(UserContext);
    const [sideBarOpen, setSideBarOpen] = useState(false);
    
    const closeSideBar = () => {
        setSideBarOpen(false);
    }
    
    const handlePageOpen = (page, status) =>{
        changePageStatus(page, status);
    }
    
    const logoutUser = () => {
        setUserDetails(null)
    }
    
    return (
        <nav className="flex py-4 px-6 w-full justify-between items-center bg-bg border-b-2 border-b-accent/40 shadow-md sticky top-0 z-40">
            <div className="font-header text-xl text-accent italic font-bold">
                BookCritic
            </div>
            {
                window.innerWidth > 762 ?
                    <>
                        <div className="flex justify-center items-center gap-6 ">
                            <NavItems />
                        </div>
                        {
                            user ?
                                <div className="flex items-center gap-4 justify-center">
                                    <User className="w-6 h-6 cursor-pointer hover:text-hilight transition-colors duration-200" />
                                    <button className="p-2 border border-primary rounded-lg text-primary hover:bg-primary/10 transition-colors duration-300 hover:bg-primary hover:text-bg font-semibold tracking-wider" onClick={() => logoutUser()}>
                                        LogOut
                                    </button>
                                </div>
                                :
                                <div className="flex items-center gap-3">
                                    <button className="p-2 border border-primary rounded-lg bg-primary text-bg font-header hover:bg-bg hover:text-primary transition-colors duration-300 font-semibold tracking-wider"
                                    onClick = {() => handlePageOpen("loginPage", true)} >
                                        LogIn
                                    </button>
                                    <button className="p-2 border border-primary rounded-lg text-primary hover:bg-primary/10 transition-colors duration-300 hover:bg-primary hover:text-bg font-semibold tracking-wider"
                                            onClick = {() => handlePageOpen("signUpPage", true)} >
                                        SignUp
                                    </button>
                                </div>
                        }
                    </>
                    :
                    <>
                        {
                            !sideBarOpen ?
                                <Menu
                                    onClick={() => setSideBarOpen(true)}
                                    className="cursor-pointer text-accent hover:text-primary transition-colors duration-200"
                                />
                                :
                                <X
                                    onClick={() => setSideBarOpen(false)}
                                    className="cursor-pointer text-accent hover:text-primary transition-colors duration-200 z-50"
                                />
                        }
                        {sideBarOpen && <Sidebar closeSideBar={closeSideBar} changePageStatus = {changePageStatus}  logoutUser = {logoutUser}/>}
                    </>
            }
        </nav>
    );
}