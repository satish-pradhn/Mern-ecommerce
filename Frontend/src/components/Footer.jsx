import { Container, Row, Col } from "react-bootstrap";
const Footer = function () {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col className="text-center">
              <p>My Shop &copy; {currentYear} </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
