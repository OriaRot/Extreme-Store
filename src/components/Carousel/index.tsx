import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import electro from "../../assets/carouselimages/electronics.jpg"
import mens from "../../assets/carouselimages/mens-clothing.jpg"
import womens from "../../assets/carouselimages/women-clothing.jpg"
import jewl from "../../assets/carouselimages/jewllery.jpg"
export function BsCarousel() {
  const navigate = useNavigate()
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{objectFit: "cover", height: "70vh"}}
          src={electro}
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
          src={mens}
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
          src={womens}
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
          src={jewl}
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

