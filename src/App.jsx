import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import {Navi} from './components/Navi'
import Users from './pages/Users'

import Userpage from './pages/userpage'
import Dashboard from './pages/dashboard'
import Donations from './pages/donations'
import Footer from './components/footer'
import { Helmet } from 'react-helmet'
//import Footer from './components/footer'

//acá podemos hacer que route tenga dentro otra route osea 
//<route>
//  <routeaca el path de welcome y el elemento a pintar/>  
//</route> 

export default function App(){
    return(
        <div className='flex flex-col bg-slate-800'>
            <BrowserRouter >
                <Navi/>
                <Routes>
                    <Route path='/' element={<Home/>}/>  
                    <Route path='/about' element={<About/>}/>
                    <Route path='/Users' element={<Users/>}/>                
                    <Route path='/Users/' element={<Userpage/>}/>
                    <Route path='/Usuarios' element={<Navigate to='/users'/>}/>
                    <Route path='/Users/:id' element={<Users/>}/>
                    <Route path='/donations' element={<Donations/>}/>
                    <Route path='/dashboard/*' element={<Dashboard/>}/>
                    <Route path='*' element={<NotFound/>}/>      
                </Routes>
                <Footer/>
            </BrowserRouter>            
        </div>

    )
}

