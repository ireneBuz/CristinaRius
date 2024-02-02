import { Row, Col, Container } from 'react-bootstrap'
import './OurServices.css'
import { Link } from 'react-router-dom'
const OurServices = () => {
    return (
        <>
            <Container role="main" aria-label="Services">
                <Row className="services justify-content-evenly mt-3" role="region" aria-label="Service Details">
                    <Col xs="12" lg="5" className="text-center" role="article">
                        <div className="services-img">
                            <img
                                src="/emotionalIcon.png"
                                alt="Service Image"
                                aria-label="Recogida"
                                loading="lazy"
                            />
                        </div>
                        <div className="services-text d-flex flex-column justify-content-center align-items-center">
                            <h3 aria-label="Service Title">PROBLEMAS EMOCIONALES</h3>
                            <p aria-label="Service Description">
                                Las emociones son un mundo muy complejo. Si sientes que tus emociones te
                                desbordan o que no acabas de entender qué te pasa, quizás es buen momento para empezar a
                                trabajar en tu gestión emocional. Esto pasa por aprender a identificar, expresar, entender y
                                regular aquello que estás sintiendo.
                            </p>
                        </div>
                    </Col>
                    <Col xs="12" lg="5" className="text-center" role="article">
                        <div className="services-img">
                            <img
                                src="/alimentaryIcon.png"
                                alt="Service Image"
                                aria-label="Revisión y Reposición"
                                loading="lazy"
                            />
                        </div>
                        <div className="services-text d-flex flex-column justify-content-center align-items-center">
                            <h3 aria-label="Service Title">TRASTORNOS DE LA CONDUCTA ALIMENTARIA</h3>
                            <p aria-label="Service Description">
                                A veces nuestra relación con la comida o con nuestro cuerpo puede no ser todo lo
                                saludable que podría ser. Si has empezado a notar que tu relación con la comida o tu cuerpo se
                                basa en conductas no saludables, te animo a que des el paso de cuidarte. Yo estaré contigo
                                para acompañarte en este proceso.                            </p>
                        </div>
                    </Col>
                    <Col xs="12" lg="5" className="text-center" role="article">
                        <div className="services-img">
                            <img
                                src="/anxietyIcon.png"
                                alt="Anxiety Image"
                                aria-label="Anxiety"
                                loading="lazy"
                            />
                        </div>
                        <div className="services-text d-flex flex-column justify-content-center align-items-center">
                            <h3 aria-label="Service Title">ANSIEDAD</h3>
                            <p aria-label="Service Description">
                                En esta vida donde todo va demasiado rápido, hemos aceptado a la ansiedad como
                                acompañante, pero no tiene por qué ser así. Aprender cómo funciona la ansiedad nos permite
                                utilizarla para nuestro beneficio. No dejes que la ansiedad controle tu vida.                            </p>
                        </div>
                    </Col>
                    <Col xs="12" lg="5" className="text-center" role="article">
                        <div className="services-img">
                            <img
                                src="/moreIcon.png"
                                alt="Specialities Image"
                                aria-label="Specialities"
                                loading="lazy"
                            />
                        </div>
                        <div className="services-text d-flex flex-column justify-content-center align-items-center">
                            <h3 aria-label="Service Title">MÁS ESPECIALIDADES</h3>
                            <p aria-label="Service Description">
                                Duelo
                                - ⁠Autoestima
                                - ⁠Depresión
                                - ⁠Problemas de pareja
                                - ⁠Rupturas
                                - ⁠Apatía
                                - ⁠Cambios vitales
                                - ⁠Crecimiento personal
                                - ⁠Trastornos del control de impulso
                                - ⁠Adicción tabaco                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default OurServices