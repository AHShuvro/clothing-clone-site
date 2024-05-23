import { useState, useEffect, useRef } from 'react';
import { CiHeart, CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Navbar1 = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (dropDownMenuRef.current && !dropDownMenuRef.current.contains(e.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    const handleLinkClick = () => {
        setDropDownState(false);
    };

    const navItems = [
        {
            name: 'HOME',
            path: '/'
        },
        {
            name: 'SHOP',
            path: '/shop'
        },
        {
            name: 'PAGE',
            path: '/page'
        },
        {
            name: 'BLOG',
            path: '/blog'
        },
        {
            name: 'WOMEN\'S',
            path: '/womencollections/women'
        },
        {
            name: 'MEN\'S',
            path: '/mencollections/men'
        },
    ];

    return (
        <div className='sticky top-0 z-10'>
            <nav className={`flex justify-between ${dropDownState ? 'h-screen w-screen bg-[#0005]' : 'flex items-center justify-between bg-[#FFFFFF] px-4 h-[4rem] shadow-lg'}`}>
                <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-[#333333] transition-all duration-200 hover:scale-110">
                    <h2>Logo</h2>
                </div>
                <div className='hidden items-center justify-between gap-7 lg:gap-10 md:flex'>
                    <ul className="hidden items-center justify-between gap-7 lg:gap-10 md:flex">
                        {navItems.map((item) => (
                            <Link key={item.name} to={item.path}>
                                <li className="group flex text-sm lg:text-base cursor-pointer flex-col text-[#333333] hover:text-[#48cab2] font-bold">
                                    {item.name}
                                    <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#48cab2] transition-all duration-300 group-hover:w-full"></span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <div className='flex gap-2'>
                        <CiSearch className='text-2xl font-bold' />
                        <CiHeart className='text-2xl font-bold' />
                        <HiOutlineShoppingBag className='text-2xl font-bold' />
                    </div>
                </div>
                <div className="relative flex transition-transform md:hidden">
                    <div className='flex gap-2 pr-5'>
                        <CiSearch className='text-2xl font-bold' />
                        <HiOutlineShoppingBag className='text-2xl font-bold' />
                    </div>
                    <svg
                        ref={dropDownMenuRef}
                        onClick={() => setDropDownState(!dropDownState)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cursor-pointer"
                    >
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                    {dropDownState && (
                        <ul ref={dropDownMenuRef} className="z-10 gap-2 bg-[#FFFFFF] absolute right-0 top-11 flex w-[200px] flex-col rounded-lg text-base">
                            {navItems.map((item) => (
                                <Link key={item.name} to={item.path} onClick={handleLinkClick}>
                                    <li className="cursor-pointer px-6 py-2 text-[#333333] hover:bg-[#48cab2]">
                                        {item.name}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar1;
