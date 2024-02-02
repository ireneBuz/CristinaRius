import { Row, Col, Container, Modal } from 'react-bootstrap'
import './Hero.css'
import ScrollingWords from './../ScrollingWords/ScrollingWords'
import { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';



const Hero = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <div className='hero-background '>

                <section aria-label="Hero Section">
                    <Row className="hero justify-content-center">
                        <Col xs="11" lg="6" className="hero-title text-center">
                            <h1>Date la oportunidad de recuperar<br />la calidad de vida que mereces </h1>
                            <h2>¿Empezamos ya?</h2>
                            <ScrollingWords />
                            <div className='contact-us-form-button'>
                                <Modal centered show={showModal} onHide={closeModal} size="lg">
                                    <Modal.Header closeButton />
                                    <Modal.Body>
                                        <ContactForm />
                                    </Modal.Body>
                                </Modal>
                                <a href="tel:+34611851822">
                                    <img src="/whatsappIcon.png" alt="whatsappIcon" />
                                    611 851 822
                                </a>
                            </div>

                        </Col>
                        <Col xs="11" lg="6" className="hero-title">
                            <section className="hero-logo" aria-label="Hero Logo">
                                <img
                                    src="/photoHeroCristina.jpg"
                                    alt="photo hero"
                                    className="hero-image"
                                />

                            </section>


                        </Col>
                    </Row>
                </section>
            </div >

        </>
    )
}
export default Hero