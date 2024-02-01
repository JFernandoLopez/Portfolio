import Form from "./From";

export default function OffCanva(){
    return(
        <div>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">Contact:</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"/>
        </div>
        <div className="offcanvas-body">
            <p className="text-center">Send me a mail to: <a href="mailto:fernandojlb@outlook.es" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">fernandojlb@outlook.es</a></p>
            <div className="p-4 m-4">
            If you want to leave a message, <a href="#collapseForm" data-bs-toggle="collapse" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Please click on here...</a>
            </div>
            <div className="p-4 m-4 text-center">
            <a className='px-2' href='https://www.linkedin.com/in/jos%C3%A9-fernando-l%C3%B3pez-bernal-254a53260/' style={{ textDecoration: 'none' }}>
                <img src='icons8-linkedin-144.png' width='50px' alt='LinkedIn'/>
            </a>
            <a className='px-2' href='https://github.com/JFernandoLopez' style={{ textDecoration: 'none' }}>
                <img src='github-mark.svg' width='50px' alt='gitHub'/>
            </a>
            <p className="d-inline-flex gap-1">
            <a href='CV-JFernandoLópezB-Eng.rar' className="btn btn-transparent px-2 py-0" style={{ textDecoration: 'none' }} download>
                <img src="CV.svg" alt="CV" width='50px'/>
            </a>
            </p>
            <p className="d-inline-flex gap-1">
                <a className="btn btn-transparent px-2" data-bs-toggle="collapse" href="#collapseForm" role="button" aria-expanded="false" aria-controls="collapseExample" style={{ textDecoration: 'none' }}>
                    <img src="icons8-correo-de-manzana-150.png" alt="fernandojlb@outlook.es" width='50px'/>
                </a>
                </p>
                <div className="collapse" id="collapseForm">
                <div className="card card-body">
                    <Form/>
                </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}