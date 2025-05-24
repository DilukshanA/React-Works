import React, { useEffect, useRef, useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const RefExTwo = () => {

    const [isVisible, setIsVisible] = useState(false);
    const navRef = useRef();
    const toggleButtonRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && 
                (!navRef.current.contains(event.target) && !toggleButtonRef.current.contains(event.target))) {
                setIsVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });
    
    const navToggle = () => {
        setIsVisible(!isVisible);
    }

    useEffect(() => {

    }, [navRef]);

  return (
    <div className='flex flex-col items-center justify-center mt-12 text-2xl 
    font-semibold space-y-4'>
        <button className='border-2 px-6 py-3 rounded-lg hover:bg-gray-100'
        ref={toggleButtonRef}
        onClick={navToggle}>
            {isVisible ? <IoCloseSharp/> : <FiAlignJustify />}
        </button>

        <div className={`border-2 px-6 py-3 rounded-lg hover:bg-gray-100
        ${isVisible ? 'block' : 'hidden'}`}
        ref={navRef}>
            <h1>Navbar</h1>
        </div>
    </div>
  )
}

export default RefExTwo