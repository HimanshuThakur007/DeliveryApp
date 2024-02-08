import React, {useState} from 'react';
import '../css/placeOrder.css'
import * as BiIcons from 'react-icons/bi'
import * as BsIcons from 'react-icons/bs'


const PlaceOrder = () => {
    const [selectedOption, setSelectedOption] = useState('1');
    const [isOpen, setIsOpen] = useState(false);

const address = [
    {
        id:1,
        add:'Noida, sector 62, B-Block Uttar Pradesh',
        name:'Vivek Singh',
        type:'Home',
        v:'1',
    },
    {
        id:2,
        add:'Kanpur, Kakadev,  Uttar Pradesh',
        name:'Vivek Singh',
        type:'Home',
        v:'2',
    },
    {
        id:3,
        add:' Gomti Nagar, Lucknow, B-Block Uttar Pradesh',
        name:'Vivek Singh',
        type:'Home',
        v:'3',
    },
]
//   -------------radio  button handler---------------------------
const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


// -------add address toggle------------------
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
      };

  console.log(selectedOption,"v" )


  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-12 d-flex flex-wrap justify-content-center mt-4 gap-3">
                {/* ---cart content------------------------- */}
                <div className="col-lg-6 col-md-12 col-12  d-flex  ">
                    {/* ---product view box-------------------------------- */}
                          <div className="col-12  ">
                              <div className="col-12 p-3  placeorder-login-box" >
                             <div className='d-flex justify-content-between'>
                                <h3><span className='no-box'>1</span></h3>
                                <div ><span className='login-txt'>LOGIN</span> <span><BiIcons.BiCheck style={{height:'20px', width:'20px', color:'blue'}} /></span><br />
                               <div className='d-lg-flex d-md-flex d-block '> <h6 >Vivek Singh </h6> <span >+ 9621946606</span></div>
                                </div>
                                <button className='change-button'>CHANGE</button>
                             </div>
                              </div>  
                            {/* ---address heading------------------- */}
                             <div className="col-12 mt-3 left-placeorder-box placeorder-ct-box">
                                <div>
                                    <h3 className='address-heading heading-style'><span className='txt-no2'>2</span><span className='address-txt-head'>DELIVERY ADDRESS</span></h3>
                                </div>
                               <div className='col-12'>
                                {
                                    address.map((item,id) => {
                                        return(
                                            <>
                                            <div key={id} className='col-12 address-wrap-box p-3'>
                                                <div className='d-flex '>
                                                <input type='radio'
                                                  id={`radio-${item.id}`}
                                                    name="options"
                                                    value={item.v}
                                                    checked={selectedOption === item.v}
                                                    onChange={handleOptionChange} />
                                                                                        
                                                <div className='col-12 ps-5 '>
                                               <div className='d-flex justify-content-between  '>
                                                <h6>{item.name}</h6>
                                                <button className='button-style text-primary'>EDIT</button>
                                                </div> 
                                                <div>
                                                    <p>{item.add}</p>
                                                </div>
                                                <div className={selectedOption == item.id ? 'd-block' : 'd-none'}>
                                                    <button className='delivery-btn'>DELIVER HERE</button>
                                                </div>
                                                </div>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    })
                                }
                               </div>
                             </div>
                            {/* add address button-------------------------------------- */}
                         <div className='col-12 mt-3 mb-4'>
                          <div className='add-address-form p-3'>
                          <button onClick={toggleAccordion} className='dropdown-custome d-flex justify-content-start '><span>{isOpen ? <BiIcons.BiMinus  style={{height: '20px', width:'20px', color: 'blue'}} /> : <BsIcons.BsPlus style={{height: '20px', width:'20px', color: 'blue'}} />}</span><h6 className='text-primary ps-3'>Add a new address</h6></button>
                            {isOpen && (
                            <div>
                                 <input type='radio' id="4" name="options" value="4" checked={selectedOption === '4'} onChange={handleOptionChange} />
                                <div className="col-12 pt-3 px-lg-5 px-md-3 px-0">
                                    <div><button className='location-btn' type='button'><span className='pe-2'><BiIcons.BiCurrentLocation  style={{height: '20px', width:'20px', color: 'white'}} /></span>Use my current location</button></div>
                                    <form className='pt-3 pb-4'>
                                     <div className="col-12 d-flex flex-wrap gap-3">
                                        <div className='col-lg-5 col-md-5 col-12'>
                                            <input type='text' className=' address-form-inpt' placeholder='Name' />
                                        </div>
                                        <div className='col-lg-5 col-md-5 col-12'>
                                            <input type='text' className=' address-form-inpt'  placeholder='10-digit mobile number' />
                                        </div>
                                        <div className='col-lg-5 col-md-5 col-12'>
                                            <input type='text' className=' address-form-inpt' placeholder='Pincode' />
                                        </div>
                                         <div className='col-lg-5 col-md-5 col-12'>
                                            <input type='text' className='address-form-inpt' placeholder='Locality' />
                                        </div>
                                     </div>
                                     <div className='col-12 pt-3 pb-2'>
                                            <textarea type='text' className=' address-form-textarea' placeholder='Address (Area and Street)' />
                                     </div>
                                     <div className="col-12 d-flex flex-wrap gap-3 ">
                                        <div className='col-lg-5 col-md-5 col-12'>
                                            <input type='text' className=' address-form-inpt' placeholder='City/District/Town' />
                                        </div>
                                        <div className='col-lg-5 col-md-5 col-12'>

                                            <select type='text' className=' address-form-inpt' placeholder='State' >
                                                <option selected>Select--</option>
                                                <option value="">Uttar Pradesh</option>
                                                <option value="">Delhi</option>
                                                
                                            </select>
                                        </div>
                                        <div className='col-lg-5 col-md-5 col-12'>
                                            <input type='text' className=' address-form-inpt' placeholder='Landmark (Optional)' />
                                        </div>
                                        <div className='col-lg-5 col-md-5 col-12'>
                                            <input type='text' className=' address-form-inpt' placeholder='Alternate Phone (Optional)' />
                                        </div>
                                     </div>
                                     <div className='col-12 pt-3'>
                                    <p className='text-muted'>Address Type</p>
                                    <div className='d-lg-flex d-md-flex d-block justify-content-start'>
                                      <div>  <input type='radio' name='address-type'  /> <span className='ps-2'>Home (All day delivery)</span></div>
                                      <div className='ps-lg-4 ps-0'>  <input type='radio' name='address-type'  /> <span className='ps-2'>Work (Delivery between 10 AM - 5 Pm)</span></div>
                                        
                                    </div>
                                     </div>
                                    </form>
                                </div>
                            </div>
                           )}
                          </div>
                         </div>
                          </div>
                   
                </div>
               <div className="col-lg-4 col-md-12 col-12 mb-lg-0 mb-md-0 mb-3">
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
                                <h5 className='mt-0 pt-0 '>Total Payable</h5>
                                <span className='text-success'><h5>₹1736</h5></span>
                             </div>
                             
                        </div>
                       </div>
                     </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default PlaceOrder;