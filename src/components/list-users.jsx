

const Note =({id,title,body})=>{
    return(
        <div className="">
            <li className="w-full px-4 py-2 my-2 border-2 border-blue-400 rounded-t-lg dark:border-gray-600" 
            >
                <h1 className="">{id}</h1>
                <h2 className="">{title}</h2>
                <br className=""/>
                <p className="">{body}</p>
            </li>              
        </div>
           

    )
}
export default Note