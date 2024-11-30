/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
const Product = function ({ product }) {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <a href="/">
          <Card.Img src={product.image} variant="top" />
        </a>
        <Card.Body>
          <a href="/">
            <Card.Text as="div">{product.name}</Card.Text>
          </a>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default Product;
