import { Card } from "react-bootstrap";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function Product({ products }) {
  const { id, name, image, price, rating } = products;

  return (
    <Tilt>
      <Card className="my-3 p-3 rounded">
        <Link to={`product/${id}`}>
          <Card.Img src={image} variant="top" />
        </Link>

        <Card.Body>
          <Link to={`product/${id}`}>
            <Card.Title as="h4">
              <strong>{name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as={'div'}>
            <Rating value={rating} text={'hello world'}/>
          </Card.Text>
          <Card.Title as="h3">R {price}</Card.Title>
        </Card.Body>
      </Card>
    </Tilt>
  );
}
