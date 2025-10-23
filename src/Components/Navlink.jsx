import {NavLink} from "react-router";

export function Navlink({to, index,  title}) {
    return(
        <NavLink to={to}
                 className={({ isActive }) =>
                     isActive ? 'font-intro text-gray-50 border-r-4 md:border-r-0 md:border-b-2 border-gray-50 py-1 md:py-6 '  : 'font-intro text-gray-50 py-1 md:py-6'}>
            <span className='font-semibold'>{index}</span> {title}
        </NavLink>
    )
}