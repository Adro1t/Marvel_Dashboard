import React from "react";

/**
 * The Carousel component displays a carousel with images.
 */
const Carousel = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item">
            <img src="./images/Carousel/2.jpeg" className="d-block w-100" alt="1" />
          </div>
          <div className="carousel-item">
            <img src="./images/Carousel/1.jpg" className="d-block w-100" alt=" 2" />
          </div>
          <div className="carousel-item active">
            <img src="./images/Carousel/3.png" className="d-block w-100" alt="3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
