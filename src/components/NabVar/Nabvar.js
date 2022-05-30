import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap';
import logo from "../../SELECCION DE FOTOS/Areia_Logotipo_Color.png"
import { Link } from 'react-router-dom';
export default function Nabvar() {
    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#1c1c1c" }}>
            <Container>
                <Navbar.Brand href="#home" id="logoMobile" style={{ width: "100px" }}><Link to={`/`} style={{ textDecoration: "none" }}><img id="navLogo" src={logo} /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Link to={`/`} style={{ textDecoration: "none" }}>
                            <Nav.Link href="#features">INICIO</Nav.Link>
                        </Link>
                        <Link to={`/nosotros`} style={{ textDecoration: "none" }}>
                            <Nav.Link href="#pricing" style={{ marginRight: "5vh", marginLeft: "2vh" }}>NOSOTROS</Nav.Link>
                        </Link>
                    </Nav>
                    <Link to={`/`} style={{ textDecoration: "none" }}>
                        <Nav id="navLogoA">

                            <Navbar.Brand href="#home" style={{ width: "120px", height: "100px" }}><img id="navLogo" src={logo} /></Navbar.Brand>

                        </Nav>
                    </Link>
                    <Nav>
                        <Link to={`/eventos`} style={{ textDecoration: "none" }}>
                            <Nav.Link href="#deets" style={{ marginLeft: "4vh", marginRight: "2vh" }}>EVENTOS</Nav.Link>
                        </Link>

                        <Nav.Link href="#memes" style={{display:"flex", justifyContent:"space-between"}}>
                            <Link to={`/contacto`} className="NavContacto" style={{ textDecoration: "none" }}>
                                CONTACTO
                            </Link>
                            <div id="socialIcons">
                                <a href="https://www.instagram.com/areiafutbol/"><i className="fa fa-instagram"></i> </a>
                                <a href="#"><i className="fa fa-phone"></i> </a>
                            </div>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}