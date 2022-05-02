import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap';
export default function Nabvar() {
    return (
        <Navbar style={{ height: "5rem",backgroundColor:"#1c1c1c" }}>
            <Container style={{justifyContent:"center"}}>
                <Row>
                    <Col>
                        <Nav className="me-auto">
                            <Nav.Link href="#home" >INICIO</Nav.Link>
                            <Nav.Link href="#link" >NOSOTROS</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Navbar.Brand href="#home" style={{paddingLeft:"30px"}}>
                            <img
                                alt=""
                                src="/logo.svg"
                                width="100"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                        </Navbar.Brand>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">EVENTOS</Nav.Link>
                            <Nav.Link href="#link">CONTACTO</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}