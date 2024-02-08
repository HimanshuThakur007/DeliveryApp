import React from 'react';
import './css/addToCart.css'
import * as BiIcons from 'react-icons/bi'
import * as BsIcons from 'react-icons/bs'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const AddToCart = ({match}) => {
// const [counter, setCounter]=useState(1)

const history = useHistory()
// const counterHandlerPlus = () => {
//     setCounter(counter+1)
// }
// const counterHandlerMinus = () => {
//     setCounter(counter-1)
// }


  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-12 d-flex flex-wrap justify-content-center mt-4 gap-3">
                {/* ---cart content------------------------- */}
                <div className="col-lg-6 col-12 cart-ct-box d-flex  gap-3">
                    {/* ---product view box-------------------------------- */}
                          <div className="col-lg-12 col-md-12 col-12 ">
                             <div className="col-12 p-3 mb-3 cart-login-box" >
                              <span className=' d-flex'><h5>Excellent SFA</h5><span className='ps-3'>(2)</span></span>
                            </div>  
                            {/* item-------------------------------------- */}
                            <div className='col-12 d-flex left-cart-box p-3 ps-0 pe-0 '>
                              <div className="col-lg-2 col-md-2 col-4 ps-lg-0 ps-md-0 ps-1">
                                <div>
                                    <img src='https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/k/d/t/m-166a-eppe-original-imaghptctz2my2rt.jpeg?q=70' alt='product-image' className='cart-p-image' />
                                </div>
                                {/* --counter----- */}
                                <div className='d-flex  justify-content-center pt-4 px-1'>
                                   <div className='d-flex '><span className='minus-box me-1'>
                                    <button className='button-style' type='button' ><BiIcons.BiMinus  /></button>
                                    </span><span className='px-lg-3 px-0 counted-box'>1</span><span className='plus-box ms-1'>
                                    <button className='button-style' type='button' ><BsIcons.BsPlus  /></button></span></div>
                                </div>
                              </div>
                              <div className="col-lg-10 col-md-10 col-8  px-4">
                                <div className=''>
                                    <h6>Men Solid Polo Neck Polyester White, Black T-Shirt</h6>
                                    <p className='item-desc mb-0'>Size: <span>M</span></p>
                                    <p className='item-desc pt-1'>Seller: <span>Excellent</span></p>
                                    <div>
                                     <span className='d-flex'>  <p className='item-desc pt-1'><del>₹800</del> </p>
                                     <span className='ps-3'><h6>₹375</h6></span>
                                     <span className='ps-3 '><h6 className='text-success'>50% off 1coupon and 3 offer applied</h6></span>
                                     </span>
                                    </div>
                                    {/* ---remove button---------- */}
                                    <div className='d-flex pt-4'>
                                        <div>
                                        <button className='button-style'><h5 className='savefor-letter'>SAVE FOR LETTER</h5></button>
                                        </div>
                                        <div>
                                        <button className='button-style ms-lg-5 ms-0'><h5 className='savefor-letter'>REMOVE</h5></button>
                                        </div>
                                    </div>
                                </div>
                              </div>
                              
                            </div>
                            <div className='col-12 d-flex left-cart-box p-3 ps-0 pe-0'>
                              <div className="col-lg-2 col-md-2 col-4">
                                <div>
                                    <img src='https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/j/o/u/-original-imaghvb6pxynaurx.jpeg?q=70' alt='product-image' className='cart-p-image' />
                                </div>
                                {/* --counter----- */}
                                <div className='d-flex justify-content-center pt-4 px-1'>
                                   <div className='d-flex '><span className='minus-box me-1'>
                                    <button className='button-style' type='button' ><BiIcons.BiMinus /></button>
                                    </span><span className='px-lg-3 px-0 counted-box'>1</span><span className='plus-box ms-1'>
                                    <button className='button-style' type='button' ><BsIcons.BsPlus /></button></span></div>
                                </div>
                              </div>
                              <div className="col-lg-10 col-md-10 col-8 px-lg-4 px-2">
                                <div className=''>
                                    <h6>Men Solid Polo Neck Polyester White, Black T-Shirt</h6>
                                    <p className='item-desc mb-0'>Size: <span>M</span></p>
                                    <p className='item-desc pt-1'>Seller: <span>Excellent</span></p>
                                    <div>
                                     <span className='d-flex'>  <p className='item-desc pt-1'><del>₹800</del> </p>
                                     <span className='ps-3'><h6>₹375</h6></span>
                                     <span className='ps-3 '><h6 className='text-success'>50% off 1coupon and 3 offer applied</h6></span>
                                     </span>
                                    </div>
                                    {/* ---remove button---------- */}
                                    <div className='d-flex pt-4'>
                                        <div>
                                        <button className='button-style'><h5 className='savefor-letter'>SAVE FOR LETTER</h5></button>
                                        </div>
                                        <div>
                                        <button className='button-style ms-lg-5 ms-0'><h5 className='savefor-letter'>REMOVE</h5></button>
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                              
                              <div className='col-12 d-flex justify-content-end place-order-box p-3  ps-0 pe-0'  >
                                <div className='px-5 '>
                                  <button type='button' className='place-order-btn' onClick={() => history.push(`${match.url}/placeorder`)}>PLACE ORDER</button>
                                </div>
                              </div>

                     </div>
                 
                </div>
                  
                     {/* price detail box-------------------------------------- */}
                     <div className="col-lg-4 col-12 right-cart-box ">
                       <div className=''>
                        <div className='p-3'>
                            <h5 className='text-muted'>PRICE DETAILS</h5>
                        </div><hr className='mt-0 mb-0'></hr>
                        {/* ---price calculation------------------------- */}
                        <div className='p-3 price-recipt-box'>
                            <div className='d-flex justify-content-between'>
                                <p className='mt-0 pt-0 price-text'>Price <span>(2 items)</span></p>
                                <span>₹5798</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='mt-0 pt-0 price-text'>Discount </p>
                                <span className='text-success'>-₹3890</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='mt-0 pt-0 price-text'>Coupons for you </p>
                                <span className='text-success'>-₹172</span>
                            </div>
                             <div className='d-flex justify-content-between'>
                                <p className='mt-0 pt-0 price-text'>Delivery Charges </p>
                                <span className='text-success'>₹40</span>
                             </div>
                             <p className="dottedUnderline" style={{width:'100%'}}></p>
                             <div className='d-flex justify-content-between'>
                                <h5 className='mt-0 pt-0 '>Total Amount </h5>
                                <span className='text-success'><h5>₹1736</h5></span>
                             </div>
                             <p className="dottedUnderline" style={{width:'100%'}}></p>
                             <div>
                                <p className='text-success'><b>You will save ₹4062 on this order</b></p>
                             </div>
                        </div>
                       </div>
                     </div>
            </div>
        </div>
    </div>
  )
}

export default AddToCart;