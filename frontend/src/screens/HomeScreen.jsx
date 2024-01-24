import { Col, Container, Row } from "react-bootstrap";
import { products } from "../product";
import Product from "../components/Product";

export default function HomeScreen() {
  return (
    <>
      <h1>Lastest Prodcuts</h1>
      <hr />

      <Container>
        <Row>
          {products.map((item) => {
            return (
              <Col key={item.id} sm={12} md={6} lg={4} xl={3} className="center">
                <Product products={item}/>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
