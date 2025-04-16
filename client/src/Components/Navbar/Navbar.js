import { useContext } from 'react';
import { UserContext } from '../../Context/UserDetails';
import {NavItems} from "./NavItems";
import { User, Menu } from 'lucide-react';

export default function Navbar() {
    const { user, setUserDetails } = useContext(UserContext);
    
    return (
        <nav className="flex py-4 px-6 w-full justify-between items-center bg-bg border-b-2 border-b-accent/40 shadow-md sticky">
            <div className="font-header text-xl text-accent italic font-bold">
                BookCritic
            </div>
            {
                window.innerWidth > 762 ? 
                <>
                    <NavItems />
                    {
                        user ?
                            <div className="flex items-center gap-4 justify-center">
                                <User className="w-6 h-6 cursor-pointer hover:text-hilight transition-colors duration-200" />
                                <button className="p-2 border border-primary rounded-lg text-primary hover:bg-primary/10 transition-colors duration-300 hover:bg-primary hover:text-bg font-semibold tracking-wider">
                                    LogOut
                                </button>
                            </div>
                            :
                            <div className="flex items-center gap-3">
                                <button className="p-2 border border-primary rounded-lg bg-primary text-bg font-header hover:bg-bg hover:text-primary transition-colors duration-300 font-semibold tracking-wider">
                                    LogIn
                                </button>
                                <button className="p-2 border border-primary rounded-lg text-primary hover:bg-primary/10 transition-colors duration-300 hover:bg-primary hover:text-bg font-semibold tracking-wider">
                                    SignUp
                                </button>
                            </div>
                    }
                </>
                :
                <Menu />
            }
            
        </nav>
    );
}