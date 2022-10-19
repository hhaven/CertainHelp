import Carousel from 'react-bootstrap/Carousel';
import PlaceHolderImage from '../assets/img/1500n.png'


export const CarouselPubs = () => {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={PlaceHolderImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Campaña</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={PlaceHolderImage}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Campaña</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={PlaceHolderImage}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Campaña</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}