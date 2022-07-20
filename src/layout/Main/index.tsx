import { useEffect, useReducer } from "react";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Navbar } from "../../containers/Navbar";
import { productsCtx } from "../../context";
import { About } from "../../pages/About";
import { Cart } from "../../pages/Cart";
import { Home } from "../../pages/Home";
import { ProductDetail } from "../../pages/ProductDetail";
import { initialState, reducerFn } from "../../reducer";
export const Main: React.FC = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  console.log(state);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "ADD_PRODUCTS", payload: data }));
  }, []);
  return (
    <>
    <Navbar/>
    <Container className="mb-4">
    <productsCtx.Provider value={state}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route
              path="products/:title"
              element={<ProductDetail dispatch={dispatch} />}
            />
          </Routes>
      </BrowserRouter>
    </productsCtx.Provider>
    </Container>
    </>
  );
};
