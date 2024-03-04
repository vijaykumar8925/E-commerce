import './logo.css'
import { PiTruckThin } from "react-icons/pi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './truck.png'
import hours from './24-hours (1).png';
import money from './return-on-investment (1).png';
import off from './ribbon.png'
export default function AppLogo () {
    return(
        <div className="naan">
       <Container fluid>
        <Row>
            <Col lg={3} sm={6}>
                <div className='support-wrap mb-30'>
                    <div className='supported-icon'>
                        <img className='rise-shake' src={img} alt='logo-loading'/>
                    </div>
                    <div class="support-content">
                        <h5>Free Shipping</h5>
                        <p>Free shipping on all order</p>
                        </div>
                </div>
            </Col>
            <Col lg={3} sm={6}>
                <div className='support-wrap mb-30'>
                    <div className='supported-icon'>
                        <img className='rise-shake' src={hours} alt='logo-loading'/>
                    </div>
                    <div class="support-content">
                        <h5>Support 24/7</h5>
                        <p>24/7 Customer Support</p>
                        </div>
                </div>
            </Col>
            <Col lg={3} sm={6}>
                <div className='support-wrap mb-30'>
                    <div className='supported-icon'>
                        <img className='rise-shake' src={money} alt='logo-loading'/>
                    </div>
                    <div class="support-content">
                        <h5>Money Return</h5>
                        <p>Easy Money Return</p>
                        </div>
                </div>
            </Col>
            <Col lg={3} sm={6}>
                <div className='support-wrap mb-30'>
                    <div className='supported-icon'>
                        <img className='rise-shake' src={off} alt='logo-loading'/>
                    </div>
                    <div class="support-content">
                        <h5>Order Discount</h5>
                        <p>Discount on Every Order</p>
                        </div>
                </div>
            </Col>
        </Row>
       </Container>
</div>
    )
}