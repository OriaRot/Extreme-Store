import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { productsCtx } from "../../context";
import { FormatCurrency } from "../../utilities/formatCurrency";

interface CartInterface{
  
}

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
  const state = useContext(productsCtx) 
   const navigate = useNavigate();
  const handleClick = () => navigate(`products/${title.trim()}`);
  const quantity: number = 1;

  const handleCart = ()=>{
   state?.products.map(item=>{})
  }



  return (
    <Card className="h-100" >
      <Card.Img
      onClick={handleClick}
        variant="top"
        src={image}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{title}</span>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100">+ Add To Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div className="d-flex align-items-base-line" style={{ gap: ".5rem" }}> 
              <Button onClick={handleCart}>-</Button>
              <span className="fs-3">{quantity} <span className="fs-5">in cart</span></span>    
              <Button onClick={handleCart}>+</Button>
              </div>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                 <Button variant="danger" size="sm">remove</Button>
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
