//import { useParams } from "react-router-dom"
import { Link,useNavigate } from "react-router-dom"




export default function Userpage(){

    //const params=useParams()s
    //console.log(params)
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate('/')
    }

    return(
        <div>
            <h1>Login</h1>
            <br/>
            <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="button" onClick={handleClick}>
                back to about
            </button>
            <br/>
            <Link to='list-users'
             >Mostrar lista de usuarios
            </Link>
            
        </div>
    )
}