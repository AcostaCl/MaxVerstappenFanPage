import { Container, Row, Col } from "react-bootstrap";
import Biografia from "../pages/Biografia";
import Slider from "../pages/Slider";
const Inicio = () => {
  return (
    <div className="verstappen-app">
      <section className="hero-banner">
        <div className="hero-overlay">
          <Container className="hero-content">
            <Row className="align-items-center min-vh-80">
              <Col lg={8} className="text-center text-lg-start">
                <h1 className="hero-title">
                  <span className="hero-title-main">MAX</span>
                  <span className="hero-title-last">VERSTAPPEN</span>
                </h1>
                <h2 className="hero-subtitle">EL HOLANDÉS VOLADOR</h2>
                <p className="hero-text">TETRACAMPEÓN MUNDIAL DE FÓRMULA 1</p>
              </Col>
              <Col lg={4} className="d-none d-lg-block">
                <div className="hero-number">
                  <span>1</span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="content-section py-5 bg-black">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="section-title text-light">
                EL FENÓMENO VERSTAPPEN
              </h2>
              <p className="section-text text-light">
                Max Emilian Verstappen, el piloto más joven en competir en la
                Fórmula 1, ha redefinido lo que significa ser un campeón. Con su
                estilo agresivo pero calculado, ha dominado la era híbrida de la
                F1 estableciendo nuevos récords.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="stats-section py-5" id="estadisticas">
        <Container>
          <Row className="text-center">
            <Col md={3} className="stat-item">
              <h3>4</h3>
              <p>Títulos Mundiales</p>
            </Col>
            <Col md={3} className="stat-item">
              <h3>3160.5</h3>
              <p>Puntos</p>
            </Col>
            <Col md={3} className="stat-item">
              <h3>65</h3>
              <p>Victorias</p>
            </Col>
            <Col md={3} className="stat-item">
              <h3>116</h3>
              <p>Podios</p>
            </Col>
          </Row>
        </Container>
      </section>
      <Biografia></Biografia>
      <Slider></Slider>
      <section className="model-container bg-black p-4">
        <h2 className="section-title">MAX VERSTAPPEN 2022 - LOW POLY MODEL</h2>
        <div className="sketchfab-embed-wrapper">
          <iframe
            title="Max Verstappen 2022 Low Poly Model"
            src="https://sketchfab.com/models/5989af56caa94240a6b6b195188b65b5/embed?autostart=1&ui_controls=1"
            width="100%"
            height="500px"
            allow="autoplay; fullscreen; vr"
            allowFullScreen
          ></iframe>
          <p className="model-credits">
            <a
              href="https://sketchfab.com/3d-models/f1-max-verstappen-2022-low-poly-game-model-5989af56caa94240a6b6b195188b65b5"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </p>
        </div>
      </section>
      <footer className="footer bg-black text-white py-1">
        <Container>
          <Row>
            <Col className="text-center ">
              <p className="footer-copyright mt-3">
                &copy; {new Date().getFullYear()} Max Verstappen Fan Page. No
                afiliado a Red Bull Racing.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Inicio;
