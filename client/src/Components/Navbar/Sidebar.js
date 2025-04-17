import { useContext } from 'react';
import { UserContext } from '../../Context/UserDetails';
import { User, Menu, X } from 'lucide-react';
import { NavItems } from './NavItems';
export default function Sidebar({ closeSideBar, changePageStatus, logoutUser }) {
    const { user, setUserDetails } = useContext(UserContext);
    
    const handlePageOpen = (page, status) =>{
        changePageStatus(page, status);
    }
    
    return (
        <div className="fixed top-0 left-0 w-[50vw] h-[100vh] z-50 bg-bg border-r border-accent/40 shadow-lg flex flex-col">
            <div className="flex justify-end p-4">
                <button
                    onClick={closeSideBar}
                    className="text-accent hover:text-primary transition-colors duration-200"
                >
                    ✕
                </button>
            </div>
            <div className="flex flex-col gap-4 p-6">
                <div className=" flex-col flex justify-center items-center gap-6 text-left w-full">
                    <NavItems />
                </div>
            </div>
            <div className="flex flex-col gap-4 p-6 ">
                {
                    !user ?
                        <div className="mt-6 pt-6 border-t border-accent/20 flex flex-col gap-3">
                            
                            <button className="p-2 border border-primary rounded-lg bg-primary text-bg font-header hover:bg-bg hover:text-primary transition-colors duration-300 font-semibold tracking-wider"
                                    onClick = {() => handlePageOpen("loginPage", true)} >
                                LogIn
                            </button>
                            <button className="p-2 border border-primary rounded-lg text-primary hover:bg-primary/10 transition-colors duration-300 hover:bg-primary hover:text-bg font-semibold tracking-wider"
                                    onClick = {() => handlePageOpen("signUpPage", true)} >
                                SignUp
                            </button>
                        </div>
                        :
                        <div className="flex items-center gap-4 justify-center flex-col">
                            <User className="w-6 h-6 cursor-pointer hover:text-hilight transition-colors duration-200 text-red-800" />
                            <button className="p-2 border border-primary rounded-lg text-primary hover:bg-primary/10 transition-colors duration-300 hover:bg-primary hover:text-bg font-semibold tracking-wider" onClick={ () => logoutUser()} >
                                LogOut
                            </button>
                        </div>
                }
            </div>
        </div>
    );
}