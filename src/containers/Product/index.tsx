import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CartButtons } from "../../components/CartButtons";
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
  const {getItemQuntity} = useShoppingCart();
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
          <CartButtons id={id} quantity={quantity}/>
      </Card.Body>
    </Card>
  );
};

export { Product };
