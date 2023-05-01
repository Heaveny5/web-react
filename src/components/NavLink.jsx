import { NavLink as NavLinkRR } from "react-router-dom"

export const NavLink=({to,children})=>{
    //console.log(props)
    return(
        <NavLinkRR            
            className="flex flex-col items-center w-1/4 gap-1 pl-1 pr-1 text-xs text-gray-500 transition rounded-lg sm:hover:ring-2 ring-gray-900 dark:ring-yellow-300 sm:w-auto lg:p-1 sm:text-base sm:flex-row hover:text-gray-900 dark:hover:text-yellow-300 dark:text-gray-100"
            to={to}
        >{children}
        </NavLinkRR>
       
    )    
}