import {useState} from "react";

export function NavItems() {
    const [items] = useState([{
        title: "Home",
        destination: "#home"
    }, {
        title: "Review Library",
        destination: "#review"
    }, {
        title: "Testimonials",
        destination: "#testimonials"
    }]);
    
    return (
        <>
            {
                items.map((item, index) => (
                    <a
                        href={item.destination}
                        key={index}
                        className="font-body text-primaryText hover:text-hilight transition-colors duration-300 font-[500] mx-3 text-left"
                    >
                        {item.title}
                    </a>
                ))
            }
        </>
    );
}