import React from 'react'

//Implementación de un carrusel de imagenes para el inicio sacado desde: https://getbootstrap.com/docs/5.2/components/carousel/
//Es importante que al ocupar estos ejemplos cambiemos todos los class por className y cerremos las etiquetas de imagen, porque no vienen implementadas con esot

function Carrusel() {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./imagenes/01.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="./imagenes/02.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="./imagenes/03.jpg" className="d-block w-100" alt="..."/>
            </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carrusel