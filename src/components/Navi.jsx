//import { NavLink } from './NavLink'
//import logosvg from "./img/heart.svg"
//import Handsvg from "./img/Hand.svg"
//import contactsvg from "./img/interfaz.svg"
//import usuariosvg from "./img/usuario.svg"
//import Aboutsvg from './img/about.svg'
import {Link} from "react-router-dom"
export const Navi=()=>{
    //console.log(NavLink)
    return(
        <header className='pt-1 pb-1 pl-8 pr-8 '>
            <div className='flex items-center justify-center px-5 py-2 rounded bg-gradient-to-r from-violet-500 via-red-500 to-pink-400 lg:flex-row place-content-between lg:mx-2 lg:mt-3 dark:bg-gray-900'>
                <Link className='relative flex pr-2 hover:opacity-70 ' to='/'>
                    <div className='flex items-center justify-center pr-4'>

                    </div>
                    <h1 className='text-xl font-semibold '>Para Anid
                        <span className='pl-1 pr-1 ml-1 text-black rounded-lg bg-rose-400'>😁😁</span><br></br>
                          De Anderson 😊
                    </h1>                                  
                </Link>
            </div>
        </header>
    )
}



//import { BrowserRouter } from 'react-router-dom'

  

