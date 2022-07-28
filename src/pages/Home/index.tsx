import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import { Product } from "../../containers/Product"
import { productsCtx } from "../../context"
import { StateInterface } from "../../globalTypes"


const Home: React.FC = (): JSX.Element => {
    const state = useContext(productsCtx) as StateInterface

    return(
        <>
        {state.products.length ? (
            <>
             <h1>store</h1>

             <Row md={2} xs={1} lg={3} classname="g-3">
                 {state.products.map(product => (
                     <Col key={product.id}><Product {...product}/> </Col>    
                 ))}
                  
             </Row>
             </>
        ): <h1>loading...</h1>
    }
      
        </>
    )
            }
            export {Home}


            // <Fragment>
            // {
            //     state.products.length ? (
            //         <Fragment>
            //         {state.products.map(product =>(
            //             <Product
            //             key={product.id}
            //             image={product.image}
            //             title={product.title}
            //             />
            //         ))}
            //         </Fragment>
            //         ):(
            //             <h2>Loading...</h2>
            //             )
            //         }
            //             </Fragment>