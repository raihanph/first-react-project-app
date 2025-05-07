import { useEffect } from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router";

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const location = useLocation();

    useEffect(() => { 
        setActiveLink(location.pathname || '/');
    },[location.pathname]);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleLinkClick = (path) => {
        setActiveLink(path);
    }

    return (
        <nav className="bg-green-800 text-white py-4 md:py-8 sticky top-0 border-b-2 border-green-500">
            <div className=" container mx-auto flex items-center justify-between">
                <h3 className="text-3xl"> React Practice ...</h3>
                {/* mobail button */}

                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                    {
                        isOpen ?  <IoMdClose />: <FaBars />
                    }
                   
                </button>
                </div>

                <ul className="hidden md:flex space-x-4 md:space-x-6">

                    <li> <Link to={'/'}
                               onClick={() => handleLinkClick('/')}
                        className={`${activeLink === '/' ? 'text-purple-950' :'hover:text-green-300'}`}> Home</Link></li>
                    <li> <Link to={'/Products'}
                               onClick={() => handleLinkClick('/Products')}
                        className={`${activeLink === '/Products' ? 'text-purple-950' :'hover:text-green-300'}`}> Products</Link></li>
                    <li> <Link to={'/About'}
                               onClick={() => handleLinkClick('/About')}
                        className={`${activeLink === '/About' ? 'text-purple-950' :'hover:text-green-300'}`} > About</Link></li>
                    <li> <Link to={'/Blogs'}
                               onClick={() => handleLinkClick('/Blogs')}
                        className={`${activeLink === '/Blogs' ? 'text-purple-950' :'hover:text-green-300'}`} > Blogs</Link></li>
                    <li> <Link to={'/Contact'}
                                onClick={() => handleLinkClick('/Contact')}
                        className={`${activeLink === '/Contact' ? 'text-purple-950' :'hover:text-green-300'}`}> Contact</Link></li>
                   
                  
                </ul>

                <Link to={'/login'}>
                    <button className="hidden md:block bg-white text-black px-4 py-1 rounded border-none cursor-pointer hover:bg-slate-400"> Login</button>
                </Link>
                
                {/* mobail menu colaps */}
                <div className={`md:hidden w-full absolute bg-green-600 top-full left-0 ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col items-center py-4 space-y-2">
                          <li className="hover:text-green-500 font-bold">Home</li>
                          <li className="hover:text-green-500 font-bold">Products </li>
                          <li className="hover:text-green-500 font-bold">About </li>
                          <li className="hover:text-green-500 font-bold">Blogs </li>
                          <li className="hover:text-green-500 font-bold">Contact</li>
                      <button className=" bg-white text-black px-4 py-1 rounded border-none cursor-pointer hover:bg-slate-400"> Login</button>
                   
                </ul>
                </div>
            </div>
      </nav>
  )
};

export default Navber;
