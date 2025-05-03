import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="bg-green-800 text-white py-4 md:py-8">
            <div className=" container mx-auto flex items-center justify-between">
                <h3> React Practice ...</h3>
                <button onClick={toggleMenu}>
                    {
                        isOpen ?  <IoMdClose />: <FaBars />
                    }
                   
                </button>
                
                <ul className="flex space-x-4 md:space-x-6">
                   <li> Home</li>
                   <li> Products</li>
                   <li> About</li>
                   <li> Blogs</li>
                   <li> Contact</li>
                </ul>
                <button> Login</button>
            </div>
      </nav>
  )
};

export default Navber;
