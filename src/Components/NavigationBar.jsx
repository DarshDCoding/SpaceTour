import {Navlink} from "./Navlink.jsx";
import {useState} from "react";

export function NavigationBar() {
    const [hamClicked, setHamClicked] = useState(true);
    const logoUrl = '/assets/shared/logo.svg';
    const clickedFunc = () => {
        setHamClicked(!hamClicked);
    }

    return (
        <div className='border border-transparent'>
            <nav className="mt-[-1px] md:mt-8 pl-8 md:pl-16 flex justify-between h-[80px]">

                <div className="relative left-nav-bar flex items-center gap-[3rem]">
                    <img src={logoUrl} alt="Logo" className=''/>
                    <div className="hidden md:hidden lg:hidden xl:block absolute left-25 z-20 ">
                        <div className="w-[45vw] h-[1px] border-1 border-gray-500"/>
                    </div>
                </div>
                <div className="absolute z-40 right-4 md:hidden lg:hidden xl:hidden items-center mt-6">
                    <button onClick={clickedFunc}>
                        {hamClicked ? (
                            <img src={"/assets/shared/icon-hamburger.svg"} alt="hamburger_menu" className='h-6'/>
                        ) : (
                            <img src={"/assets/shared/icon-close.svg"} alt="hamburger_menu" className='h-6'/>
                        )}
                    </button>
                </div>
                <div
                    className={`right-nav-bar relative z-10 ${!hamClicked? 'flex':'hidden'} flex-col h-[100vh] w-[80%] md:h-[80px] md:flex md:flex-row md:w-[90%] lg:w-[70%] xl:w-[50%] pt-10 md:pt-0 pl-6 pr-4 md:px-10 md:justify-end md:items-center gap-3 md:gap-[2rem] bg-gray-500/15 backdrop-blur-md`}>
                    <Navlink to={"/"} title={"00 HOME"}/>
                    <Navlink to={"/destination"} title={"01 DESTINATION"}/>
                    <Navlink to={"/crew"} title={"02 CREW"}/>
                    <Navlink to={"/technology"} title={"03 TECHNOLOGY"}/>
                </div>
            </nav>
        </div>
    );
}