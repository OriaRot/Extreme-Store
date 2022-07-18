import { useNavigate } from 'react-router-dom'
import './Layout.css'

interface LayoutProps{
    children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({children}):JSX.Element =>{
    const navigate = useNavigate()
    return(
        <main>
            <header>
                <button onClick={()=>navigate('/')}>
                LOGO
                </button>
                
                <button onClick={()=>navigate('/cart')}>
                    Go to cart
                </button>
            </header>
            <section className="products_container">
                {children}
            </section>
        </main>
    )
}

export {Layout}