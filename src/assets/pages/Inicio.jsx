
import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router";
const Inicio = () => {
  return (
    <div className="verstappen-app">
      {/* Hero Banner with Image Background */}
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

      {/* Content Section */}
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

      {/* Stats Section */}
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
      <section className="verstappen-bio" id="biografia">
        <Container>
          {/* Encabezado */}
          <div className="title-container">
            <h1 className="main-title">MAX</h1>
            <h2 className="subtitle">VERSTAPPEN</h2>
            <p className="nickname">BIOGRAFIA</p>
            <div className="divider"></div>
            <p className="tagline">TRIPLE CAMPEÓN MUNDIAL DE FÓRMULA 1</p>
          </div>

          {/* Biografía */}
          <Row className="mb-5">
            <Col>
              <h3 className="section-title">EL FENÓMENO VERSTAPPEN</h3>
              <p className="bio-text">
                Max Emilian Verstappen (Hasselt, Bélgica, 30 de septiembre de
                1997) es el prodigio que revolucionó la Fórmula 1. Hijo del
                expiloto Jos Verstappen y la kartista Sophie Kumpen, la gasolina
                corre por sus venas desde la cuna.
              </p>

              <h4 className="subsection-title">Inicios en el Karting</h4>
              <p className="bio-text">
                A los 4 años ya competía en karts. Con 7 años ganó su primer
                campeonato regional. Dominó el karting europeo entre 2006-2013,
                consiguiendo múltiples títulos incluyendo el Campeonato Mundial
                de Karting KZ en 2013.
              </p>

              <h4 className="subsection-title">Ascenso meteórico</h4>
              <p className="bio-text">
                Saltó a monoplazas en 2014 con el equipo Van Amersfoort Racing
                en Fórmula 3 Europea. En su primera temporada logró 10
                victorias, 7 poles y 16 podios. Para 2015, Red Bull lo fichó
                para su academia de jóvenes talentos.
              </p>
            </Col>
          </Row>

          {/* Línea de tiempo */}
          <Row>
            <Col>
              <h3 className="section-title text-center">LÍNEA DE TIEMPO</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-year">2014</div>
                  <div className="timeline-content">
                    <h5>Debut en Fórmula 3</h5>
                    <p>Gana el Premio Rookie del año con 10 victorias</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-year">2015</div>
                  <div className="timeline-content">
                    <h5>Debut en F1 con Toro Rosso</h5>
                    <p>
                      Con 17 años, se convierte en el piloto más joven en
                      debutar
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-year">2016</div>
                  <div className="timeline-content">
                    <h5>Primera victoria</h5>
                    <p>Gana el GP de España con Red Bull a los 18 años</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-year">2021</div>
                  <div className="timeline-content">
                    <h5>Primer título mundial</h5>
                    <p>
                      Campeón en la última vuelta del controvertido GP de Abu
                      Dabi
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-year">2022</div>
                  <div className="timeline-content">
                    <h5>Dominio absoluto</h5>
                    <p>
                      Gana el título con 4 carreras de antelación y 15 victorias
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-year">2023</div>
                  <div className="timeline-content">
                    <h5>Récord histórico</h5>
                    <p>
                      10 victorias consecutivas y 19 en total en una temporada
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-year">2024</div>
                  <div className="timeline-content">
                    <h5>Reto regulatorio</h5>
                    <p>
                      Domina a pesar de cambios técnicos para limitar a Red Bull
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-year">2025</div>
                  <div className="timeline-content">
                    <h5>Cuarto título en juego</h5>
                    <p>
                      Lidera el campeonato con nuevo RB20 y rivalidad con
                      Leclerc
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Era Red Bull */}
          <Row className="mt-5">
            <Col>
              <h4 className="subsection-title">La era Red Bull</h4>
              <p className="bio-text">
                Desde 2016 forma parte de Red Bull Racing. Su asociación con el
                ingeniero Gianpiero Lambiase y el diseño de Adrian Newey ha
                creado una máquina imbatible. En 2023 alcanzó un dominio sin
                precedentes con 19 victorias en 22 carreras.
              </p>

              <h4 className="subsection-title">Estilo y legado</h4>
              <p className="bio-text">
                Conocido por sus adelantamientos agresivos y su habilidad bajo
                la lluvia, Verstappen ha redefinido el estándar del piloto
                moderno. Su rivalidad con Lewis Hamilton marcó una era, y su
                dominio posterior ha establecido nuevos récords que podrían
                durar décadas.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white py-5">
        <Container>
          <Row>
            <Col md={4} className="mb-4 mb-md-0">
              <h5 className="footer-title">MAX VERSTAPPEN</h5>
              <p className="footer-text">
                Sitio fan no oficial dedicado al tricampeón del mundo de Fórmula
                1.
              </p>
            </Col>
            <Col md={4} className="mb-4 mb-md-0">
              <h5 className="footer-title">ENLACES RÁPIDOS</h5>
              <ul className="footer-links">
                <li>
                  <a href="#home">Inicio</a>
                </li>
                <li>
                  <a href="#stats">Estadísticas</a>
                </li>
                <li>
                  <a href="#gallery">Galería</a>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h5 className="footer-title">SIGUE A MAX</h5>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-4">
              <p className="footer-copyright">
                &copy; {new Date().getFullYear()} Max Verstappen Fan Page. No
                afiliado a Red Bull Racing.
              </p>
            </Col>
          </Row>
          <div className="model-container">
            <h2>MAX VERSTAPPEN 2022 - LOW POLY MODEL</h2>
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
                Modelo 3D por{" "}
                <a
                  href="https://sketchfab.com/3d-models/f1-max-verstappen-2022-low-poly-game-model-5989af56caa94240a6b6b195188b65b5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sketchfab
                </a>
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Inicio;
