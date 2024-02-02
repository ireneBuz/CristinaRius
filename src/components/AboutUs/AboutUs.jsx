import { Row, Col, Container } from 'react-bootstrap'
import './AboutUs.css'
const AboutUs = () => {
    return (
        <>
            <Container>
                <section id="about-us" aria-label="About Us Section">
                    <Row className="about-us justify-content-center">
                        <Col lg="6" xs="12" className="about-us-img">
                            <img
                                src="/photoAbout.JPG"
                                alt="Image about us"
                                role="img"
                                loading="lazy"
                            />
                        </Col>
                        <Col lg="6" xs="12">
                            <h3>Sobre mí</h3>
                            <p>
                                ¡Hola! Soy Cristina Rius, psicóloga sanitaria, con experiencia en el ámbito
                                clínico y social.
                            </p>
                            <p>
                                Trabajo desde un enfoque integrador. ¿Esto qué quiere decir? Que adapto las herramientas y
                                técnicas que he ido adquiriendo en mis años de formación a la persona que tengo delante. Aun
                                así, las corrientes en las que me baso son la terapia cognitivo conductual, la terapia sistémica y
                                las terapias contextuales y de tercera generación.
                            </p>
                            <p>                            Ofrezco servicios de terapia en modalidad presencial y online.
                            </p>


                        </Col>
                    </Row>
                </section>
            </Container>
        </>
    )
}
export default AboutUs