import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Loader } from "../../components/Loading";
import { Product } from "../../containers/Product";
import { productsCtx } from "../../context";
import { StateInterface } from "../../globalTypes";

const Store: React.FC = (): JSX.Element => {
  const state = useContext(productsCtx) as StateInterface;

  return (
    <>
      {state.products.length ? (
        <>
          <Row md={2} xs={1} lg={3} classname="g-3">
            {state.products.map((product) => (
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
};
export { Store };
