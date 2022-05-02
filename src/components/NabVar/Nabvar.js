import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap';
import logo from "../../SELECCION DE FOTOS/Areia_Logotipo_Color.png"
export default function Nabvar() {
    return (
        <Navbar style={{ height: "5rem",backgroundColor:"#1c1c1c" }} expand="lg">
            <Container style={{justifyContent:"center"}} fluid>
                <Row>
                    <Col>
                        <Nav className="me-auto">
                            <Nav.Link data-aos="fade-right" href="#home" >INICIO</Nav.Link>
                            <Nav.Link data-aos="fade-right" href="#link" >NOSOTROS</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Navbar.Brand data-aos="fade-right" href="#home" style={{width:"100px"}}>
                            <img id="navLogo" src={logo}/>
                        </Navbar.Brand>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav className="me-auto">
                            <Nav.Link data-aos="fade-right" href="#home">EVENTOS</Nav.Link>
                            <Nav.Link data-aos="fade-right" href="#link" className="NavContacto">CONTACTO</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}