import {NavLink} from "react-router";

export function Navlink({to, title}) {
    return(
        <NavLink to={to} className='text-white'>
            {({ isActive }) => (
                <span className={isActive && "border-b-2 border-gray-50"}
                style={{padding:'1rem'}}>{title}</span>
            )}
        </NavLink>

    )
}