import React, {useState} from 'react'
import '../css/paymentPage.css'
import * as BiIcons from 'react-icons/bi'
// import * as BsIcons from 'react-icons/bs'


const PaymentPage = ({match}) => {
  const [selectedOption, setSelectedOption] = useState('1');

//   -------------radio  button handler---------------------------
const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
};



  return (
    <div className='container-fluid'>
        <div className="col-12 d-flex flex-wrap gap-lg-3 gap-0  justify-content-center">
            {/* --content--- */}
            <div className="col-lg-6 col-md-12 col-12 mt-3 mb-4">
                    <div className="col-12 p-3  payment-login-box" >
                    <div className='d-flex justify-content-between'>
                     <h3><span className='no-box'>1</span></h3>
                     <div ><span className='login-txt'>LOGIN</span> <span><BiIcons.BiCheck style={{height:'20px', width:'20px', color:'blue'}} /></span><br />
                     <div className='d-lg-flex d-md-flex d-block '> <h6 >Vivek Singh </h6> <span >+ 9621946606</span></div>
                     </div>
                     <button className='change-button'>CHANGE</button>
                    </div>
                     </div> 
                     {/* ---delivery address------------------- */}
                    <div className="col-12 p-3  mt-3 payment-login-box" >
                    <div className='d-flex justify-content-between'>
                     <h3><span className='no-box'>2</span></h3>
                     <div ><span className='login-txt'>PAYMENT OPTION</span> <span><BiIcons.BiCheck style={{height:'20px', width:'20px', color:'blue'}} /></span><br />
                     <div className='d-lg-flex d-md-flex d-block '> <h6 >Vivek Singh </h6> <span >Noida , sector 62 , near fortice hospital , Uttar Pradesh</span></div>
                     </div>
                     <button className='change-button'>CHANGE</button>
                    </div>
                     </div> 
                     {/* ---------order---summary------- */}
                     <div className="col-12 p-3  mt-3 payment-login-box" >
                     <div className='d-flex justify-content-between'>
                     <h3><span className='no-box'>3</span></h3>
                     <div ><span className='login-txt'>ORDER SUMMARY</span> <span><BiIcons.BiCheck style={{height:'20px', width:'20px', color:'blue'}} /></span><br />
                     <div className='d-lg-flex d-md-flex d-block '><h6>2 items </h6></div>
                     </div>
                     <button className='change-button'>CHANGE</button>
                    </div>
                     </div> 
                     {/* ----payment option------------------ */}
                    
                   <div className="col-12 mt-0">
                   <div className='col-12 mt-3'>
                          <h3 className='address-heading heading-style mb-0'><span className='txt-no2'>4</span><span className='address-txt-head'>DELIVERY ADDRESS</span></h3>
                      </div>
                      <div className='col-12 p-4 paymet-method-ct'>
                        <div className=''>
                          <span><input type='radio'
                           name='payment_method' 
                           id='1'            
                            value='1'
                            checked={selectedOption === '1'}
                           onChange={handleOptionChange} /></span>
                          <span className='ps-2'>Credit / Debit / ATM Card</span>
                        </div>
                         <div  className={selectedOption == '1' ? 'd-block pt-3' : 'd-none'}>
                          <form>
                            <div className="col-7">
                              <div className="col-12">
                                <input type='text' className='payment-form-inpt' placeholder='Enter Card Number'  />
                              </div>
                              <div className="col-12 d-flex mt-3 mb-3">
                                <div className="col-8 pe-3">
                                <input type='text' className='payment-form-inpt' placeholder='Valid True' />
                                </div>
                                <div className="col-4 ">
                                <input type='text' className='payment-form-inpt' placeholder='CVV' />
                                </div>
                              </div>
                              <div >
                                <button className='pay-button' type='button'>PAY ₹640</button>
                                <p className='pt-2 text-muted'>Add and secure your card as per RBI guidelines </p>
                              </div>
                            </div>
                          </form>
                         </div>
                      </div>
                   </div>
                   {/* ---confrim order-------- */}
                   <div className="col-12">
                   <div className='paymet-method-ct p-4'>
                   <span>
                    <input type='radio' name='payment_method' 
                           id='2'            
                            value='2'
                            checked={selectedOption === '2'}
                           onChange={handleOptionChange} />
                    <span className='ps-2 '>Cash on Delivery</span></span>
                   <div className={selectedOption == '2' ? ' d-flex justify-content-end' : 'd-none'} >
                   <button className='pay-button' type='button'>CONFIRM ORDER</button>
                   </div>
                   </div>
                   </div>
            </div>
            {/* --for right price box-------------- */}
            <div className="col-lg-4 col-md-12 col-12 mt-3 ">
               {/* price detail box-------------------------------------- */}
                <div className="col-12 right-placeorder-box">
                       <div className=''>
                        <div className='p-3'>
                            <h5 className='text-muted'>PRICE DETAILS</h5>
                        </div><hr className='mt-0 mb-0'></hr>
                        {/* ---price calculation------------------------- */}
                        <div className='p-3'>
                            <div className='d-flex justify-content-between'>
                                <p className='mt-0 pt-0 price-text'>Price <span>(2 items)</span></p>
                                <span>₹5798</span>
                            </div>
                          
                             <div className='d-flex justify-content-between'>
                                <p className='mt-0 pt-0 price-text'>Delivery Charges </p>
                                <span className='text-success'>₹40</span>
                             </div>
                             <p className="dottedUnderline" style={{width:'100%'}}></p>
                             <div className='d-flex justify-content-between'>
                                <h5 className='mt-0 pt-0 '>Amount Payable</h5>
                                <span className='text-success'><h5>₹1736</h5></span>
                             </div>
                             
                        </div>
                       </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentPage

