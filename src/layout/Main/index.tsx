import { useEffect, useReducer } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../../containers/Navbar";
import { productsCtx } from "../../context";
import { ShoppingCartProvider } from "../../context/ShoppingCartCtx";
import { About } from "../../pages/About";
import { Store } from "../../pages/Store";
import { ProductDetail } from "../../pages/ProductDetail";
import { initialState, reducerFn } from "../../reducer";
import { Home } from "../../pages/Home";
import { CategoryStore } from "../../pages/Category";
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
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/store/:category" element={<CategoryStore />} />
            <Route path="/:title" element={<ProductDetail />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </productsCtx.Provider>
  );
};
