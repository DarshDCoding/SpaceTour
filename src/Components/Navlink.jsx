import {NavLink} from "react-router";

export function Navlink({to, title}) {
    return(
        <NavLink to={to}
                 className={({ isActive }) =>
                     isActive ? 'flex text-center  text-gray-50 border-b-2 border-gray-50 py-6 '  : 'text-gray-50'}>
             {title}
        </NavLink>
    )
}