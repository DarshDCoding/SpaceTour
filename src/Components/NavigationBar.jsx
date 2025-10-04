import {NavLink} from "react-router";
import {Navlink} from "./Navlink.jsx";

export function NavigationBar() {

    const logoUrl = '/assets/shared/logo.svg';

    return (
        <nav className="flex justify-between"
             style={{paddingBlock: '2rem', paddingLeft: '4rem'}}>

            <div className="left-nav-bar flex items-center gap-[2rem]">
                <img src={logoUrl} alt="Logo"/>
                <div className="w-[400px] h-[1px] border-1 border-gray-50"></div>
            </div>

            <div className="right-nav-bar flex items-center gap-[2rem] bg-gray-500 ">
                <Navlink to={"/"} title={"00 HOME"}/>
                <Navlink to={"/destination"} title={"01 DESTINATION"}/>
                <Navlink to={"/crew"} title={"02 CREW"}/>
                <Navlink to={"/technology"} title={"03 TECHNOLOGY"}/>
            </div>
        </nav>
    );
}