import { Row, Col, Container, Modal } from 'react-bootstrap'
import './Contact.css'
import { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';




const Contact = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);


    return (
        <>
            <div className='contact-background '>

                <Container fluid="xs">
                    <section id="contact" aria-label="Contact Section">
                        <Row className="contact justify-content-center">
                            <Col xs="12" lg="6" className="contact-title text-center">
                                <h1>Contacto</h1>
                                <h2>
                                    <a href='https://api.whatsapp.com/send?phone=611851822'>
                                        <img
                                            src="/callIcon.png"
                                            alt="Phone Icon"
                                            className="contact-phone-icon"
                                        />
                                        <a href='https://api.whatsapp.com/send?phone=611851822'> <img
                                            src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/er26xxeyhz5bysgkvpgw"
                                            alt="Whatsapp Icon"
                                            className="contact-whatsapp-icon"
                                        /></a>
                                    </a>
                                    <a href="tel:+34611851822">611 851 822</a>
                                </h2>
                                <h2>
                                    <a href='mailto:cristinariusverduguez@gmail.com'>
                                        <img
                                            src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/sfqupboic0b9xzboktab"
                                            alt="Email Icon"
                                            className="contact-email-icon"
                                        />
                                    </a>
                                    <a href="mailto:cristinariusverduguez@gmail.com">cristinariusverduguez@gmail.com</a>
                                </h2>
                                <h2>
                                    <a href='https://maps.app.goo.gl/vXssrL4v5FBiuwXJ9'>
                                        <img
                                            src="/contactDirection.png"
                                            alt="Direction Icon"
                                            className="contact-direction-icon"
                                        />
                                    </a>
                                    <a href="https://maps.app.goo.gl/vXssrL4v5FBiuwXJ9">Calle San Vicente Mártir, 84, 2º A-B 46002 Valencia</a>
                                </h2>
                                <h2>
                                    <a href='https://maps.app.goo.gl/vXssrL4v5FBiuwXJ9'>
                                        <img
                                            src="/contactTrain.png"
                                            alt="Train Icon"
                                            className="contact-train-icon"
                                        />
                                    </a>
                                    <a href="https://maps.app.goo.gl/vXssrL4v5FBiuwXJ9"> Líneas 1, 2, 3, 5, 7 y 9 </a>
                                </h2>
                                <h2>
                                    <a href='https://maps.app.goo.gl/vXssrL4v5FBiuwXJ9'>
                                        <img
                                            src="/contactBus.png"
                                            alt="Bus Icon"
                                            className="contact-bus-icon"
                                        />
                                    </a>
                                    <a href="https://maps.app.goo.gl/vXssrL4v5FBiuwXJ9"> Líneas C1, 4, 6, 7, 8, 9, 10, 11, 14, 19, 27, 28, 31, 32, 35, 40, 60, 62, 70, 71, 72, 73 y 81</a>
                                </h2>




                                <div>
                                    <button onClick={openModal} className="btn mt-4">
                                        <span role="img" aria-label="Email"><img src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/gx9au2t9mv0vxigps5np" alt="Contact now icon" /></span> Contactar ahora
                                    </button>
                                    <Modal centered show={showModal} onHide={closeModal} size="lg">
                                        <Modal.Header closeButton />
                                        <Modal.Body>
                                            <ContactForm />
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </Col>
                            <Col xs="12" lg="6" className='map'>
                                <a href='https://maps.app.goo.gl/vXssrL4v5FBiuwXJ9' target="_blank" rel="noopener noreferrer">
                                    <img src="/mapPhoto.png" alt="Map Photo" />
                                    <div className="map-pin"></div>
                                </a>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </div >



        </>
    )
}
export default Contact