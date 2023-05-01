//import img1 from './img/3f45.svg'
const Card =({title,content1,content2,src})=>{
    return(
        <div className="max-w-md mx-auto overflow-hidden shadow-md rounded-xl md:max-w-4xl bg-gradient-to-r from-red-600 to-purple-800">
            <div className="py-6 md:flex">
                <div className="px-4 md:shrink-0">
                    <img className="object-cover w-full rounded h-45 md:h-full md:w-54" src={src} alt="Man looking at item at a store"/>
                </div>
                <div className="p-8">
                    <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase ">{title}</h2>
                        <h4 className="block mt-1 text-xl font-medium leading-tight text-black">{content1}</h4>
                        <p className="mt-2 text-xl text-white ">{content2}</p>
                </div>
            </div>
         </div>
    )
}


export default Card
