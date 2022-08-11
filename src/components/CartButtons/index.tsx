import { Button } from "react-bootstrap";
import { useShoppingCart } from "../../context/ShoppingCartCtx";

interface CartButtonsProps {
  id: number;
  quantity: number;
}

export function CartButtons({ id, quantity }: CartButtonsProps) {
  const { increaseCartQuntity, decreaseCartQuntity, removeFromCart } =
    useShoppingCart();
  return (
    <>
      <div className="mt-auto">
        {quantity === 0 ? (
          <Button className="w-100" onClick={() => increaseCartQuntity(id)}>
            + Add To Cart
          </Button>
        ) : (
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: ".5rem" }}
          >
            <div
              className="d-flex align-items-base-line"
              style={{ gap: ".5rem" }}
            >
              <Button onClick={() => decreaseCartQuntity(id)}>-</Button>
              <span className="fs-3">
                {quantity} <span className="fs-5">in cart</span>
              </span>
              <Button onClick={() => increaseCartQuntity(id)}>+</Button>
            </div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: ".5rem" }}
            >
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                remove
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
