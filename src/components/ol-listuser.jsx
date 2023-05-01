import Note from "./list-users"
import { useState,useEffect } from "react"
import { getAllNotes } from "../services/notes/getAllnotes"
import createNote from "../services/notes/createNote"
//import { data } from "autoprefixer"




const OLlist=()=>{

    const [notes,setNotes] =useState([])
    const[newNote,setNewNote]=useState("")
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
        getAllNotes()
          .then(notes=>{
            setNotes(notes)
            setLoading(false)
          })


    },[])


    const handleChange=(event)=>{
         setNewNote(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        //console.log(newNote)
        const noteToAddToState={
            id:notes.length+1,
            title:newNote,
            body:newNote,
            userId:1
        }
        //console.log(noteToAddToState)
        createNote(noteToAddToState).then(newNote=>{
                setNotes((prevNotes)=>prevNotes.concat(newNote))
            })
        //setNotes(notes.concat(noteToAddToState))
        setNewNote("")
    }

    return(
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-semibold ">list Users</h1>
            {loading?'Cargando.....':''}
            <ul className="w-1/2 py-2 text-sm font-medium text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {notes
                .map((note)=>( 
                <Note key={note.id} {...note} /> 
                ))} 
                
                
            </ul>  
            <form onSubmit={handleSubmit}>
                <input className="bg-blue-400 rounded " type='text' onChange={handleChange} value={newNote}/>
                <button className="px-2 py-2 mb-2 mr-2 text-xs text-center text-white rounded-lg bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl dark:focus:ring-green-800">Crear Nota</button>                    
            </form>          
        </div>
    )
}
export default OLlist