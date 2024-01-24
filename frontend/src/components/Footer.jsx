import { Col, Container, Row } from "react-bootstrap";

export default function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer>
            <Container className="py-4">
                <Row>
                    <Col className="text-center ">
                        <p>ShipIt &copy; {year} All Rights Reserved</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center ">
                        <p>Version 0.1</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}