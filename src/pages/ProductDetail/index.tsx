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
  const {getItemQuntity} = useShoppingCart();
  const product: ProductInterface = state?.products.find(
    (product) => product.title.trim() === title?.trim()
  ) as ProductInterface;
  const quantity = getItemQuntity(product?.id)
  return (
    
    <>
      {product? (
        <>
    
    <Row key={product.id} md={2} xs={1} lg={3} classname="g-3">
              {/* <Col>{product.image}</Col> */}
              <Col>{product.description}</Col>
              <Col><span className="ms-2 text-muted">{FormatCurrency(product.price)}</span></Col>
              <CartButtons id={product.id} quantity={quantity}/>
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