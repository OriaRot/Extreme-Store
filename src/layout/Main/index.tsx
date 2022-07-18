import { useEffect, useReducer } from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import { productsCtx } from "../../context"
import { Cart } from "../../pages/Cart"
import { Home } from "../../pages/Home"
import { ProductDetail } from "../../pages/ProductDetail"
import { initialState, reducerFn } from "../../reducer"
import { Layout } from "../Layout"

export const Main: React.FC = (): JSX.Element =>{
    const [state, dispatch] = useReducer(reducerFn, initialState);

  console.log(state);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "ADD_PRODUCTS", payload: data }));
  }, []);
    return(
        <productsCtx.Provider value={state}>
    <BrowserRouter>
    <Layout>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="products/:title" element={<ProductDetail dispatch={dispatch}/>}/>
    </Routes>
        </Layout>
    </BrowserRouter>
    </productsCtx.Provider>
    )
} 