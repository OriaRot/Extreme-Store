import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
export function BsCarousel() {
  const navigate = useNavigate()
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{objectFit: "cover", height: "70vh"}}
          src="https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Electronics"
          onClick={()=>navigate('/store/electronics')}
        />
        <Carousel.Caption>
          <h3>Electronics</h3>
          <p>Click to go to the category page</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{objectFit: "cover", height: "70vh"}}
          src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Men's clothing"
          onClick={()=>navigate("/store/men's clothing")}
        />

        <Carousel.Caption>
          <h3>Men's-clothing</h3>
          <p>Click to go to the category page</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{objectFit: "cover", height: "70vh"}}
          src="https://images.pexels.com/photos/4530798/pexels-photo-4530798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Women's clothing"
          onClick={()=>navigate("/store/women's clothing")}
        />

        <Carousel.Caption>
          <h3>Women's-clothing</h3>
          <p>
          Click to go to the category page
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{objectFit: "cover", height: "70vh"}}
          src="https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Jewllery"
          onClick={()=>navigate("/store/jewelery")}
        />

        <Carousel.Caption>
          <h3>Jewllery</h3>
          <p>
            Click to go to the category page
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

