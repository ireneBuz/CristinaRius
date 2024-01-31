import { Row, Col, Container } from 'react-bootstrap'
import './PriceRate.css'
const PriceRate = () => {
    return (
        <>
            <Container>
                <section id="price-rate" aria-label="Price rate Section">
                    <Row className="price-rate justify-content-center">
                        <Col lg="12" xs="12">
                            <h3>Tarifa Terapia individual</h3>
                            <h4>55€</h4>
                            <p>Duración aproximada 1 hora. <br /> Formas de pago: tarjeta, efectivo y/o transferencia bancaria.</p>
                        </Col>
                    </Row>
                </section>
            </Container>
        </>
    )
}
export default PriceRate