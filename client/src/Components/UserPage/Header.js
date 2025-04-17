import { Star } from "lucide-react";

export default function Header({ username = "as", email = "asdsad", name = "asdasd" }) {
    
    return (
        <>
            <h1 className="text-xl font-semibold text-primaryText text-left w-full font-header">UserName: <span className="text-accent text-2xl">{username}</span></h1>
            <h1 className="text-xl font-semibold text-primaryText text-left w-full font-header">Email: <span className="text-accent text-2xl">{email}</span></h1>
            <h1 className="text-xl font-semibold text-primaryText text-left w-full font-header">Name: <span className="text-accent text-2xl">{name}</span></h1>
        </>
    );
}
