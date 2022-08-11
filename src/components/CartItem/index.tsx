import { useContext } from "react";
import { Button, Stack } from "react-bootstrap";
import { productsCtx } from "../../context";
import { useShoppingCart } from "../../context/ShoppingCartCtx";
import { StateInterface } from "../../globalTypes";
import { FormatCurrency } from "../../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const state = useContext(productsCtx) as StateInterface;

  const { removeFromCart } = useShoppingCart();
  const item = state?.products.find((i) => i.id === id);
  console.log("item: ", item, " state: ", state);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-item-center">
      <img
        src={item.image}
        style={{ width: "125px", height: "75px", objectFit: "contain" }}
        alt={item.title}
      />
      <div className="mb-auto">
        <div>
          <span style={{ fontSize: "1rem" }}>{item.title} </span>
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".75rem" }}>
              x{quantity}
            </span>
          )}
        </div>
      </div>
      <div className="text-muted" style={{ fontSize: ".85rem" }}>
        {FormatCurrency(item.price)}
      </div>
      <div>{FormatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
