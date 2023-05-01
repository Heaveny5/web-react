import axios from 'axios'


const createNote=({title,body,userId,id})=>{
    return axios.post('https://jsonplaceholder.typicode.com/posts',{title,body,userId,id})
        .then((response)=>{
            const {data}=response
            return data
        })
}

export default createNote