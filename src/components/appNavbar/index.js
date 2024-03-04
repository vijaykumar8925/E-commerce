import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './navbar.css';
import logoImg from './logo.png';
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { PiShuffleAngularThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from 'react';
import buyerImg from './buyer-vector-1212908.jpg';
import sellerImg from './seller image.png';
import { useSelector } from 'react-redux';
export default function AppNavbar () {
    const [count,setCount] = useState({
        shuffle : 0,
        liked : 0,
        cart : 0
    })

    const [handleCount,setHandleCount] = useState(1)

    const addToCart = useSelector(state => state.cartCount)

    const addTiMixins = useSelector(state => state.likesCount)

    const addLikes = useSelector(state => state.mixinsCount)

    const [hide,setHide] = useState(false)

    console.log(handleCount)

    const handleClick = async () => {
         
      setHandleCount(handleCount + 1)

      let sum = await handleCount / 2;

      console.log(sum)

      if(Number.isInteger(sum) != true){
         setHide(true)
      }else{
        setHide(false)
      }
      
    }

    return(
        <Container className='navber-class' fluid>
            <Row>
                <Col sm={2}>
                    <div className='logo'>
                        <a href='/'>
                            <img src={logoImg} alt='logo rendering'/>
                        </a>
                    </div>
                </Col>
                <Col sm={8}>
                    <div className='main-menu'>
                        <nav>
                        <ul>
                            <li id='drop1'>
                                <a href='/'>
                                    Home
                                    <MdKeyboardArrowDown />
                                </a>
                                <div id='drop'>
                                    <ul>
                                       <Container fluid>
                                        <Row>
                                            <Col className='try' sm={4}>
                                                <h3>Men's Corner</h3>
                                               <li>Men's T-shirts</li>
                                               <li>Men's Shirts</li>
                                               <li>Men's Pants</li>
                                               <li>Men's Shoes</li>
                                            </Col>
                                            <Col className='try' sm={4}>
                                                <h3>Women's Corner</h3>
                                               <li>Women's T-shirts</li>
                                               <li>Women's Saress</li>
                                               <li>Women's Frogs</li>
                                               <li>Women's Shoes</li>
                                            </Col>
                                            <Col className='try' sm={4}>
                                                <h3>Kid's Corner</h3>
                                               <li>Kid's T-shirts</li>
                                               <li>Kid's Trouser</li>
                                               <li>Kid's Party Wear</li>
                                               <li>Kid's Normal</li>
                                            </Col>
                                        </Row>
                                        </Container> 
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href='/shop'>
                                    Shop
                                    <MdKeyboardArrowDown />
                                </a>
                            </li>
                            <li>
                                <a href='/shop'>
                                    Collections
                                </a>
                            </li>
                            <li>
                                <a href='/pages'>
                                    Pages
                                    <MdKeyboardArrowDown />
                                </a>
                            </li>
                            <li>
                                <a href='/blogs'>
                                    Blogs
                                    <MdKeyboardArrowDown />
                                </a>
                            </li>
                            <li>
                                <a href='/contact'>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                </Col>
                <Col sm={2}>
                    <div className='icons'>  
                           <CgProfile onClick={handleClick} className='mx-2' size={25}/> 
                           <span style={hide ? {visibility : 'visible'} : {display : 'none'}} className='profile'>
                           <div>
                              <div>
                                <img src={buyerImg} alt='loading'/>
                              </div>
                              <div>
                                <a href='/buyerlogin'>LogIn</a>
                              </div>
                           </div>
                           <hr style={{width:'100%'}}></hr>
                           <div>
                              <div>
                                <img src={sellerImg} alt='loading'/>
                              </div>
                              <div>
                                <a href='/sellerlogin'>LogIn</a>
                              </div>
                           </div>
                           </span>
                            <PiShuffleAngularThin  size={25}/> <span className='notify'>{addTiMixins}</span>
                            <CiHeart   size={25}/>  <span className='notify'>{addLikes}</span> 
                            <CiShoppingCart   size={25}/> <span className='notify'>{addToCart}</span>  
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


{/* <CiHeart   size={25}/>
                            <CiShoppingCart   size={25}/> */}