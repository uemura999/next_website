"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { headerListItems } from "../constants";
import { usePathname } from "next/navigation";
import {IoCloseSharp} from "react-icons/io5"
import {motion, AnimatePresence} from "framer-motion";

function Header() {
  const [active, setActive] = useState();
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setActive(pathName);
  }, [pathName]);


  return (
    <div className="w-full h-20 border-b-[1px] border-gray-500 bg-white p-2">
      <div className="h-full max-w-screen-2xl mx-auto flex items-center justify-between">
        <Link href={"/"} className="relative group overflow-hidden">
          <p className="text-2xl font-bold">ORIGIN.Doc</p>
          <span className="absolute bottom-0 w-full h-[2px] inline-block bg-primeColor -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-700"></span>
        </Link>
        <div className="hidden lg:inline-flex items-center gap-8 text-sm font-semibold tracking-wider mr-3">
          <ul className="flex gap-8">
            {headerListItems.map((item) => (
              <Link href={item.link} key={item._id}>
                <li
                  className={`${
                    active === item.link ? "text-primeColor" : "text-gray-600"
                  } hover:text-primeColor cursor-pointer duration-300 group relative`}
                >
                  {item.title}
                  <span
                    className={`${
                      active === item.link ? "scale-110" : "scale-0"
                    } absolute w-full h-[2px] bg-primeColor scale-0 group-hover:scale-100 -bottom-[1px] left-0 duration-500 transition-transform`}
                  ></span>
                </li>
              </Link>
            ))}
          </ul>
          <button className="w-36 h-10 bg-darkBlue text-white rounded-md hover:bg-primeColor duration-300">
            連絡する
          </button>
        </div>

        <div className="w-7 h-5 group lg:hidden flex flex-col justify-between cursor-pointer overflow-hidden" onClick={() => setShowMenu(true)}>
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor inline-flex -translate-x-1 group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor inline-flex -translate-x-3 group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor "></span>
        </div>
        <AnimatePresence>
        {showMenu && (

        <div className="w-full h-screen lg:hidden fixed top-0 left-0 bg-darkBlue bg-opacity-90 z-50 ">
          <motion.div id="menuContainer" className="w-[70%] h-full bg-darkBlue p-4 relative" initial={{x:-300, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.2}} exit={{ x: -300, opacity: 0 }}>

          
          <span className="absolute right-2 top-8 text-3xl text-red-200 hover:text-red-600 cursor-pointer duration-300" onClick={() => setShowMenu(false)}>
         
            <IoCloseSharp/>
          </span>
          <Link href={'/'} onClick={() => setShowMenu(false)}>
          <p className="text-2xl font-bold text-white mb-4" >ORIGIN.Doc</p>
          </Link>
          <ul className="flex flex-col text-gray-300 text-sm gap-3 font-semibold" onClick={() => setShowMenu(false)}>
            {headerListItems.map((item) => (
            <Link key={item._id} href={item.link}>
            <li className="hover:text-white cursor-pointer duration-300">{item.title}</li>
            </Link>
            ))}
          </ul></motion.div>
        </div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}

export default Header;
