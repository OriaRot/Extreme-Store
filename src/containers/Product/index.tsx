import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { productsCtx } from "../../context";
import { useShoppingCart } from "../../context/ShoppingCartCtx";
import { FormatCurrency } from "../../utilities/formatCurrency";


interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
}
const Product: React.FC<ProductProps> = ({
  id,
  title,
  price,
  image,
}): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`products/${title.trim()}`);
  const {
    getItemQuntity,
    increaseCartQuntity,
    decreaseCartQuntity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuntity(id)
 

  return (
    <Card className="h-100">
      <Card.Img
        onClick={handleClick}
        variant="top"
        src={image}
        height="200px"
        style={{ objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{title}</span>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={()=>increaseCartQuntity(id)}>+ Add To Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-base-line"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={()=>decreaseCartQuntity(id)}>-</Button>
                <span className="fs-3">
                  {quantity} <span className="fs-5">in cart</span>
                </span>
                <Button onClick={()=>increaseCartQuntity(id)}>+</Button>
              </div>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button variant="danger" size="sm"  onClick={()=>removeFromCart(id)}>
                  remove
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export { Product };

{
  /* <div className="Product" onClick={handleClick}>
<div className="Product__thumbnail">
    <img src={image} alt={title}/>
</div>
<h2 className="Product__title">
    {title}
</h2>
</div> */
}
