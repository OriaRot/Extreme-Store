import './detail.css'
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { productsCtx } from "../../context";
import { ActionInterface, ProductInterface } from "../../globalTypes";

interface ProductDetailInterface{
  dispatch: React.Dispatch<ActionInterface>
}

const ProductDetail: React.FC<ProductDetailInterface> = ({dispatch}): JSX.Element => {
  const state = useContext(productsCtx);
  const { title } = useParams();
  const product: ProductInterface = state?.products.find(
    (product) => product.title.trim() === title?.trim()
  ) as ProductInterface;
  const handleClick = ()=>{
    dispatch({type: 'ADD_TO_CART', payload: product})
    
  }
  return (
    
        <div className="Product__box">
          <img src={product.image} alt={title}/>
          <button onClick={handleClick}>
          Add to cart
          </button>
          <div className="Product__desc">
            <h5>{product.description}</h5>
          </div>
      </div>
  );
};

export { ProductDetail };
