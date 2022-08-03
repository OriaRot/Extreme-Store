import { Offcanvas, Stack } from "react-bootstrap";
import { CartItem } from "../../components/CartItem";
import { useShoppingCart } from "../../context/ShoppingCartCtx";
import { FormatCurrency } from "../../utilities/formatCurrency";
import { productsCtx } from "../../context";
import { useContext } from "react";
type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const state = useContext(productsCtx)
  const { cartItems, closeCart } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title> Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total:{" "}
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = state?.products.find((i) => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              },0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
