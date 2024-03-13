import React, {useState, useEffect} from 'react'
import Modal from 'react-modal'
import Carousel from './components/Carousel'
import OffCanva from './components/OffCanva'
import * as bootstrap from 'bootstrap'
import './scss/styles.scss'

export default function App(){
    const imageTechnook = ['landingTechnook.png', "Login.png", "MyInfo.png", "shoppingCart.png", "BeforePay.png", "MercadoPago.png", "AdminPanel.png", "Stadistics.png", "Stadistics2.png", "Stadistics3.png"]
    const imagePokemon = ["pokemonLanding.png", "principalView.png", "pokemonCreator.png", "Electric.png"]
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [myArray, setMyArray] = useState([]);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    const modalSelect = () => {
        setSelectedImage(null);
        setModalOpen(false);
    };

    useEffect(()=>{
        imageTechnook.includes(selectedImage) ?
        setMyArray([...imageTechnook])
        : setMyArray([...imagePokemon])
    },[modalOpen])

    const appElement = React.useMemo(() => document.getElementById('root'), [])

    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
        },
        content: {
            background: 'rgba(0, 0, 0, 0)',
            border: '1px solid rgba(0, 0, 0, 0)',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            maxWidth: '100%',
            margin: 'auto',
            maxHeight: '100%',
        },
    };

    return (
    <div id='root' className='d-flex m-4 p-4 '>
        {!modalOpen && (<div className='d-flex'>
        <OffCanva/>
        </div>)}
        {!modalOpen && <nav className='navbar navbar-expand-lg bg-transparent fixed-top p-4 ml-auto'>
            <div className='container-fluid'>
                <ul className='navbar-nav ms-auto mb-2 mb-lg-0 list-group list-group-flush fs-5' >
                <li className='nav-item list-group-item bg-transparent'><a className='navbar-link link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover shadow' href='#'>Start</a></li>
                <li className='nav-item list-group-item bg-transparent'><a className='navbar-link link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover shadow' href='#Experience'>Experience</a></li>
                <li className='nav-item list-group-item bg-transparent'><a className='navbar-link link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover shadow' href='#Projects'>Projects</a></li>
                <li className='nav-item list-group-item bg-transparent'><a className='navbar-link link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover shadow' href='#AboutMe'>About Me</a></li>
                <li className='nav-item list-group-item bg-transparent'><a className='navbar-link link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover shadow' data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Contact Me</a></li>
                <li className='nav-item list-group-item bg-transparent'></li>
                </ul>
            </div>
        </nav>}
    <div className='container my-4 py-4'>
    <div className='container'>
        <div className='row gutters-2 py-4 my-3 px-5'>
            <div className='col align-self-center' id='technologies'>
                <h1 className='display-4 w-100 text-center'>Hello World!, I'm José Fernando López Bernal</h1>
                <h5 className='fs-4 my-3 py-3 text-center'>Full Stack Developer with web development experience and a degree on Petrochemical Engineer by UAEMex "Universidad Autónoma del Estado de México"<br/><img src='Flag_of_Mexico.svg' alt='Mexican' width='25px'></img></h5>
            </div> 
            <table className='col text-center p-5 table table-hover table-responsive'>
                <tbody>
                <tr>
                <td className='text-center badge text-bg-light mx-5 my-1'><img src='logo-javascript.svg' alt='Javascript' width='40px'/></td>
                <td className='text-center badge text-bg-light mx-5 my-1'><img src='nodejs-icon.svg' alt='Node.js' width='40px'/></td>
                </tr>
                <tr>
                <td className='text-center badge text-bg-light mx-5 my-1'><img src='html-1.svg' alt='HTML' width='40px'/></td>
                <td className='text-center badge text-bg-light mx-5 my-1'><img src='css-3.svg' alt='CSS' width='40px'/></td>
                </tr>
                <tr>
                <td className='text-center badge text-bg-light mx-5 my-1'><img src='react-2.svg' alt='React' width='40px'/></td>
                <td className='text-center badge text-bg-light mx-5 my-1'><img src='TS.svg' alt='TypeScript' width='40px'/></td>
                </tr>
                <tr>
                <td className='text-center badge text-bg-light mx-5 my-1'><img src='next-js.svg' alt='Next.js' width='40px'/></td>
                <td className='text-center badge text-bg-light mx-5 my-1'><img src='postgresql.svg' alt='PostgreSQL' width='40px'/></td>
                </tr>
                <tr>
                <td className='text-center badge text-bg-light mx-5 my-1'><img src='express-109.svg' alt='Express' width='60px'/></td>
                <td className='text-center badge text-bg-light mx-5 my-1'><img src='bootstrap-5.svg' alt='Bootstrap' width='60px'/></td>
                </tr>
                <tr>
                <td className='text-center badge text-bg-light mx-5 my-1'><img src='vitejs.svg' alt='Vite' width='40px'/></td>
                <td className='text-center badge text-bg-light mx-5 my-1'><img src='jest-2.svg' alt='Jest' width='40px'/></td>
                </tr>
                </tbody>
            </table> 
        </div>
        <div className='my-5 py-5' id='Experience'>
            <h3 className="my-3 py-3 display-5">Experience</h3>
            <div className="accordion" id='experience'>
                <div className='accordion-item'>
                    <h2 className='accordion-header'>
                        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#henry' aria-expanded='true' aria-controls='henry' >
                        <h4 className='henry'>Henry</h4>
                        <p>November 2023 - Today</p>
                        </button>
                    </h2>
                    <div id='henry' className='accordion-collapse collapse'>
                        <div className='accordion-body'>
                        <p>Full Stack Developer</p>
                        <ul className='activites'>
                            <li>Integration of the Auth0 library for third-party authentication.</li>
                            <li>Development of HTTP request microservices interacting with thedatabase through CRUD operations using an ORM.</li>
                            <li>Implementation of conditional rendering logic on the frontend based on the type of authenticated user.</li>
                            <li>Dynamic application of styles to components and pages, adapted tospecific system conditions.</li>
                            <li>Information caching.Form validation and development.</li>
                            <li>User banning within the application environment.</li>
                            <li>Logical deletion in the database for products and users.</li>
                            <li>Route protection.</li>
                            <li>Design of a single Landing application.</li>
                            <li>Consumption of a public API on the backend to perform queries based on identifiers or other attributes associated with each artifact.</li>
                            <li>Implementation of card pagination on Landing Page.</li>
                            <li>Implementation of a Navigate Bar with a search bar that consumes a search service in a public API and the database simultaneously.</li>
                            <li>Implementation of routes for rendering different components.</li>
                            <li>Form validation and development.</li> 
                            <li>Implementation of a relational database.</li>
                            <li>Implementation of Redux with concurrent processes that interact directly with microservices on the backend.</li>
                            <li>Artifact filters in the Navigate Bar.</li>                             
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='accordion-item'>
                    <h2 className='accordion-header'>
                        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#bbm' aria-expanded='true' aria-controls='bbm' >
                        <h4 className= 'bbm'>BBM Advance</h4><p>February 2022 - August 2023</p>
                        </button>
                    </h2>
                    <div id='bbm' className='accordion-collapse collapse'>
                        <div className='accordion-body'>
                            <p>Engineer Consultor Jr.</p>
                            <ul className='activites'>
                            <li>Project to implement an agile methodology in a waste treatment company.</li>
                            <li>Design of a security system based on DuPont's STOP program to prevent accidents.</li>
                            <li>Participation in ISO 14001 certification and two ISO 9001 certifications for two plants.</li>
                            <li>Optimization of incineration equipment.</li>
                            <li>Annual budget of a company: Expenses, sales (by site and by service), and costs.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='accordion-item'>
                    <h2 className='accordion-header'>
                        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#cciqs' aria-expanded='true' aria-controls='cciqs' >
                        <h4 style={{paddingRight: '3rem'}}>CCIQS</h4>
                        <p>May 2019 - October 2019</p>
                        </button>
                    </h2>
                    <div id='cciqs' className='accordion-collapse collapse'>
                        <div className='accordion-body'>
                            <p>Research intern</p>
                            <ul className='activites'>
                            <li>Laboratory and research assistant in the Membrane Laboratory.</li>
                            <li>Powder diffraction.</li>
                            <li>Infrared spectroscopy.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container d-flex flex-wrap my-5 py-5' id='Projects'>
                <h3 className='display-5'>Projects</h3>
                <div className='d-flex row '>
                <h4 className='text-center py-2 my-4'><a className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover' href='https://technookstore.up.railway.app/'>TechNook:</a></h4>
                    <div className='container d-flex flex-wrap'>
                    <p className='m-5 fs-5 mr-4 text-end mt-sm-0 mb-lg-5 text-sm-start' style={{ flex: '1' }}>Technology e-commerce with third authentication, shop car, mercado pago, stadistics dashboard, database connection, deploy, reviews, logic erase, bann, update-delete users and products.
                    </p>
                    <div className='TechnookCarousel' style={{ flex: '1' }}>
                    <Carousel id='carouselTechnook' array={imageTechnook} openModal={openModal} modalOpen={modalOpen}/>
                    </div>
                    </div>
                    <h4 className='text-center text-center py-2 my-4'><a className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover' href='https://github.com/JFernandoLopez/PI-Pokemon'>Project API Rest:</a></h4>
                    <div className='container d-flex flex-wrap'>
                    <p className='m-5 fs-5 mr-4 text-end mt-sm-0 mb-lg-5 text-sm-end' style={{ flex: '1' }}>Pokemon full stack application whose communicate with a public API, back end have API Rest, so is a searchig artefacts services with services that make posible create new artifacts with same structure like the API, front end has filters, a searchbar, a sepecification section for any pokemon (artifact)
                    </p>
                    <div className='PokemonCarrousel' style={{ flex: '1' }}>
                    <Carousel id='carouselPokemon' array={imagePokemon} openModal={openModal} modalOpen={modalOpen}/>
                    </div>
                    </div>
                </div>

                    <Modal
                        isOpen={modalOpen}
                        onRequestClose={modalSelect}
                        contentLabel='Image Modal'
                        appElement={appElement}
                        style={customStyles}
                        >
                        {selectedImage && (
                        <div className='containter inline-text text-end'>
                            <button onClick={modalSelect} className='m-2 btn btn-outline-danger fixed-top '>Cerrar</button>
                            <div id='carouselZoom' className="carousel slide my-5">
                            <div className="carousel-inner rounded" style={{minWidth: '400px'}}>
                            {myArray?.map((image, index) => image === selectedImage ? 
                            (<div key={`b${index}`} className='carousel-item active'>
                            <img src={image} className="d-block w-100 px-2 img-fluid" alt={`${image}`} key={`${image}${index}`} onClick={() => openModal(image)} style={{minWidth: '400px'}}/>
                            </div>)
                            : (
                                <div key={`b${index}`} className='carousel-item'>
                                <img src={image} className="d-block w-100 px-2 img-fluid" alt={`${image}`} key={`${image}${index}`} onClick={() => openModal(image)}  style={{minWidth: '400px'}}/>
                                </div>
                            ))}
                            </div>
                            {<button className="carousel-control-prev" type="button" data-bs-target='#carouselZoom' data-bs-slide="prev" style={{background: 'rgba(0, 0, 0, 0.4)'}}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                            </button>}
                            {<button className="carousel-control-next" type="button" data-bs-target='#carouselZoom' data-bs-slide="next" style={{background: 'rgba(0, 0, 0, 0.4)'}}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                            </button>}
                            </div>
                        </div>
                    )}
                    </Modal>
                </div>
        <div className='container d-flex flex-wrap my-5 py-5' id='AboutMe'>
            <h3 className='text-center text-light p-5 my-3 mx-5 w-100 align-self-center display-5'>Some About Me</h3>
            <p className='p-1 m-1 fs-5 align-self-center text-start lh-lg' >Full Stack Developer with experience creating projects using React.js, Node.js, HTML/CSS, along with various libraries and frameworks. Proficient in collaborative work, autonomous in personal projects, and quick learner.<br/><br/>
            I've worked on quality systems implementation, where I developed teamwork skills and learned to work following agile methodologies such as Scrum. Both certifications were successfully aprobed.<br/>
            </p>
        </div>
    </div>
    </div>
    </div>)
}