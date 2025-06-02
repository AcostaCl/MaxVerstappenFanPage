import "../styles/slider.css";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <section className="verstappen-slider" id="galeria">
      <div className="slider-header">
        <h3 className="section-title">GALERÍA DEL CAMPEÓN</h3>
      </div>

      <Carousel fade indicators={false} interval={5000}>
        <Carousel.Item>
          <div className="media-container">
            <img
              className="d-block"
              src="https://media.formula1.com/image/upload/f_auto/q_auto/v1685115159/fom-website/2023/Monaco/verstappen-monaco-practice.png"
              alt="Max celebrando victoria"
            />
            <div className="media-caption">
              <h5>VICTORIA EN MONACO 2023</h5>
              <p>Dominio absoluto en el circuito más icónico</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="media-container">
            <img
              className="d-block"
              src="https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2024/4/7/l6dfh75z9nnwlrvjuumm/max-verstappen-sergio-perez-japon-gran-premio-2024"
              alt="Max en el podio"
            />
            <div className="media-caption">
              <h5>PODIO EN JAPÓN 2024</h5>
              <p>Celebrando otra victoria en suelo asiático</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="media-container">
            <img
              className="d-block"
              src="https://s3.sportstatics.com/relevo/www/multimedia/202303/17/media/cortadas/max-verstappen-pit-stop-reuters-RcwBcWzZsMP5bKj59ryN6zJ-1200x648@Relevo.JPG"
              alt="Max en boxes"
            />
            <div className="media-caption">
              <h5>PRECISIÓN EN PITS</h5>
              <p>El trabajo en equipo que lleva a la victoria</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Slider;
