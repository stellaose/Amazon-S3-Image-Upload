import React, { useState, useEffect } from "react";
import Routes from "../../../env/constants";
// import { useRouter } from "next/router";
import logo from '../../../assets/images/logo.png'
import {useNavigate, useLocation } from 'react-router-dom'

const Header:React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  
  const navigate = useNavigate();
  const {pathname} = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 784);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    backgroundColor: isScrolled ? "#06423F" : "transparent",
    transition: "background-color 0.3s ease",
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[70]" style={headerStyle}>
      <div className="relative max-w-[1440px] mx-auto">
        <div className=" flex justify-between items-center px-10 my-2">
          <img src={logo} alt="" className="w-[126px] h-fit" />
          <div className="flex  items-center 2xl:gap-10 xlg:gap-6">
            <p
              onClick={() => navigate(Routes.HOME)}
              className={`xlg:text-next text-sm leading-6 ${
                pathname === Routes.HOME
                  ? "text-yellow-100 font-semibold"
                  : "text-white font-normal"
              } hover:text-orange-1 cursor-pointer hover:underline`}
              // className="w-fit"
            >
              Home
            </p>
            
          
          </div>

        
        </div>
     
      </div>
    </div>
  );
};

export default Header;
