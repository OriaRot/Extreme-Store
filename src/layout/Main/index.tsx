import { useEffect, useReducer } from "react";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Navbar } from "../../containers/Navbar";
import { productsCtx } from "../../context";
import { ShoppingCartProvider } from "../../context/ShoppingCartCtx";
import { About } from "../../pages/About";
import { ShoppingCart1 } from "../../pages/ShoppingCart";
import { Home } from "../../pages/Home";
import { ProductDetail } from "../../pages/ProductDetail";
import { initialState, reducerFn } from "../../reducer";
export const Main: React.FC = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  console.log(state);

  useEffect(() => {
    fetch("https://extreme-shop.herokuapp.com/api/products/all")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "ADD_PRODUCTS", payload: data }));
  }, []);
  return (
    <productsCtx.Provider value={state}>
      <ShoppingCartProvider>
    <Navbar/>
    <Container className="mb-4">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<ShoppingCart1 />} />
            <Route path="/about" element={<About />} />
            <Route
              path="products/:title"
              element={<ProductDetail dispatch={dispatch} />}
            />
          </Routes>
      </BrowserRouter>
    </Container>
    </ShoppingCartProvider>
    </productsCtx.Provider>
  );
};
