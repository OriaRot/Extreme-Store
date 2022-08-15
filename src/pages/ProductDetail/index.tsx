import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CartButtons } from "../../components/CartButtons";
import { Loader } from "../../components/Loading";
import { productsCtx } from "../../context";
import { useShoppingCart } from "../../context/ShoppingCartCtx";
import { ProductInterface } from "../../globalTypes";
import { FormatCurrency } from "../../utilities/formatCurrency";

const ProductDetail: React.FC = (): JSX.Element => {
  const state = useContext(productsCtx);
  const { title } = useParams();
  const { getItemQuntity } = useShoppingCart();
  const product: ProductInterface = state?.products.find(
    (product) => product.title.trim().replaceAll("/", "") === title?.trim().replaceAll("/", "")
  ) as ProductInterface;
  const quantity = getItemQuntity(product?.id);
  return (
    <>
      {product ? (
        <>
          <Row key={product.id} md={2} xs={1} classname="g-3">
            <Col className="text-center">
              <div className="fs-3 fw-bold">{title}</div>
              <img
                style={{
                  objectFit: "contain",
                  maxWidth: "350px",
                  maxHeight: "500px",
                }}
                src={product.image}
                alt={product.title}
              />
            </Col>
            <Col className="text-center">
              <div className="fs-4 mb-3">{product.description}</div>
              <span className="fs-5 text-muted">
                {FormatCurrency(product.price)}
              </span>
              <CartButtons id={product.id} quantity={quantity} />
            </Col>
          </Row>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export { ProductDetail };
