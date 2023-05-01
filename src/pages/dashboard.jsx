//import { useNavigate,Routes,Route,Link} from "react-router-dom"
//quitamos el routes y lo de dentro y no vamos a App
//por ultmo importamos un oulet y lo pondemos donde querramos , dentro
//del div o fuera , alado del boton , donde sea 
const Dashboard =()=>{
    return(
        <div className="flex items-center justify-center w-full h-full bg-slate-400">
            <div className="w-full max-w-xs py-40">
                <form className="px-8 pt-6 pb-8 my-4 bg-white rounded shadow-md">
                    <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                        Username
                    </label>
                    <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                    </div>
                    <div className="mb-6">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                        Password
                    </label>
                    <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder=""/>

                    </div>
                    <div className="flex items-center justify-between">
                    <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                    <a className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800" href="asd">
                        Forgot Password?
                    </a>
                    </div>
                </form>
            </div>            
        </div>

    )
}
export default Dashboard