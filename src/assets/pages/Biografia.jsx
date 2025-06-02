import { Container, Row, Col } from "react-bootstrap";

const Biografia = () => {
  return (
    <div>
      <section className="verstappen-bio" id="biografia">
        <Container>
          <div className="title-container">
            <h1 className="main-title">MAX</h1>
            <h2 className="subtitle">VERSTAPPEN</h2>
            <p className="nickname">BIOGRAFIA</p>
            <div className="divider"></div>
            <p className="tagline">TETRA CAMPEÓN MUNDIAL DE FÓRMULA 1</p>
          </div>
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
    </div>
  );
};

export default Biografia;
