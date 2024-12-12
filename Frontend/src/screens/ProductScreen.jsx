//To fetch the product id from the Url we need to use a hook called use params from react router dom

import { useParams } from "react-router-dom";
import products from "../../products";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Ratings from "../components/Ratings";
import { ListGroup, ListGroupItem, Image, Card, Button } from "react-bootstrap";

const ProductScreen = function () {
  const { id: productId } = useParams();
  const selectedProduct = products.find((product) => product._id === productId);
  console.log(selectedProduct);
  return (
    <>
      <Link to="/">
        <button type="button" className="btn btn-primary">
          Go Back
        </button>
      </Link>
      <Row className="mt-3">
        <Col md="5">
          <Image src={selectedProduct.image} alt="" fluid />
        </Col>
        <Col md="4">
          {" "}
          <ListGroup variant="fluid">
            <ListGroupItem>
              <h3>{selectedProduct.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <h2>${selectedProduct.price}</h2>
            </ListGroupItem>
            <ListGroupItem>
              <p>{selectedProduct.description}</p>
            </ListGroupItem>
            <ListGroupItem>
              <Ratings
                ratingsValue={selectedProduct.rating}
                text={` ${selectedProduct.numReviews} reviews}`}
              >
                {" "}
              </Ratings>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md="3">
          <Card>
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col> Price: </Col>
                  <Col>
                    {" "}
                    <strong>{selectedProduct.price} </strong>{" "}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col> Stock: </Col>
                  <Col> <strong> {selectedProduct.countInStock >=1 ? "In Stock" : "Out of Stock"}</strong> </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button>
                  
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default ProductScreen;
