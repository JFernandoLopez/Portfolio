export default function Carousel({ id, array, openModal, modalOpen }){
    return (
        <div className="row">
      <div className="col">
        <div id={id} className="carousel slide">
          <div className="carousel-inner rounded">
            {array?.map((image, index) => (
              <div
                key={`b${index}`}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <img
                  src={image}
                  className="d-block w-100 img-fluid"
                  alt={`${image}`}
                  onClick={() => openModal(image)}
                  style={{minWidth: '300px'}}
                />
              </div>
            ))}
          </div>
          {!modalOpen && (
            <>
              <button
                className="carousel-control-prev"
                style={{background: 'rgba(0, 0, 0, 0.4)'}}
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                style={{background: 'rgba(0, 0, 0, 0.4)'}}
                type="button"
                data-bs-target={`#${id}`}
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
    )
}