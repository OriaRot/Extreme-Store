import { useContext } from "react";
import { useParams } from "react-router-dom";
import { productsCtx } from "../../context";
import { ProductInterface } from "../../globalTypes";

const ProductDetail: React.FC = (): JSX.Element => {
  const state = useContext(productsCtx);
  const { title } = useParams();
  const product: ProductInterface = state?.products.find(
    (product) => product.title.trim() === title?.trim()
  ) as ProductInterface;
  return (
    <div className="Product__box">
      <img src={product.image} alt={title} />
      <div className="Product__desc">
        <h5>{product.description}</h5>
      </div>
    </div>
  );
};

export { ProductDetail };
