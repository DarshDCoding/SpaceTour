import {Navlink} from "./Navlink.jsx";
import {useEffect, useState} from "react";

export function NavigationBar() {
    const logoUrl = '/assets/shared/logo.svg';
    const hamburgerBtnUrl = '/assets/shared/icon-hamburger.svg';
    const closeBtnUrl = '/assets/shared/icon-close.svg';

    const [hamClicked, setHamClicked] = useState(false);

    useEffect(() => {
        const handleResize = () => window.innerWidth > 480 && setHamClicked(true);

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='border border-transparent'>
            <nav className="mt-[-1px] md:mt-8 pl-2 md:pl-4 lg:pl-16 flex justify-between h-[80px]">

                <div className="relative left-nav-bar flex items-center gap-[3rem]">
                    <img src={logoUrl} alt="Logo" />
                    <div className="hidden md:hidden lg:hidden xl:block absolute left-25 z-20 ">
                        <div className="w-[45vw] h-[1px] border-1 border-gray-500"/>
                    </div>
                </div>
                <div className="absolute z-40 right-4 md:hidden items-center mt-6">
                    <button onClick={()=> setHamClicked((!hamClicked))}>
                        {!hamClicked ? (
                            <img src={hamburgerBtnUrl} alt="hamburger_menu" className='h-6'/>
                        ) : (
                            <img src={closeBtnUrl} alt="hamburger_menu" className='h-6'/>
                        )}
                    </button>
                </div>
                <div
                    className={`right-nav-bar fixed right-0 transform transition-transform duration-150 ease-in-out z-10 flex ${hamClicked? "translate-x-0" : "translate-x-full"} md:transition-none flex-col h-[100vh] w-[75vw] md:h-[80px] md:flex md:flex-row md:w-[90%] lg:w-[70%] xl:w-[50%] pt-20 md:pt-0 pl-6 pr-4 md:px-10 md:justify-end md:items-center gap-5 md:gap-[2rem] bg-gray-500/15 backdrop-blur-md`}>
                    <Navlink to={"/"} title={"00 HOME"}/>
                    <Navlink to={"/destination"} title={"01 DESTINATION"}/>
                    <Navlink to={"/crew"} title={"02 CREW"}/>
                    <Navlink to={"/technology"} title={"03 TECHNOLOGY"}/>
                </div>
            </nav>
        </div>
    );
}