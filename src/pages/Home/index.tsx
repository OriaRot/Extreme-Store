import { Fragment, useContext } from "react"
import { Product } from "../../containers/Product"
import { productsCtx } from "../../context"
import { StateInterface } from "../../globalTypes"

const Home: React.FC = (): JSX.Element => {
    const state = useContext(productsCtx) as StateInterface

    return(
        <Fragment>
            {
                state.products.length ? (
                    <Fragment>
                    {state.products.map(product =>(
                        <Product
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        />
                    ))}
                    </Fragment>
                    ):(
                        <h2>Loading...</h2>
                        )
                    }
                        </Fragment>
    )
            }
            export {Home}
