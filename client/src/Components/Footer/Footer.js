import { Heart, Github, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-bg border-t-2 border-b-accent/40 text-primaryText">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex flex-col items-center text-center">
                    <div className="flex justify-evenly items-center w-full">
                        <p className="text-xl mb-2 font-header font-bold text-accent">For All the Book Lovers</p>
                        
                    </div>
                    
                    <div className="flex space-x-4">
                        <p className="flex items-center gap-1 mb-4 font-header text-semibold">
                            Made With <Heart className="text-red-700" size={18} fill="currentColor" /> by Ashwin SI
                        </p>
                        <a href="https://github.com/ashwinn-si" target="_blank" className="text-accent hover:text-white transition-colors">
                            <Github size={22} />
                        </a>
                        <a href="https://www.linkedin.com/in/ashwinsi/" target="_blank" className="text-accent hover:text-white transition-colors">
                            <Linkedin size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}