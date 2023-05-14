import React, { useCallback, useState } from 'react'
import MobileMenu from "./MobileMenu";
import NavBarItem from "./NavbarItem";
import { BellIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)


  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu(current => !current)
  })

  return (
    <div className="w-full fixed z-40">
      <div
        className="
          px-4
          md:px-16
          py-6
          flex
          flex-row
          items-center
          transition
          duration-500
          bg-zinc-900
          bg-opacity-90
        "
      >
        <img className="h-4 lg:h-7" src="images/logo.png" alt="logo" />
        <div
          className="
            flex-row
            ml-8
            gap-7
            hidden
            lg:flex
          ">
          <NavBarItem label="Home" />
          <NavBarItem label="Series" />
          <NavBarItem label="Films" />
          <NavBarItem label="News & Popular" />
          <NavBarItem label="My List" />
          <NavBarItem label="Browse by languages" />
        </div>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Browse</p>
          <ChevronDownIcon className={`text-white transition w-4 fill-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className='flex flex-row ml-auto gap-7 items-center'>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <MagnifyingGlassIcon className='w-6'/>
          </div>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BellIcon className='w-6'/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
