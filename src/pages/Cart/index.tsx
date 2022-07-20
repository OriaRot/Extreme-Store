import { Fragment, useContext } from "react";
import { Product } from "../../containers/Product";
import { productsCtx } from "../../context";
import { StateInterface } from "../../globalTypes";

const Cart: React.FC = (): JSX.Element => {
  const state = useContext(productsCtx) as StateInterface;
  console.log(state.shoppingCart);

  return (
    <Fragment>
      {state.shoppingCart.length ? (
        <Fragment>
          {state.shoppingCart.map((product) => (
            <Product
              key={product.id}   {...product}/>
          ))}
        </Fragment>
      ) : (
        <h2>Cart is empty</h2>
      )}
    </Fragment>
  );
};

export { Cart };
