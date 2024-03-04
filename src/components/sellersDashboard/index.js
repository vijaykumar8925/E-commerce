import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './sellerdashboard.css';
import logo from './dashboard buy.jpg';
import img2 from './logo.png'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { CiCircleMinus } from "react-icons/ci";

export function DashboardReview ({values,edit}) {
   return(
      <div className='mt-4'>
         <Row>
            <Col lg={2}></Col>
            <Col lg={8}>
               <Row className='mb-2'>
                  <Col lg={6}>
                     <h5  style={{color:'#606470',textAlign:'left'}}>Product Details 1</h5>
                  </Col>
                  <Col lg={6}>
                     <h5 style={{color:'#2557a7',textAlign:'right'}} onClick={() => {
                        values(true)
                     }}>Edit</h5>
                  </Col>
               </Row>
            <div className='product1' style={{textAlign:'left'}}>
                   <div>
                     <p style={{marginBottom:'0px',color:'#606470'}}>Brand Name</p>
                     <Row>
                        <Col lg={1}></Col>
                        <Col lg={11}>
                        <p style={{padding:'4px',fontWeight:'bold',fontSize:'20px'}}>{localStorage.getItem('brand')}</p>
                        </Col>
                     </Row>
                   </div>
                   <div className='sub-edits'>
                     <p style={{marginBottom:'0px',color:'#606470',marginTop:'10px' }}>Product Name</p>
                     <Row>
                        <Col lg={1}></Col>
                        <Col lg={11}>
                        <p style={{padding:'4px',fontWeight:'bold',fontSize:'20px'}}>{localStorage.getItem('productName')}</p>
                        </Col>
                     </Row>
                   </div>
                   <div className='sub-edits'>
                     <p style={{marginBottom:'0px',color:'#606470',marginTop:'10px'}}>Product Category</p>
                     <Row>
                        <Col lg={1}></Col>
                        <Col lg={11}>
                        <p style={{padding:'4px',fontWeight:'bold',fontSize:'20px'}}>{localStorage.getItem('productCategory')}</p>
                        </Col>
                     </Row>
                   </div>
                   <div className='sub-edits'>
                     <p style={{marginBottom:'0px',color:'#606470',marginTop:'10px'}}>Type</p>
                     <Row>
                        <Col lg={1}></Col>
                        <Col lg={11}>
                        <p style={{padding:'4px',fontWeight:'bold',fontSize:'20px'}}>{localStorage.getItem('type')}</p>
                        </Col>
                     </Row>
                   </div>
                   <div className='sub-edits'>
                     <p style={{marginBottom:'0px',color:'#606470',marginTop:'10px'}}>Product Current Location</p>
                     <Row>
                        <Col lg={1}></Col>
                        <Col lg={11}>
                        <p style={{padding:'4px',fontWeight:'bold',fontSize:'20px'}}>{localStorage.getItem('currentPlace')}</p>
                        </Col>
                     </Row>
                   </div>
               </div>
               <Row className='mb-2 mt-4'>
                  <Col lg={6}>
                     <h5  style={{color:'#606470',textAlign:'left'}}>Product Details 2</h5>
                  </Col>
                  <Col lg={6}>
                     <h5 onClick={() => {
                        edit(true)
                     }} style={{color:'#2557a7',textAlign:'right'}}>Edit</h5>
                  </Col>
               </Row>
               <div className='product2' style={{textAlign:'left'}}>
               <div>
                     <p style={{marginBottom:'0px',color:'#606470'}}>Material type</p>
                     <Row>
                        <Col lg={1}></Col>
                        <Col lg={11}>
                        <p style={{padding:'4px',fontWeight:'bold',fontSize:'20px'}}>{localStorage.getItem('materialType')}</p>
                        </Col>
                     </Row>
                   </div> 
                   <div className='sub-edits'>
                     <p style={{marginBottom:'0px',color:'#606470',marginTop:'10px'}}>Country of Orgin</p>
                     <Row>
                        <Col lg={1}></Col>
                        <Col lg={11}>
                        <p style={{padding:'4px',fontWeight:'bold',fontSize:'20px'}}>{localStorage.getItem('countryOrgin')}</p>
                        </Col>
                     </Row>
                   </div> 
                   <div className='sub-edits'>
                     <p style={{marginBottom:'0px',color:'#606470',marginTop:'10px'}}>Discount</p>
                     <Row>
                        <Col lg={1}></Col>
                        <Col lg={11}>
                        <p style={{padding:'4px',fontWeight:'bold',fontSize:'20px'}}>{localStorage.getItem('discounts')}</p>
                        </Col>
                     </Row>
                   </div> 
                   <div className='sub-edits'>
                     <p style={{marginBottom:'0px',color:'#606470'}}>Product List</p>
                     <Row>
                        <Col lg={1}></Col>
                        <Col lg={11}>
                        <table>
                           <tr>
                              <th>Product Size</th>
                              <th>Product Count</th>
                              <th>Product Color</th>
                              <th>Product Price</th>
                              <th>Product Image</th>
                           </tr>
                           {
                              localStorage.getItem('size') != '' ?
                              <tr>
                              <td>{localStorage.getItem('size')}</td>
                              <td>{localStorage.getItem('count')}</td>
                              <td>{localStorage.getItem('color')}</td>
                              <td>{localStorage.getItem('prize')}</td>
                              <th>{localStorage.getItem('image')}</th>
                           </tr> : ''
                           }
                           {
                              localStorage.getItem('size1') != '' ?
                              <tr>
                              <td>{localStorage.getItem('size1')}</td>
                              <td>{localStorage.getItem('count1')}</td>
                              <td>{localStorage.getItem('color1')}</td>
                              <td>{localStorage.getItem('prize1')}</td>
                              <th>{localStorage.getItem('image1')}</th>
                           </tr> : ''
                           }
                            {
                              localStorage.getItem('size2') != '' ?
                              <tr>
                              <td>{localStorage.getItem('size2')}</td>
                              <td>{localStorage.getItem('count2')}</td>
                              <td>{localStorage.getItem('color2')}</td>
                              <td>{localStorage.getItem('prize2')}</td>
                              <th>{localStorage.getItem('image2')}</th>
                           </tr> : ''
                           }
                        </table>
                        </Col>
                     </Row>
                   </div> 
               </div>

               <button className='mt-4 mb-4' style={{border:'none',backgroundColor:'#007FFF',color:'white',width:'120px',height:'40px',borderRadius:'5px'}}>Sell Product</button>
               
            </Col>
            <Col lg={2}></Col>
         </Row>
      </div>
   )
}


export function DashboardNext ({message}) {

   const discountArray = []
  
   console.log(discountArray)

   for(let i =5 ; i <= 100 ; i += 5){
      discountArray.push(`${i} %`)
   }

   const [productDetails,setProductDetails] = useState({
      materialType : '',
      countryOrgin : '',
      discounts : '',
   })

   const [editImage,setEditImage] = useState(false);  

   

   const [country,setCountry] = useState([])

   const [details,setDetails] = useState({
      size : '',
      count : '',
      color : '',
      prize : '',
      image : '',
      size1 : '',
      count1 : '',
      color1 : '',
      prize1 :'',
      image1 : '',
      size2 : '',
      count2 : '',
      color2 : '',
      prize2 :'', 
      image2 :''
   })

   localStorage.setItem('size',details.size)
   localStorage.setItem('count',details.count)
   localStorage.setItem('color',details.color)
   localStorage.setItem('prize',details.prize)
   localStorage.setItem('image',details.image)
   localStorage.setItem('size1',details.size1)
   localStorage.setItem('count1',details.count1)
   localStorage.setItem('color1',details.color1)
   localStorage.setItem('prize1',details.prize1)
   localStorage.setItem('image1',details.image1)
   localStorage.setItem('size2',details.size2)
   localStorage.setItem('count2',details.count2)
   localStorage.setItem('color2',details.color2)
   localStorage.setItem('prize2',details.prize2)
   localStorage.setItem('image2',details.image2)

   

   const [tableData,setTableData] = useState([])


  console.log(tableData)

   useEffect(() => {
      async function fetchData () {
         const countryList = await fetch('https://countriesnow.space/api/v0.1/countries/states');
         const data = await countryList.json()
         setCountry(data.data)
      }
      fetchData()
    },[])

    const handleClick =() => {
      message(true)
    }

    const [increment,setIncrement]  = useState(false);

    const [increment1,setIncrement1] = useState(false)

    const [increment0,setIncrement0] = useState(true)

    const [hide,setHide] = useState(true)

    const handleIncrement1 = () => {
         setIncrement(true)
    }

    const editShow = (val) => {
         setHide(val)
         setEditImage(val)
    }

    localStorage.setItem('materialType',productDetails.materialType)
   localStorage.setItem('countryOrgin',productDetails.countryOrgin)
   localStorage.setItem('discounts',productDetails.discounts)

console.log(details.image)

   return(
      <div>
         {
            hide ? 
            <Row>
            <Col lg={2}></Col>
                                        <Col className='dashboard-tab' lg={8}>
                                            <h4>Product Details</h4>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Material Type</Form.Label>
            <Form.Control value={localStorage.getItem('materialType')}  name='materialType' onChange={(e) => {
               setProductDetails({
                  ...productDetails,
                  [e.target.name] : e.target.value
               })
            } } type="text" placeholder="name@example.com" />
          </Form.Group>
          <label className='mb-2'>Country of Orgin</label>
                        <Form.Select value={localStorage.getItem('countryOrgin')}  name='countryOrgin' onChange={(e) => {
               setProductDetails({
                  ...productDetails,
                  [e.target.name] : e.target.value
               })
            } } className='mb-2'  aria-label="Default select example" required>
          <option >Select Country</option>
          {
             country.map((val,ind) => (
                <option key={ind}>{val.name}</option>
             ))
          }
        </Form.Select>
          <label className='mb-2'>Discounts</label>
                        <Form.Select value={localStorage.getItem('discounts')}  name='discounts' onChange={(e) => {
               setProductDetails({
                  ...productDetails,
                  [e.target.name] : e.target.value
               })
            } } className='mb-2'  aria-label="Default select example" required>
          <option>Select Discount</option>
          <option>0</option> 
          {
             discountArray.map((val,ind) => (
                <option key={ind}>{val}</option>
             ))
          }
        </Form.Select>
        {
          increment0 ?
              <>
              <Row>
                 <Col lg={6}>
        <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Product Size</Form.Label>
                <Form.Control style={{textTransform:'uppercase'}} value={localStorage.getItem('size')} name='size' onChange={(e) => {
                 setDetails({
                    ...details,
                    [e.target.name] : e.target.value
                 })
                }} type="text" placeholder="name@example.com" />
              </Form.Group>
                 </Col>
                 <Col lg={6}>
                 <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Product Count</Form.Label>
                <Form.Control value={localStorage.getItem('count')} onChange={(e) => {
                 setDetails({
                    ...details,
                    [e.target.name] : e.target.value
                 })
                }} name='count' type="number" placeholder="name@example.com" />
              </Form.Group>
                 </Col>
              </Row>
             
              <Row>
                 <Col lg={6}>
                 <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Product Color</Form.Label>
                <Form.Control  value={localStorage.getItem('color')} onChange={(e) => {
                 setDetails({
                    ...details,
                    [e.target.name] : e.target.value
                 })
                }} name='color' type="text" placeholder="name@example.com" />
              </Form.Group>
                 </Col>
                 <Col lg={6}>
                 <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Product Price</Form.Label>
                <Form.Control value={localStorage.getItem('prize')} onChange={(e) => {
                 setDetails({
                    ...details,
                    [e.target.name] : e.target.value
                 })
                }} name='prize' type="text" placeholder="name@example.com" />
              </Form.Group>
                 </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  {
                     editImage ? 
                     <>
                     <label>Product Image</label>
                        <div style={{padding:'10px'}} className='mb-2'>
                        <label  style={{fontSize:'20px'}} htmlFor="filePicker" >{details.image ? details.image : 'Choose File'}
                        <div className='mt-2' style={{backgroundColor:'rgba(0,0,0,.1)',padding:'5px',textAlign:'center'}}>
                           <span>Replace</span>
                        </div>
                        </label>
                       <input name='image' id="filePicker" style={{visibility:"hidden"}} type={"file"} onChange={(e) => {
                        setDetails({
                           ...details,
                           [e.target.name] : e.target.files[0].name
                        })
                       }}/>
                        </div>
                        </>:
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control  name='image' onChange={(e) => {
               setDetails({
                  ...details,
                  [e.target.name] : e.target.files[0].name
               })
            }} type="file" placeholder="name@example.com" />
          </Form.Group>
                  }
                </Col>
              </Row>
              {/* <Row>
                 <Col lg={12}>
                    <div style={{textAlign:'center'}}>
                       <button onClick={handleTableClick} style={{border:'none', backgroundColor:'#007FFF',color:'white',borderRadius:'5px'}}>Add</button>
                    </div>
                 </Col>
              </Row> */}
              <Row>
                 <Col lg={12} style={{textAlign:'center'}}>
                    {
                       increment ? <div>
                       <CiCircleMinus size={25} onClick={() => {
                         setIncrement0(false)
                       }}/>
                    </div> :   <div onClick={handleIncrement1}>
                       <FiPlusCircle size={25}/>
                       </div>
                    }
                 </Col>
              </Row>
              </> : ''
        }
           
          {
             increment ? 
             <>
             <Row>
                <Col lg={6}>
       <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
               <Form.Label>Product Size</Form.Label>
               <Form.Control value={localStorage.getItem('size1')} style={{textTransform:'uppercase'}} name='size1' onChange={(e) => {
                setDetails({
                   ...details,
                   [e.target.name] : e.target.value
                })
               }} type="text" placeholder="name@example.com" />
             </Form.Group>
                </Col>
                <Col lg={6}>
                <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
               <Form.Label>Product Count</Form.Label>
               <Form.Control value={localStorage.getItem('count1')} onChange={(e) => {
                setDetails({
                   ...details,
                   [e.target.name] : e.target.value
                })
               }} name='count1' type="text" placeholder="name@example.com" />
             </Form.Group>
                </Col>
             </Row>
            
             <Row>
                <Col lg={6}>
                <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
               <Form.Label>Product Color</Form.Label>
               <Form.Control value={localStorage.getItem('color1')} onChange={(e) => {
                setDetails({
                   ...details,
                   [e.target.name] : e.target.value
                })
               }} name='color1' type="text" placeholder="name@example.com" />
             </Form.Group>
                </Col>
                <Col lg={6}>
                <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
               <Form.Label>Product Price</Form.Label>
               <Form.Control value={localStorage.getItem('prize1')} onChange={(e) => {
                setDetails({
                   ...details,
                   [e.target.name] : e.target.value
                })
               }} name='prize1' type="text" placeholder="name@example.com" />
             </Form.Group>
                </Col>
             </Row>
             <Row>
                <Col lg={12}>
                  {
                     editImage ?  <>
                     <label>Product Image</label>
                        <div style={{padding:'10px'}} className='mb-2'>
                        <label  style={{fontSize:'20px'}} htmlFor="filePicker" >{details.image1 ? details.image1 : 'Choose File'}
                        <div className='mt-2' style={{backgroundColor:'rgba(0,0,0,.1)',padding:'5px',textAlign:'center'}}>
                           <span>Replace</span>
                        </div>
                        </label>
                       <input id="filePicker" name='image1' style={{visibility:"hidden"}} type={"file"} onChange={(e) => {
                        setDetails({
                           ...details,
                           [e.target.name] : e.target.files[0].name
                        })
                       }}/>
                        </div>
                        </> : 
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Upload Image</Form.Label>
                        <Form.Control  name='image1' onChange={(e) => {
                              setDetails({
                                 ...details,
                                 [e.target.name] : e.target.files[0].name
                              })
                        }} type="file" placeholder="name@example.com" />
                      </Form.Group>
                  }
                </Col>
              </Row>
             {/* <Row>
                <Col lg={12}>
                   <div style={{textAlign:'center'}}>
                      <button onClick={handleTableClick} style={{border:'none', backgroundColor:'#007FFF',color:'white',borderRadius:'5px'}}>Add</button>
                   </div>
                </Col>
             </Row> */}
             <Row>
                <Col lg={12} style={{textAlign:'center'}}>
                   {
                      increment1 ? <div onClick={() => {
                         setIncrement(false)
                      }}>
                      <CiCircleMinus size={25}/>
                   </div> :
                      <div >
                   <FiPlusCircle size={25} onClick={() => {
                      setIncrement1(true)
                   }}/>
                   </div> 
                   }
                   
                </Col>
             </Row>
             </> : ''
          }
    
    {
             increment1 ? 
             <>
             <Row>
                <Col lg={6}>
       <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
               <Form.Label>Product Size</Form.Label>
               <Form.Control value={localStorage.getItem('size2')} style={{textTransform:'uppercase'}} name='size2' onChange={(e) => {
                setDetails({
                   ...details,
                   [e.target.name] : e.target.value
                })
               }} type="text" placeholder="name@example.com" />
             </Form.Group>
                </Col>
                <Col lg={6}>
                <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
               <Form.Label>Product Count</Form.Label>
               <Form.Control value={localStorage.getItem('count2')} onChange={(e) => {
                setDetails({
                   ...details,
                   [e.target.name] : e.target.value
                })
               }} name='count2' type="text" placeholder="name@example.com" />
             </Form.Group>
                </Col>
             </Row>
            
             <Row>
                <Col lg={6}>
                <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
               <Form.Label>Product Color</Form.Label>
               <Form.Control value={localStorage.getItem('color2')} onChange={(e) => {
                setDetails({
                   ...details,
                   [e.target.name] : e.target.value
                })
               }} name='color2' type="text" placeholder="name@example.com" />
             </Form.Group>
                </Col>
                <Col lg={6}>
                <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
               <Form.Label>Product Price</Form.Label>
               <Form.Control value={localStorage.getItem('prize2')} onChange={(e) => {
                setDetails({
                   ...details,
                   [e.target.name] : e.target.value
                })
               }} name='prize2' type="text" placeholder="name@example.com" />
             </Form.Group>
                </Col>
             </Row>
             <Row>
                <Col lg={12}>
                  {
                     editImage ? 
                     <>
                     <label>Product Image</label>
                        <div style={{padding:'10px'}} className='mb-2'>
                        <label  style={{fontSize:'20px'}} htmlFor="filePicker" >{details.image2 ? details.image2 : 'Choose File'}
                        <div className='mt-2' style={{backgroundColor:'rgba(0,0,0,.1)',padding:'5px',textAlign:'center'}}>
                           <span>Replace</span>
                        </div>
                        </label>
                       <input id="filePicker" name='image2' style={{visibility:"hidden"}} type={"file"} onChange={(e) => {
                        setDetails({
                           ...details,
                           [e.target.name] : e.target.files[0].name
                        })
                       }}/>
                        </div>
                        </> : 
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Upload Image</Form.Label>
                        <Form.Control  name='image2' onChange={(e) => {
                              setDetails({
                                 ...details,
                                 [e.target.name] : e.target.value
                              })
                        }} type="file" placeholder="name@example.com" />
                      </Form.Group>
                  }
                </Col>
              </Row>
             {/* <Row>
                <Col lg={12}>
                   <div style={{textAlign:'center'}}>
                      <button onClick={handleTableClick} style={{border:'none', backgroundColor:'#007FFF',color:'white',borderRadius:'5px'}}>Add</button>
                   </div>
                </Col>
             </Row> */}
             <Row>
                <Col lg={12} style={{textAlign:'center'}}>
                      <div >
                   <FiPlusCircle size={25} onClick={() => {
                      setIncrement1(true)
                   }}/>
                   </div> 
                </Col>
             </Row>
             </> : ''
          }
         
          {/* <Row>
             <Col lg={12}>
             <table className='mt-2 mb-4'>
             <tr style={{textAlign:'center'}}>
             <th>S:no</th>
             <th>Product Size</th>
             <th>Product Count</th>
             <th>Product Color</th>
             <th>Product Prize</th>
             </tr>
             {
                tableData.length > 0 ? 
                tableData.map((val,ind) => (
                   <tr style={{textAlign:'center',fontFamily:'Arial, Helvetica, sans-serif',textTransform:'uppercase'}} key={ind}>
                      <td>{ind + 1}</td>
                      <td>{val.tableSize}</td>
                      <td>{val.tableCount}</td>
                      <td>{val.tableColor}</td>
                      <td>{val.tablePrice}</td>
                   </tr> 
                )) :
                <tr>
                   <td colSpan={5} style={{textAlign:'center'}}>Add Products Details</td>
                </tr>
             }
          </table>
             </Col>
          </Row> */}
          <div style={{display:'flex',justifyContent:'space-between'}}>
            {
               editImage ? '' : <button onClick={handleClick} style={{border:'none',backgroundColor:'#007FFF',color:'white',width:'70px',height:'30px',borderRadius:'5px'}}>Previous</button>

            }  
              {
                editImage ? <button  style={{border:'none',backgroundColor:'#007FFF',color:'white',width:'70px',height:'30px',borderRadius:'5px'}} onClick={() => {
                  setHide(false)
                }}>Update</button> :
                <button onClick={() => {
                  setHide(false)
                }}  style={{border:'none',backgroundColor:'#007FFF',color:'white',width:'70px',height:'30px',borderRadius:'5px'}}>Review</button>
              }
                   
          </div>
                                        </Col>
                                        <Col lg={2}></Col>
            </Row> : <DashboardReview values={message} edit={editShow}/>
         }
       
      </div>
   ) 
}

export default function AppSellersDashboard () {

    const navgiate = useNavigate();
      
    const [category,setCategory] = useState('')

    const handleClick = () => {
       navgiate('/')
    }

    const [hide,setHide] = useState(true)

    const [state,setState] = useState({
      brand : '',
      productName : '',
      type : '',
      currentPlace : ''
    })


    const [value,setValue] = useState(false)

    localStorage.setItem('brand',state.brand);
      localStorage.setItem('productName',state.productName)
      localStorage.setItem('type',state.type)
      localStorage.setItem('currentPlace',state.currentPlace)
      localStorage.setItem('productCategory',category)

    const handleNexttab = () => {
      setHide(false)
    }

    const childToParent = (val) => {
         console.log(val)
         setHide(val)
    }

    

    return(
        <div className='sellerdashboard'>
             <Container style={{padding:'0'}} fluid >
                <Row className='dash-height'>
                    <Col lg={5} style={{padding:'0'}}>
                        <div className='dashboardbuy'>   
                            <img  src={logo}/>
                        </div>
                    </Col>
                    <Col lg={7} style={{padding:'0'}}>
                        <div className='dash-second'>
                             <div className='dashboard-inputs' style={{textAlign:'center'}}>
                                  <img onClick={handleClick} src={img2}/>
                                  {
                                       hide ?
                                       <Row>
                                    <Col lg={2}></Col>
                                    <Col className='dashboard-tab' lg={8}>
                                        <h4>Product Details</h4>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Brand Name</Form.Label>
        <Form.Control value={localStorage.getItem('brand')} name='brand' onChange={(e) => {
         setState({
            ...state,
            [e.target.name] : e.target.value
         })
        }}  type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Product Name</Form.Label>
        <Form.Control value={localStorage.getItem('productName')} name='productName' type="email"  onChange={(e) => {
         setState({
            ...state,
            [e.target.name] : e.target.value
         })
        }}  placeholder="name@example.com" />
      </Form.Group>
      <label className='mb-2'>Product Category</label>
                    <Form.Select  value={localStorage.getItem('productCategory')} className='mb-2' onChange={(e) => {setCategory(e.target.value)}} aria-label="Default select example" required>
      <option >Select Category</option>
      <option>Cloths</option>
      <option>Furnitures</option>
      <option>Electornics</option>
    </Form.Select>
    {
       category === 'Select Category' ? <>
          <label className='mb-2 mt-2'>Select Category</label>
                    <Form.Select aria-label="Default select example" required>
      <option >Select</option>
    </Form.Select>
       </> : ''
    }
      {
       category === '' ? <>
          <label className='mb-2 mt-2'>Select Category</label>
                    <Form.Select aria-label="Default select example" required>
      <option >Select</option>
    </Form.Select>
       </> : ''
    }
    {
       category === 'Cloths' ? <>
          <label className='mb-2 mt-2'>Gender</label>
                    <Form.Select value={localStorage.getItem('type')} name='type' onChange={(e) => {
         setState({
            ...state,
            [e.target.name] : e.target.value
         })
        }}  aria-label="Default select example" required>
      <option >Select Gender</option>
      <option>Male</option>
      <option>FeMale</option>
      <option>Not Willing To Say</option>
    </Form.Select>
       </> : ''
    }

{
       category === 'Furnitures' ? <>
          <label className='mb-2 mt-2'>Wood Type</label>
                    <Form.Select value={localStorage.getItem('type')} name='type' onChange={(e) => {
         setState({
            ...state,
            [e.target.name] : e.target.value
         })
        }}  aria-label="Default select example" required>
      <option >Select Type</option>
      <option>Mahogany</option>
      <option>Cedar</option>
      <option>Oak</option>
      <option>Maple</option>
      <option>Teak</option>
      <option>Walnut</option>
      <option>Cherry</option>
      <option>Pine</option>
      <option>Rosewood</option>
      <option>Plywood</option>
    </Form.Select>
       </> : ''
    }
    {
       category === 'Electornics' ? <>
          <label className='mb-2 mt-2'>Electornics Type</label>
                    <Form.Select value={localStorage.getItem('type')} name='type' onChange={(e) => {
         setState({
            ...state,
            [e.target.name] : e.target.value
         })
        }}  aria-label="Default select example" required>
      <option >Select Type</option>
      <option>AC</option>
      <option>Printer</option>
      <option>Bulb</option>
      <option>Calculator</option>
      <option>Iron Box</option>
      <option>Projector</option>
      <option>Television</option>
      <option>Fan</option>
      <option>Washing Machine</option>
      <option>Refrigerator</option>
      <option>Water Heater</option>
      <option>Mobile Phones</option>
      <option>Laptops</option>
    </Form.Select>
       </> : ''
    }
    <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Product Current Location</Form.Label>
        <Form.Control value={localStorage.getItem('currentPlace')} name='currentPlace' onChange={(e) => {
         setState({
            ...state,
            [e.target.name] : e.target.value
         })
        }} type="text" placeholder="name@example.com" />
      </Form.Group>
      <div style={{textAlign:'right'}}>
      <button onClick={handleNexttab} style={{border:'none',backgroundColor:'#007FFF',color:'white',width:'70px',height:'30px',borderRadius:'5px'}}>Next</button>
      </div>
                                    </Col>
                                    <Col lg={2}></Col>
                                  </Row> :
                                  <DashboardNext message={childToParent}/>
                                  }
                                  
                             </div>
                        </div>
                    </Col>
                </Row>
             </Container>
        </div>
    )
}