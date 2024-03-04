import { useEffect, useState } from 'react';
// import './buyer.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useGoogleLogin } from '@react-oauth/google';
import { useRef } from 'react';
import { FcGoogle } from "react-icons/fc";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import AppNavbar from '../appNavbar';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '../../redux/store';

export function AppLogin () {
  const [data,setData] = useState({
    userName : '',
    password : '',
    checkBox : ''
  })

  const [email,setEmail]  = useState({})
    

      const handleClick = async () => {
        let signinData = {
          email : data.userName,
          password : data.password
        }
        let apiUrl = 'http://localhost:5000/signin'
        if(data.userName && data.password != 0 && data.checkBox === true){
          const response = await axios.post(apiUrl,signinData)
          alert(response.data.message)
        }else{
          alert('Please fill all the details')
        }
      }
  
      //  if(Object.entries(email).length != 0){
      //    useEffect(() => {
          
      //    })
      //  }
      
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col sm={4} lg={4}></Col>
                    <Col className='login-setup' sm={4} lg={4}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       
       <Form.Control name='userName' className='inputs' onChange={(e) => {
        setData({
          ...data,
          [e.target.name] : e.target.value
        })
       }} type="email" placeholder="Email" required/>
     </Form.Group>
     <Form.Group  className="mb-3" controlId="formPlaintextPassword">
         <Form.Control name='password' onChange={(e) => {
          setData({
            ...data,
            [e.target.name] : e.target.value
          })
         }}  className='inputs'  type="password" placeholder="Password" required />
       <Row>
           <Col  sm={6} lg={6}>
           <Form.Check
      type='checkbox'
      label={`Remember Me`}
      name='checkBox'
      onChange={(e) => {
        setData({
          ...data,
          [e.target.name] : e.target.checked
        })
      }}
     />
           </Col>
           <Col style={{textAlign:'right'}} sm={6} lg={6}>
           <label>Forget Password</label>
           </Col>
       </Row>
       {/* <Row >
        <Col className='google' lg={12} sm={12}>
               <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
        </Col>
       </Row> */}
     </Form.Group>
     <Link to='/sellerdashboard'>
     <button className='login-btn' onClick={handleClick}>LOGIN</button>
     </Link>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

 export function AppRegister () {
     const [code,setCode] = useState([])
     const [country,setCountry] = useState([])
     const [cites,setCites] = useState([])
     const [countryChange,setCountryChange] = useState('')

     const [pass,SetPass]  = useState({
      password : '',
      confrimPassword : ''
     })

     const [match,setMatch] = useState(false)
      
     useEffect(() => {
       async function fetchData () {
          const response = await fetch('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json');
          const countryList = await fetch('https://countriesnow.space/api/v0.1/countries/states');
          const citesList = await fetch('https://countriesnow.space/api/v0.1/countries');
          const data = await response.json();
          const countryData = await countryList.json();
          const citesData = await citesList.json();
          setCode(data)
          setCountry(countryData.data)
          setCites(citesData.data)
       }
       fetchData()
     },[])
     const handleChange = (val) => {
        setCountryChange(val)
     }

     const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {match ?<p style={{color:'green'}}>Password Matched!</p> : <p>Password and confrim password must be same</p>}
        </Tooltip>
      );
      const renderTooltip1 = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          <ul>
            <li>Must have minimum 8 charaters</li>
            <li>Minimum 1 Captial Letter</li>
            <li>Minimum 1 small letter</li>
            <li>Must have 1 unique value</li>
          </ul>
        </Tooltip>
      );
      const passwordChange = async (e) => {
        SetPass({
          ...pass,
          [e.target.name] : await e.target.value,
        })
        if(pass.password == e.target.value ){
          setMatch(true)
        }else{  
          setMatch(false)
        }
      }
   
      const [regsiterdata,setRegisterdata] = useState({
        userName : '',
        email : '',
        dob : '',
        countryCode : '',
        mobile1 : '',
        mobile2 : '',
        address : '',
        address2 : '',
        state : '',
        city : '',
        pincode : ''
      })


      const handleSubmit = async (event) => {
         let RegisterData = await {
            userName : regsiterdata.userName,
            email : regsiterdata.email,
            dob : regsiterdata.dob,
            phone : regsiterdata.countryCode+ regsiterdata.mobile1,
            phone1 : regsiterdata.mobile2,
            address : `${regsiterdata.address},${regsiterdata.address2},${regsiterdata.city},${regsiterdata.state},${countryChange},${regsiterdata.pincode}`,
            password : pass.confrimPassword 
         }

         if(regsiterdata.userName && regsiterdata.email && regsiterdata.dob &&  regsiterdata.countryCode && regsiterdata.mobile1
          && regsiterdata.mobile2 && regsiterdata.address &&  regsiterdata.city && regsiterdata.state && country && regsiterdata.pincode 
          && pass.password && pass.confrimPassword != 0 ){
             const response = await axios.post('http://localhost:5000/register',RegisterData);
            //  const data = await response.json() 
             alert(response.data.data)
          }
      }

    return(
        <div className='register-form'>
        
            <Container fluid>
                <Row className='reg-form-1'>
                    <Col lg={4}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text"  name='userName' required onChange={(e) => {
          setRegisterdata({
            ...regsiterdata,
            [e.target.name] : e.target.value,
          })
        }}/>
      </Form.Group>
                    </Col>
                    <Col lg={4}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" onChange={(e) => {
          setRegisterdata({
            ...regsiterdata,
            [e.target.name] : e.target.value,
          })
        }} required/>
      </Form.Group>
                    </Col>
                    <Col lg={4}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Frim's Name</Form.Label>
        <Form.Control type="text" name='dob' onChange={(e) => {
          setRegisterdata({
            ...regsiterdata,
            [e.target.name] : e.target.value,
          })
        }} required/>
      </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Frim's GST Number</Form.Label>
        <Form.Control type="text"  name='userName' required onChange={(e) => {
          setRegisterdata({
            ...regsiterdata,
            [e.target.name] : e.target.value,
          })
        }}/>
      </Form.Group>
                    </Col>
                    <Col lg={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Frim's Register Number</Form.Label>
        <Form.Control type="text"  name='userName' required onChange={(e) => {
          setRegisterdata({
            ...regsiterdata,
            [e.target.name] : e.target.value,
          })
        }}/>
      </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col  lg={6}>
                        <Row>
                            <Col style={{padding:'0',margin:'30px 10px'}} sm={2} lg={2}>
                            <Form.Select aria-label="Default select example" onChange={(e) => {
          setRegisterdata({
            ...regsiterdata,
            [e.target.name] : e.target.value,
          })
        }} name='countryCode' required>
      <option>Select</option>
      {
           code.map((val,ind) => (
            <option key={ind}>{val.dial_code+ ' ' +val.code}</option>
           ))
      }
    </Form.Select>
                            </Col>
                            <Col sm={8} lg={8}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Mobile No</Form.Label>
        <Form.Control name='mobile1' onChange={(e) => {
          setRegisterdata({
            ...regsiterdata,
            [e.target.name] : e.target.value,
          })
        }} type="number" required/>
      </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                    <Row>
                            <Col sm={12} lg={12}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Additional No</Form.Label>
        <Form.Control name='mobile2' onChange={(e) => {
          setRegisterdata({
            ...regsiterdata,
            [e.target.name] : e.target.value,
          })
        }} type="number"  required/>
      </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <h4 className='reg-header'>Address Information</h4>
                <Row>
                    <Col lg={6} sm={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Address line1</Form.Label>
        <Form.Control name='address' onChange={(e) => {
          setRegisterdata({
            ...regsiterdata,
            [e.target.name] : e.target.value,
          })
        }} type="text"  required/>
      </Form.Group>
                    </Col>
                    <Col lg={6} sm={6}>
                     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Address line2</Form.Label>
        <Form.Control type="text" name='address2' onChange={(e) => {
          setRegisterdata({
            ...regsiterdata,
            [e.target.name] : e.target.value,
          })
        }} required/>
      </Form.Group>
                    </Col>
                </Row>
                <Row className='reg-form-2'>
                    <Col lg={6} sm={6}>
                        <label className='mb-2'>Country</label>
                    <Form.Select aria-label="Default select example" onChange={(e) => handleChange(e.target.value)} required>
      <option value=''>Select Country</option>
      {
        country.map((val,ind) => (
            <option  value={ind}>{val.name}</option>
        ))
      }
    </Form.Select>
                    </Col>
                    <Col lg={6} sm={6}>
                    <label className='mb-2'>State</label>
                    <Form.Select name='state' aria-label="Default select example" onChange={(e) => {
          setRegisterdata({
            ...regsiterdata,
            [e.target.name] : e.target.value,
          })
        }} required>
      <option>Select State</option>
      {
        countryChange != '' ?
          country[countryChange].states.map((val,ind) => (
               <option>{val.name}</option>
               ))
        : ''
      }
      </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} sm={6}>
                    <label className='mb-2'>City</label>
                    <Form.Select name='city' onChange={(e) => {
          setRegisterdata({
            ...regsiterdata,
            [e.target.name] : e.target.value,
          })
        }} aria-label="Default select example" required>
      <option>Select City</option>
      {
        countryChange != '' ?
          cites[countryChange].cities.map((val,ind) => (
               <option>{val}</option>
               ))
        : ''
      }
      </Form.Select>
                    </Col>
                    <Col lg={6} sm={6}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Postal Code</Form.Label>
        <Form.Control name='pincode' onChange={(e) => {
          setRegisterdata({
            ...regsiterdata,
            [e.target.name] : e.target.value,
          })
        }} type="number"  required/>
      </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} sm={6}>
                    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip1}
    >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password'  type="password"  onChange={(e) => {
            SetPass({
              ...pass,
              [e.target.name] : e.target.value,
            })
        }} required/>
      </Form.Group>
      </OverlayTrigger>
                    </Col>
                    <Col lg={6} sm={6}>
                    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Confrim Password</Form.Label>
        <Form.Control name='confrimPassword' onChange={passwordChange} type="password" required />
      </Form.Group>
      </OverlayTrigger>
                    </Col>
                </Row>
                <Row className='last-reg'>
                  <Col lg={4} sm={4}></Col>
                  <Col lg={4} sm={4}>
                    <div className='reg-btn-holder'>
                        <button className='reg-btn' onClick={handleSubmit}>Submit</button>
                    </div>
                  </Col>
                  <Col lg={4} sm={4}></Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default function AppSellerlogin() {
    const ref = useRef(null);
    const ref1 = useRef(null);
    const [hide,setHide] = useState(true)
    const handleClick = () => {
        setHide(true)
       
       
    }

    const handleClick1 = () => {
        setHide(false)
       
    }

    return(
        <Container className='text-center' fluid>
            <div> 
                <Provider store={Store}>
                <AppNavbar/>
                </Provider>
            </div>
        <div className='login-form'>
            <div style={hide ? {color:'#a749ff'}:{color:'black'}} onClick={handleClick}>
                <h4 style={{cursor:'pointer'}} ref={ref}>Login</h4>
            </div>
            <hr></hr>
            <div style={hide ? {color:'black'}:{color:'#a749ff'}} ref={ref1} onClick={handleClick1} className='second-tab'>
                <h4 style={{cursor:'pointer'}}>Register</h4>
            </div>
        </div>
        {
            hide ? <AppLogin/> :  <AppRegister/>
        }
        </Container>
    )
}