import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <div class="navbar-main-container">
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Pro-skill</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" class="nav-link">Home</Nav.Link>
                        <Nav.Link href="#course">Course</Nav.Link>
                        <Nav.Link href="#author">Author</Nav.Link>
                        <Nav.Link href="#feedback">Feedback</Nav.Link>
                        <Nav.Link href="#lang">eng</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

export default BasicExample;