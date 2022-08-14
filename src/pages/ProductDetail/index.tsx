import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { TextEncoderStream } from "stream/web";
import { CartButtons } from "../../components/CartButtons";
import { Loader } from "../../components/Loading";
import { productsCtx } from "../../context";
import { useShoppingCart } from "../../context/ShoppingCartCtx";
import { ProductInterface } from "../../globalTypes";
import { FormatCurrency } from "../../utilities/formatCurrency";

const ProductDetail: React.FC = (): JSX.Element => {
  const state = useContext(productsCtx);
  const { title } = useParams();
  const {getItemQuntity} = useShoppingCart();
  const product: ProductInterface = state?.products.find(
    (product) => product.title.trim() === title?.trim()
  ) as ProductInterface;
  const quantity = getItemQuntity(product?.id)
  return (
    
    <>
      {product? (
        <>
    
    <Row key={product.id} md={2} xs={1} classname="g-3">
              <Col style={{height:""}}>
              <div className="fs-3 mb-2">{title}</div>
              <div className="fs-4">{product.description}</div>
              </Col>
              <Col><img style={{maxWidth: "500px", maxHeight: "500px"}}
              src={product.image}
              alt={product.title}
              /></Col>
              <Col className="text-center">
              <span className="fs-5 text-muted">{FormatCurrency(product.price)}</span>
              <CartButtons id={product.id} quantity={quantity}/>
              </Col>
          </Row>
        </>
      ) : (
        <Loader/>
      )}
    </>
    
  );
};

export { ProductDetail };



// <div className="Product__box" key={product.id}>
    //   <img src={product.image} alt={title} />
    //   <div className="Product__desc">
    //     <h5>{product.description}</h5>
    //   </div>
    // </div>