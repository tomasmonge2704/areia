import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap';
import logo from "../../SELECCION DE FOTOS/Areia_Logotipo_Color.png"
export default function Nabvar() {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#1c1c1c" }}>
            <Container>
                <Navbar.Brand href="#home" id="logoMobile" style={{ width: "100px" }}><img id="navLogo" src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#features">INICIO</Nav.Link>
                        <Nav.Link href="#pricing" style={{ marginRight: "7vh", marginLeft: "2vh" }}>NOSOTROS</Nav.Link>
                    </Nav>
                    <Nav id="navLogoA">
                        <Navbar.Brand href="#home" style={{ width: "120px", height: "100px" }}><img id="navLogo" src={logo} /></Navbar.Brand>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets" style={{ marginLeft: "7vh", marginRight: "2vh" }}>EVENTOS</Nav.Link>
                        <Nav.Link className="NavContacto" href="#memes">
                            CONTACTO
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}