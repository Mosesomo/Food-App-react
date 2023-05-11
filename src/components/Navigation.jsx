import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { useState } from "react";

const Navigation = () =>{
    const [show, setShow] = useState(false)
    return(
        <div className="max-w-[1640] mx-auto flex justify-between items-center p-3">
           <div className="flex items-center">
            <div className="cursor-pointer">
                <AiOutlineMenu size={30} onClick={() => setShow(true)}/>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                Best<span className="font-bold">Eats</span>
                </h1>
            </div>
            <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                <p className="bg-black text-white
                 rounded-full p-1">Delivery</p>
                <p className="p-1">Pickup</p>
            </div>

            {/*search input area*/}
            <div className="flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={20}/>
                <input className="bg-transparent p-2 w-full focus:outline-none" type="text" placeholder="search foods" />
            </div>

            {/*cart button*/}
                <button className="bg-black text-white flex rounded-full">
                    <BsFillCartFill size={20} className="mr-2"/>Cart
                </button>

                {/*mobile menu*/}
            {show && (
                <div className="bg-black w-[200px] h-screen fixed top-0 left-0 z-10 duration-300 text-white">
                    <AiOutlineClose className="text-white absolute right-0 top-2 text-xl cursor-pointer" onClick={() => setShow(false)}/>
                        <h2 className="text-2xl px-4">Best<span className="ml-1 font-bold">Eats</span></h2>
                    <nav>
                        <ul className="flex flex-col p-4">
                        <li className="text-xl flex items-center py-4"><TbTruckDelivery size={20}/>Orders</li>
                        <li className="text-xl flex items-center py-3"><MdFavorite size={20}/>Favourites</li>
                        <li className="text-xl flex items-center py-3"><FaWallet size={20}/>Wallet</li>
                        <li className="text-xl flex items-center py-3"><MdHelp size={20}/>Help</li>
                        <li className="text-xl flex items-center py-3"><AiFillTag size={20}/>Promotions</li>
                        <li className="text-xl flex items-center py-3"><BsFillSaveFill size={20}/>Best ones</li>
                        <li className="text-xl flex items-center py-3"><FaUserFriends size={20}/>Invite Friends</li>   
                        </ul>
                    </nav>
                    </div>
            )};
        </div>
    )
}
export default Navigation