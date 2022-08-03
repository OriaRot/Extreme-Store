import './header.css'
import Logo from '../../assets/images/Logo.jpg'
import DucatiLogo from '../../assets/images/Ducati-Logo.png'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'

const Header:React.FC = (): JSX.Element =>{
    const navigate = useNavigate()
    return(
        <div className="headerContainer">
            <div className="headerBox">
                <div className="headerInnerBox">
                    <img onClick={()=>navigate('/')}
                    src={Logo}
                    alt="logo"
                    className='headerLogo'/>
                    <div>Extrim-Shop</div>
                    <Button  text = 'Go to cart' onClick={async () => navigate('/cart')}/>
                    
                
                </div>
                <img
                src={DucatiLogo}
                alt='ducatiLogo'
                className='ducatiLogo'
                />
            </div>
        </div>
    )
}

export {Header}