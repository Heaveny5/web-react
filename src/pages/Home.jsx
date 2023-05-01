//import{Link} from 'react-router-dom'
//import imagen from '../components/img/beans.png'

//import imagen from '../components/img/arbol.png'
//import imagen1 from '../components/img/img1.jpg'
import img1 from '../components/img/3f45.svg'
import img2 from '../components/img/94tl.svg'
import { Link } from 'react-router-dom'
import Card from '../components/cards-about-H'
import img3 from '../components/img/b9ay.svg'
const Home =()=>{
    return(
        <main className='flex mx-8 place-content-center'>
            <div className='container px-4 py-4 '>
                <section className="relative text-center md:text-left lg:pb-24">
                    <h2 className="pt-4 pb-3 pl-2 text-4xl font-extrabold text-transparent pr-4mb-4 bg-gradient-to-b from-blue-600 via-red-500 to-purple-600 bg-clip-text mb-text-4xl 2xl:text-8xl lg:text-6xl md:pt-32 lg:mb-16 xl:text-6xl">Buen Feliz<br/>
                          Cumpleaños! 💚💚
                    </h2>
                    <div className='inline-flex flex-col pb-2 pl-2 text-center'>
                        <Link to='/about' className='px-6 py-2 mb-1 text-xl font-semibold text-white transition bg-purple-600 lg:text-4xl rounded-3xl ring-transparent focus:outline-none hover:bg-rose-300'>
                                ¡Click me 👉👈! 
                        </Link> 
                    </div>
                    <div className='flex items-center justify-center w-auto lg:pb-26 lg:pr-20 lg: md:absolute md:bottom-4 md:right-0 md:w-3/6 md:pl-10 md:pt-8'>
                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="400" height="350" viewBox="0 0 821 708">
                            <circle cx="115.17708" cy="394.03053" r="110.8529" fill="#f0f0f0"/>
                            <polygon points="115.481 394.03 115.786 394.03 121.268 708.317 109.695 708.317 115.481 394.03" fill="#f0f0f0"/>
                            <circle cx="353.17708" cy="479.08542" r="80.8529" fill="#f0f0f0"/>
                            <polygon points="353.399 479.085 353.622 479.085 357.62 708.317 349.179 708.317 353.399 479.085" fill="#f0f0f0"/>
                            <circle cx="251.34852" cy="183.97567" r="183.97568" fill="#6c63ff"/>
                            <path d="M576.69023,156.93609A183.99,183.99,0,0,1,270.13237,351.65056,183.99152,183.99152,0,1,0,576.69023,156.93609Z" transform="translate(-189.5 -95.84172)" opacity="0.1" />
                            <polygon points="250.843 183.975 250.337 183.975 241.239 705.577 260.446 705.577 250.843 183.975" fill="#3f3d56"/>
                            <path d="M1009.5,803.99213h-819a1,1,0,0,1,0-2h819a1,1,0,0,1,0,2Z" transform="translate(-189.5 -95.84172)" fill="#cacaca"/>
                            <polygon points="676.812 698.025 667.014 698.025 662.353 660.235 676.813 660.235 676.812 698.025" fill="#ffb6b6"/>
                            <path d="M868.81009,803.36371l-31.59074-.00117V802.963a12.29667,12.29667,0,0,1,12.296-12.29581h.00078l19.29454.00079Z" transform="translate(-189.5 -95.84172)" fill="#2f2e41"/>
                            <polygon points="722.243 698.025 712.446 698.025 707.785 660.235 722.245 660.235 722.243 698.025" fill="#ffb6b6"/>
                            <path d="M914.242,803.36371l-31.59074-.00117V802.963a12.29667,12.29667,0,0,1,12.296-12.29581h.00078l19.29454.00079Z" transform="translate(-189.5 -95.84172)" fill="#2f2e41"/>
                            <polygon points="557.784 698.025 567.582 698.025 569.4 660.031 557.783 660.235 557.784 698.025" fill="#ffb6b6"/>
                            <path d="M744.78515,790.668l19.29454-.00079h.00078a12.29667,12.29667,0,0,1,12.296,12.29581v.39957l-31.59074.00117Z" transform="translate(-189.5 -95.84172)" fill="#2f2e41"/>
                            <polygon points="518.178 698.025 527.975 698.025 529.917 660.031 518.176 660.235 518.178 698.025" fill="#ffb6b6"/>
                            <path d="M705.17862,790.668l19.29455-.00079h.00078a12.29665,12.29665,0,0,1,12.296,12.29581v.39957l-31.59073.00117Z" transform="translate(-189.5 -95.84172)" fill="#2f2e41"/>
                            <path d="M792.49519,633.7537a6.95334,6.95334,0,0,1,5.15125-9.33521l33.45079-53.77655,11.30407,10.04373-36.43555,49.70239a6.991,6.991,0,0,1-13.47056,3.36564Z" transform="translate(-189.5 -95.84172)" fill="#ffb6b6"/>
                            <path d="M945.37762,653.65739a6.95335,6.95335,0,0,1-2.95851-10.24347l-14.3725-61.679,15.09518-.8912,9.38109,60.90872a6.991,6.991,0,0,1-7.14526,11.905Z" transform="translate(-189.5 -95.84172)" fill="#ffb6b6"/>
                            <path d="M803.11589,631.10029a7.76735,7.76735,0,0,0-9.38808-7.32929l-14.30492-23.60646-6.14852,12.95905,14.52683,20.43034a7.80942,7.80942,0,0,0,15.31469-2.45364Z" transform="translate(-189.5 -95.84172)" fill="#ffb6b6"/>
                            <path d="M683.57965,655.79246a7.76728,7.76728,0,0,0-2.89185-11.55386l3.24622-27.41091-12.82,6.43346-1.11721,25.04354a7.80942,7.80942,0,0,0,13.58283,7.48777Z" transform="translate(-189.5 -95.84172)" fill="#ffb6b6"/>
                            <polygon points="669.045 532.184 664.89 540.624 661.618 684.032 682.995 685.598 703.056 580.422 707.894 684.032 725.474 684.2 744.491 542.896 669.045 532.184" fill="#2f2e41"/>
                            <path d="M753.02907,628.02536l6.938,4.10989s5.63744,3.58848,3.74167,28.54894-4.1612,124.96286-4.1612,124.96286h-12.298L727.332,666.18849l-7.26757,120.75309-12.94529-.64727s-26.44866-137.47748-15.00431-152.3977Z" transform="translate(-189.5 -95.84172)" fill="#2f2e41"/>
                            <path d="M857.02584,524.74755l23.35191-7.79306,28.67382.42072,19.50908,7.7866,5.43,113.57551s-42.6883,25.57309-79.60059-2.272Z" transform="translate(-189.5 -95.84172)" fill="#e4e4e4"/>
                            <path d="M857.02584,523.74755s-9.21326-1.07941-14.34806,14.21148-18.71461,35.97744-18.71461,35.97744l14.85374,13.92911,29.70941-41.203Z" transform="translate(-189.5 -95.84172)" fill="#e4e4e4"/>
                            <path d="M921.314,527.30721l7.24666-2.1454s16.41287,2.18769,17.06783,19.84512,3.75814,45.29162,3.75814,45.29162l-16.74071,3.33738Z" transform="translate(-189.5 -95.84172)" fill="#e4e4e4"/>
                            <path d="M687.92756,539.69291s33.73958-10.84665,60.96153-.73388l-2.22859,52.50862L763.452,632.42651s-53.38238,20.70711-71.172,3.30487l5.18831-41.02741Z" transform="translate(-189.5 -95.84172)" fill="#6c63ff"/>
                            <path d="M739.81876,545.12585l7.07033-6.16682s4.71624-.0558,8.77491,7.20009,11.41175,30.67693,11.41175,30.67693L790.61629,616.711l-10.35623,7.11991L742.92463,571.616Z" transform="translate(-189.5 -95.84172)" fill="#6c63ff"/>
                            <path d="M689.17922,542.282l.4822-3.28983s-13.14616.9726-14.25824,13.63964-5.17812,84.1444-5.17812,84.1444l13.0035,2.58906,12.93576-73.361Z" transform="translate(-189.5 -95.84172)" fill="#6c63ff"/>
                            <circle cx="707.08234" cy="388.83262" r="21.818" fill="#ffb6b6"/>
                            <path d="M734.75393,520.71534l-39.4407,7.76648a3.12234,3.12234,0,0,1-3.66262-2.45748L688.303,509.024a23.21786,23.21786,0,1,1,45.5608-8.97163l3.34762,17.0003A3.12234,3.12234,0,0,1,734.75393,520.71534Z" transform="translate(-189.5 -95.84172)" fill="#2f2e41"/>
                            <circle cx="526.84795" cy="410.73752" r="17.02252" fill="#ffb6b6"/>
                            <path d="M739.58785,500.6912l-24.117,4.749-.92918-3.41378-.55469,3.706-3.71351.73125-1.84142-6.766-1.09943,7.34514-7.18545,1.41493-.067-.34a18.387,18.387,0,0,1,14.47167-21.56876l3.40023-.66956a18.38715,18.38715,0,0,1,21.5688,14.47184Z" transform="translate(-189.5 -95.84172)" fill="#2f2e41"/>
                            <path d="M719.51378,527.01286a3.18609,3.18609,0,0,1-.551.05882l-18.27312.36161-5.74719-29.18606,19.43978-3.828-.37079.65592c-5.15838,9.1281,2.38,20.79793,7.33263,26.94167a3.07265,3.07265,0,0,1,.39072,3.248A3.10627,3.10627,0,0,1,719.51378,527.01286Z" transform="translate(-189.5 -95.84172)" fill="#2f2e41"/>
                            <path d="M875.35076,465.00527c2.66649-.82184,5.54884-.41422,8.27191.195l-.26043.66133c6.50236-3.76835,14.24109-5.85284,21.61637-4.40926,7.37559,1.44355,14.17313,6.87853,15.95785,14.17883a21.73453,21.73453,0,0,1,.11726,8.87137A31.13187,31.13187,0,0,1,906.715,505.48463c-.93455.566-2.376.97023-2.92849.02754-.627-1.07077.78822-2.15821,
                                1.21046-3.32505.46206-1.27695-.37831-2.69356-1.46994-3.50145s-2.42282-1.22745-3.56438-1.96317a10.1347,10.1347,0,0,1-4.12726-7.0424,30.03737,30.03737,0,0,1,.255-8.37738,43.44845,43.44845,0,0,1-13.66556,2.62674,9.97237,9.97237,0,0,1-4.84248-.76542c-1.95918-.99863-3.13993-3.02473-4.21291-4.94417q-.67413-1.20561-1.34794-2.41124a10.23381,10.23381,0,0,1-1.70887-4.82825C870.31329,468.19,872.684,465.82711,875.35076,465.00527Z" transform="translate(-189.5 -95.84172)" fill="#2f2e41"/>
                        </svg>
                    </div>
                </section>
                <section className='flex flex-col gap-8 mt-28'>
                    <Card title={"Gracias "} 
                     content1={"😊👇"}
                     src={img2}
                     content2={"eres un persona maravillosa , estoy feliz de haberte conocido espero y en algun momento podamos charlar de la vida y conocernos mas a fondo"}/>
                    <Card title={"Responsable"}
                        content1={"😊👇"}
                        src={img1}
                        content2={"De las pocas personas que una enorme dedicación a lo que hace y se que te estas esforzando mucho estudiando  , se que lograras cumplir tus metas estudia mucho por que sino me enojo xdxd."}/> 
                    <Card title={"Hermosa de fisico y corazón"}
                        content1={"😊👇"}
                        src={img3}
                        content2={"Que puedo decir de su fisico, pues como toda mujer debes ser muy hermosa , pero lo promordial es que eres una muy buena persona  la vida te recompensara por eso...."}/>
                </section>
            </div>
        </main>
    )
}
export default Home
