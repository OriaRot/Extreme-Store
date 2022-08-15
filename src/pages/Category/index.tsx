import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Loading";
import { Product } from "../../containers/Product";
import { productsCtx } from "../../context";
import { ProductInterface, StateInterface } from "../../globalTypes";

export function CategoryStore() {
  const { category } = useParams();
  const state = useContext(productsCtx) as StateInterface;
  const products: ProductInterface[] = state?.products.filter(
    (product) => product.category === category
  );
  return (
    <>
      {products ? (
        <>
        <h1>{category}</h1>
          <Row md={2} xs={1} lg={3} classname="g-3">
            {products.map((product) => (
              <Col className="mb-2" key={product.id}>
                <Product {...product} />{" "}
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
