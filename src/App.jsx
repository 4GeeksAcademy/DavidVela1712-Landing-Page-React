import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Cards from "./components/Cards";
import { Container, Row, Col } from 'react-bootstrap';

export const App = () => {
  return (
    <>
      <NavBar />
      <Container className="p-2">
        <Row className="mb-3">
          <Col xs md lg={12}>
            <Welcome />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={3} className="d-flex justify-content-center mb-4">
            <Cards />
          </Col>
          <Col xs={12} md={6} lg={3} className="d-flex justify-content-center mb-4">
            <Cards />
          </Col>
          <Col xs={12} md={6} lg={3} className="d-flex justify-content-center mb-4">
            <Cards />
          </Col>
          <Col xs={12} md={6} lg={3} className="d-flex justify-content-center mb-4">
            <Cards />
          </Col>
        </Row>
      </Container>
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col className="text-center">
              <p>Copyright © 2025 Landing Page React.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
