"use client";

import headerData from "@/data/header.json";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    console.log("click");
    setShowMenu((prev) => !prev);
  };

  const isHomePage = pathname === "/";

  return (
    <header className="flex justify-between items-center px-6 absolute z-10 w-full">
      <div className="flex justify-between w-full items-center py-3 border-b-2 border-white">
        <Link href="/" className="font-bebas">
          <Image src="/images/dryclean.png" alt="Live-Clean-Test Logo" width={150} height={100} />
        </Link>

        <ul
          className={`flex flex-col duration-300 sm:flex-row absolute right-0 bg-black w-screen h-screen sm:h-fit sm:w-fit sm:top-0 sm:relative sm:bg-transparent gap-6 justify-center items-center ${
            showMenu ? "top-0" : "-top-[100vh]"
          } `}
        >
          {headerData.header.map((item, index) => {
            return (
              <li 
                key={index} 
                className={`text-base uppercase font-semibold transition-colors duration-300
                  ${isHomePage 
                    ? "text-black hover:text-gray-600" 
                    : "text-white hover:text-gray-300"
                  }`}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
        <div>
          <button
            onClick={() => toggleMenu()}
            className="text-white sm:hidden z-20 relative"
          >
            {showMenu ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;