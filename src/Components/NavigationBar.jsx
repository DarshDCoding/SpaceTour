import {NavLink} from "react-router";
import {Navlink} from "./Navlink.jsx";
import {useState} from "react";

export function NavigationBar() {
    const [hamClicked,setHamClicked] = useState(false);
    const logoUrl = '/assets/shared/logo.svg';
    const clickedFunc =()=>{
        setHamClicked(!hamClicked);
        console.log(hamClicked);
    }

    return (
        <div className={`border border-transparent`}>
            <nav className="mt-2 md:mt-8 pl-8 md:pl-16 flex justify-between h-[80px]">

                <div className="relative left-nav-bar flex items-center gap-[3rem]">
                    <img src={logoUrl} alt="Logo" className=''/>
                    <div className="hidden md:hidden lg:hidden xl:block absolute left-25 z-20 ">
                    <div className="w-[45vw] h-[1px] border-1 border-gray-500" />
                    </div>
                </div>

                <div className="right-nav-bar hidden md:flex md:w-[90%] lg:w-[70%] xl:w-[50%] h-full px-10  justify-end items-center gap-[2rem] bg-gray-500/15 backdrop-blur-md ">
                    <Navlink to={"/"} title={"00 HOME"}/>
                    <Navlink to={"/destination"} title={"01 DESTINATION"}/>
                    <Navlink to={"/crew"} title={"02 CREW"}/>
                    <Navlink to={"/technology"} title={"03 TECHNOLOGY"}/>
                </div>
                <div className="flex md:hidden lg:hidden xl:hidden items-center px-8 ">
                    <button onClick={clickedFunc}>
                    <img src={"/assets/shared/icon-hamburger.svg"} alt="hamburger_menu" className='h-8'/>
                    </button>
                </div>
            </nav>
        </div>
    );
}