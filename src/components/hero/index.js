import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './hero.css';
import img from './e-commerce-1-removebg-preview.png';
import img1 from './istockphoto-649440600-612x612-removebg-preview (1).png'
import { useEffect, useState } from 'react';

export default function AppCarrosuel () {
  // const [check,setCheak] = useState(false)
    var testimonialsData = [
        {
          id: 1,
          head:`Winter offer <br/> 2024 Collection`,
          img:require('./e-commerce-1-removebg-preview.png'),
          
        },
        {
          id: 2,
          head:`Winter offer <br/> 2024 Collection`,
          img:require('./e-commerce-1-removebg-preview.png'),
          
        },
      ]
    return(
       <section id='testimonials' className='block testimonials-block'>
        <Container fluid id='carousel'>
            <Carousel >
              <Carousel.Item>
                <Container>
                <Row>
                <Col  sm={6} style={{color:'#010101'}}>
                    <div className='carousel-parent'>
                    <div className='title'>
                        <p>Smart Products</p>
                    </div>
                    <div className='offer'>
                        <h3>Winter offer <br/> 2024 Collection</h3>
                    </div>
                    <div className='carousel-button'>
                       <a href='/'>SHOP NOW</a>
                    </div>
                    </div>
                    
                </Col>
                <Col sm={6}>
                    <div className='img'>
                        <img src={img} alt='Loading'/>
                    </div>
                </Col>
              </Row>
                </Container>
                </Carousel.Item>
                <Carousel.Item>
                <Container>
                <Row>
                <Col  sm={6} style={{color:'#010101'}}>
                    <div className='carousel-parent'>
                    <div className='title'>
                        <p>Smart Products</p>
                    </div>
                    <div className='offer'>
                        <h3>Winter offer <br/> 2024 Collection</h3>
                    </div>
                    <div className='carousel-button'>
                       <a href='/'>SHOP NOW</a>
                    </div>
                    </div>
                    
                </Col>
                <Col sm={6}>
                    <div className='img'>
                        <img src={img1} alt='Loading'/>
                    </div>
                </Col>
              </Row>
                </Container>
                </Carousel.Item>
            </Carousel>
        </Container>
       </section>
    )
}