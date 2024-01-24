import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import { FaArrowLeft } from "react-icons/fa";
import { products } from "../product";

export default function ProductDetailsScreen() {
  const { id: productId } = useParams();
  //finds the product the user has selected
  const product = products.find((p) => p.id === productId);

  return (
    <>
      <div style={{}}>
        <Link to={"/"}>
          <FaArrowLeft />
        </Link>

        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup varient="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} Reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>R {product.price}</h3>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>

                    <Col>
                      <strong>R {product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>

                    <Col>
                      <strong>{product.countInStock > 0? "Available": "Out of Stock"}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Button
                        className="btn-block"
                        type="button"
                        disabled={product.countInStock === 0}
                    >Add to Cart</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
