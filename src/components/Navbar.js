import { Navbar as BSNavbar, Nav, NavDropdown } from "react-bootstrap"; 
import { Link } from "react-router-dom"; 
import IamcLogo from '../img/iamc-logo.png'; 

export default function Navbar() {
    return (
        <BSNavbar expand="lg" className="sticky-top px-5 py-3" variant="dark" bg="dark">
            <BSNavbar.Brand as={Link} to="/"><img src={IamcLogo} width="40" height="40" style={{ borderRadius: 15, marginRight: 15 }} /> InnovationMC</BSNavbar.Brand>
            <BSNavbar.Toggle aria-controls="navbar-nav" className="justify-content-end" />
            <BSNavbar.Collapse>
                <Nav fill className="px-5" style={{ marginLeft: 'auto' }}>
                    <NavDropdown menuvariant="dark" title="Info" id="info-dropdown">
                        <NavDropdown.Item>
                            <Nav.Link className="text-dark" as={Link} to="/season-info">Season Info</Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Nav.Link className="text-dark" as={Link} to="/server-pc-specs">Server PC Specs</Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Nav.Link className="text-dark" as={Link} to="/about">About</Nav.Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/rules">Rules</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/how-to-join">How to Join</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/announcements">Announcements</Nav.Link> 
                    </Nav.Item>
                </Nav>
            </BSNavbar.Collapse>
        </BSNavbar>
    ); 
}