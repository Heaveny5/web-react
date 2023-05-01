//import imgCasco from '../components/img/casco.svg'
//import teamsvg from '../components/img/team.svg'
import UbicationAbout from '../components/ubication'
import omg1 from '../components/img/anid.jpg'
import omg2 from '../components/img/anid2.jpg'

const About =()=>{

 

    return( 



        <section className="flex flex-col gap-4 p-6 img">
            <div className='flex items-center justify-center px-4 py-6 mb-10 text-3xl font-semibold'>
                <h1 className='font-semibold '>Part 1 </h1>
            </div>
            <div className='p-4 rounded bg-gradient-to-r from-orange-400 via-red-500 to-pink-500'>
                <div className='flex items-center justify-between gap-5'>
                    <img src={omg1} alt="casc" className='m-4 bg-gray-100 h-80 w-72 '/>
                    <h3 className='px-6 text-xl font-semibold text-center '
                    >
                      happy Birthday anid 🥳🥳 happy Birthday anid 🥳🎂🥳..! pide tu deseo xd . bueno
                      como te dije tene un bonito dia espero la pases muy bien y te llenen de ragalos xd
                      1 años mas de vida , mas viejita jsjsjs  
                     <br></br><br></br>Mire abajo 👇👇
                    </h3>
                </div>                  
            </div>
            <div className='flex items-center justify-center px-4 py-6 my-10 text-3xl font-semibold'>
                <h1 className='chap2'>Part 2 </h1>
            </div>
            <div className='p-4 rounded bg-gradient-to-r from-orange-400 via-red-500 to-pink-500'>
                <div className='flex items-center justify-between gap-5'>
                    <img src={omg2} alt="casc" className='mx-4 mb-4 w-96 h-80'/>
                    <h3 className='px-3 text-xl font-semibold'
                    > Bueno se que te preguntarás como asi decidi hacer esta pagina , bueno pues te cuento , yo estaba de lo
                    mas tranquilo estudiando de madrugada hasta que me di cuenta que era tu cumple , pues me puse a pensar
                    en lo que te iba a regalar , asi que como queria ser un poco original cree esta web , se que no es la gran 
                    cosa , pero lo hice con mucho esfuerzo , me tarde horas .. pero esto no es todo ya que este es mi regalo virtual
                    solo falta el fisico que eso sera una sorpresa , me dare un tiempito y te visitaré para poder dartelo :3 
                     
                    </h3>
                </div>                  
            </div>
            <div className='flex items-center justify-center px-4 py-6 my-10 text-3xl font-semibold'>   
                <h1 className='chap3'>Part 3 </h1> 
            </div>
            <UbicationAbout/>
            <div  className='burbujas'>
                <div className='burbuja'></div>
                <div className='burbuja'></div>
                <div className='burbuja'></div>
                <div className='burbuja'></div>
                <div className='burbuja'></div>
                <div className='burbuja'></div>
                <div className='burbuja'></div>
                <div className='burbuja'></div>
                <div className='burbuja'></div>
                <div className='burbuja'></div>
                <div className='burbuja'></div>
            </div>
            <div className='amores1'>
                <div className='amor'></div>
                <div className='amor'></div>
                <div className='amor'></div>
                <div className='amor'></div>
                <div className='amor'></div>
                <div className='amor'></div>
                <div className='amor'></div>
                <div className='amor'></div>
                <div className='amor'></div>
                <div className='amor'></div>   
            </div>

            <div>
                Gracias Totales !!
            </div>
            <div className='loves1'>
                <div className='love'></div>
                <div className='love'></div>
                <div className='love'></div>
                <div className='love'></div>
                <div className='love'></div>
                <div className='love'></div>
                <div className='love'></div>
                <div className='love'></div>
                <div className='love'></div>
                <div className='love'></div>
                <div className='love'></div>
                <div className='love'></div> 
                <div className='love'></div>
                <div className='love'></div> 
                <div className='love'></div>
                <div className='love'></div>  
                <div className='love'></div>
                <div className='love'></div> 
                <div className='love'></div>
                <div className='love'></div> 
                <div className='love'></div>
                <div className='love'></div>  
            </div>
        </section>

    )
}

export default About