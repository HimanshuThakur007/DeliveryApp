import React, {useState} from 'react';
// import '../frontend/css/subProduct.css'
import '../Frontend/css/subProduct.css'
import * as BiIcons from 'react-icons/bi'
import * as RxIcons from 'react-icons/rx'
import * as BsIcons from 'react-icons/bs'
import {
    Product61,  Product62,Product63,Product64,Product65,Product66,Product67, Product68,Product29,     Product31,
    Product35,
    Product37,
    Product54,
    Product44,
    Product45,
    Product36,
    Product32,
    Product46,
    Product55,
    Product60,
    Product56,
    Product47,
    Product48,
    Product57,
    Product58,
    Product49,
    Product51,
    Product52,
    Product53, 
    banner1,
    banner2,
    banner3,
    banner4,
 pic1,pic2,pic4,pic7,pic8,pic9,pic10,pic11,pic13,pic14,pic15,image1,image2, image3
  } from "../../src/EntryFile/imagePath"

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import SubMenu from './layout/SubMenu';




const SubProductPage = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenGender, setIsOpenGender] = useState(false);
    const [rating, setRating]=useState(false)


    const history = useHistory()
// ---data of product card list------------------------
    var dataSub = [
        {
          id:1,
          name:"samsung Glaxy",
          image:`${pic10}`,
          price: '15000',
          dicp:"Lorem Ipsum Lorem",
          size:{
            s:'S',
            m:'M',
            l:'L',
            xl:'XL',
            xxl:'XXL'
          }
        },
        {
          id:2,
          name:"Iphone",
          image:`${pic9}`,
          price: '90000',
          dicp:"Lorem Ipsum Lorem",
          size:{
            s:'S',
            m:'M',
            l:'L',
            xl:'XL',
            xxl:'XXL'
          }
        },
        {
          id:3,
          name:"Realme 10 pro",
          image:`${pic13}`,
          price: '18000',
          dicp:"Lorem Ipsum Lorem",
          size:{
            s:'S',
            m:'M',
            l:'L',
            xl:'XL',
            xxl:'XXL'
          }
        },
        {
          id:4,
          name:"Printer",
          image:`${pic7}`,
          price: '1100',
          dicp:"Lorem Ipsum Lorem",
          size:{
            s:'S',
            m:'M',
            l:'L',
            xl:'XL',
            xxl:'XXL'
          }
        },
        {
          id:5,
          name:"PowerBank",
          image:`${pic4}`,
          price: '2000',
          dicp:"Lorem Ipsum Lorem",
          size:{
            s:'S',
            m:'M',
            l:'L',
            xl:'XL',
            xxl:'XXL'
          }
        },
        {
          id:6,
          name:"Puma Shoes",
          image:`${pic1}`,
          price: '15000',
          dicp:"Lorem Ipsum Lorem",
          size:{
            s:'S',
            m:'M',
            l:'L',
            xl:'XL',
            xxl:'XXL'
          }
        },
        {
          id:7,
          name:"Xparx",
          image:`${pic2}`,
          price: '2000',
          dicp:"Lorem Ipsum Lorem",
          size:{
            s:'S',
            m:'M',
            l:'L',
            xl:'XL',
            xxl:'XXL'
          }
        },
        {
          id:8,
          name:"samsung Glaxy",
          image:`${pic10}`,
          price: '15000',
          dicp:"Lorem Ipsum Lorem",
          size:{
            s:'S',
            m:'M',
            l:'L',
            xl:'XL',
            xxl:'XXL'
          }
        },
        {
          id:9,
          name:"Neckless",
          image:`${pic8}`,
          price: '15000',
          dicp:"Lorem Ipsum Lorem",
          size:{
            s:'S',
            m:'M',
            l:'L',
            xl:'XL',
            xxl:'XXL'
          }
        },
        {
          id:10,
          name:"Suit",
          image:`${pic14}`,
          price: '3000',
          dicp:"Lorem Ipsum Lorem",
          size:{
            s:'S',
            m:'M',
            l:'L',
            xl:'XL',
            xxl:'XXL'
          }
        },
        {
          id:11,
          name:"Tv",
          image:`${pic15}`,
          price: '15000',
          dicp:"Lorem Ipsum Lorem",
          size:{
            s:'S',
            m:'M',
            l:'L',
            xl:'XL',
            xxl:'XXL'
          }
        },
        {
            id:12,
            name:"samsung Glaxy",
            image:`${pic10}`,
            price: '15000',
            dicp:"Lorem Ipsum Lorem",
            size:{
              s:'S',
              m:'M',
              l:'L',
              xl:'XL',
              xxl:'XXL'
            }
          },
          {
            id:13,
            name:"Iphone",
            image:`${pic9}`,
            price: '90000',
            dicp:"Lorem Ipsum Lorem",
            size:{
              s:'S',
              m:'M',
              l:'L',
              xl:'XL',
              xxl:'XXL'
            }
          },
          {
            id:14,
            name:"Realme 10 pro",
            image:`${pic13}`,
            price: '18000',
            dicp:"Lorem Ipsum Lorem",
            size:{
              s:'S',
              m:'M',
              l:'L',
              xl:'XL',
              xxl:'XXL'
            }
          },
          {
            id:15,
            name:"Printer",
            image:`${pic7}`,
            price: '1100',
            dicp:"Lorem Ipsum Lorem",
            size:{
              s:'S',
              m:'M',
              l:'L',
              xl:'XL',
              xxl:'XXL'
            }
          },
          {
            id:16,
            name:"PowerBank",
            image:`${pic4}`,
            price: '2000',
            dicp:"Lorem Ipsum Lorem",
            size:{
              s:'S',
              m:'M',
              l:'L',
              xl:'XL',
              xxl:'XXL'
            }
          },
          {
            id:17,
            name:"Puma Shoes",
            image:`${pic1}`,
            price: '15000',
            dicp:"Lorem Ipsum Lorem",
            size:{
              s:'S',
              m:'M',
              l:'L',
              xl:'XL',
              xxl:'XXL'
            }
          },
          {
            id:18,
            name:"Xparx",
            image:`${pic2}`,
            price: '2000',
            dicp:"Lorem Ipsum Lorem",
            size:{
              s:'S',
              m:'M',
              l:'L',
              xl:'XL',
              xxl:'XXL'
            }
          },
          {
            id:19,
            name:"samsung Glaxy",
            image:`${pic10}`,
            price: '15000',
            dicp:"Lorem Ipsum Lorem",
            size:{
              s:'S',
              m:'M',
              l:'L',
              xl:'XL',
              xxl:'XXL'
            }
          },
          {
            id:20,
            name:"Neckless",
            image:`${pic8}`,
            price: '15000',
            dicp:"Lorem Ipsum Lorem",
            size:{
              s:'S',
              m:'M',
              l:'L',
              xl:'XL',
              xxl:'XXL'
            }
          },
          {
            id:21,
            name:"Suit",
            image:`${pic14}`,
            price: '3000',
            dicp:"Lorem Ipsum Lorem",
            size:{
              s:'S',
              m:'M',
              l:'L',
              xl:'XL',
              xxl:'XXL'
            }
          },
          {
            id:23,
            name:"Tv",
            image:`${pic15}`,
            price: '15000',
            dicp:"Lorem Ipsum Lorem",
            size:{
              s:'S',
              m:'M',
              l:'L',
              xl:'XL',
              xxl:'XXL'
            }
          },
     
      ]
      // ---------------------------------
      // const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
      const itemsPerPage = 10;

      //---------------dropdowns sidebar---------------------
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    const toggleAccordion2 = () => {
        setIsOpenGender(!isOpenGender);
    };
    const toggleAccordion3 = () => {
      setRating(!rating)
    }
  
  // Logic for calculating the current page's data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataSub.slice(indexOfFirstItem, indexOfLastItem);

  // Logic for handling page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Logic for handling previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Logic for handling next page
  const handleNextPage = () => {
    if (currentPage < Math.ceil(dataSub.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };








  return (
    <div className='content-wrapper'>
       <div className="row">
        <div className="col-12">
            {/* ---top---navbar--for sub product-------section 1-------------------- */}
            <div className="col-12 ">
           <SubMenu />
            </div>
            {/* --------for section- two------------------------- */}
            <div className="col-12 d-flex flex-wrap mt-2">
                {/* --for left filter section----- */}
               <div className="col-lg-2 col-md-12 col-12 filter-section ">
                 <div className=''>
                    <div><h3 className='ps-3 pt-3'>Filters</h3><hr></hr></div>
                    <div className='px-2'>
                       <div>
                        <button onClick={toggleAccordion} className='dropdown-custome d-flex justify-content-between'>
                          <h6>Computers</h6>
                          <span>{isOpen ? <RxIcons.RxCaretUp style={{height: '20px', width:'20px', color: 'blue'}} /> 
                          : <RxIcons.RxCaretDown style={{height: '20px', width:'20px', color: 'blue'}} />}
                          </span></button>
                        {isOpen && (
                            <div>
                                <ul>
                                    <li>Sony</li>
                                    <li>Dell</li>
                                    <li>Hp</li>
                                </ul>
                            </div>
                        )}
                        </div>
                        <hr></hr>
                    </div>
                    <div className='px-2'>
                       <div>
                        <button onClick={toggleAccordion2} className='dropdown-custome d-flex justify-content-between'><h6>Gender</h6><span>{isOpenGender ? <RxIcons.RxCaretUp style={{height: '20px', width:'20px', color: 'blue'}} /> : <RxIcons.RxCaretDown style={{height: '20px', width:'20px', color: 'blue'}} />}</span></button>
                        {isOpenGender && (
                            <div>
                                <ul>
                                    <li><input type='checkbox'  />Male</li>
                                    <li><input type='checkbox'  />Female</li>
                                    <li><input type='checkbox'  />Others</li>
                                </ul>
                            </div>
                        )}
                        </div>
                        <hr></hr>
                    </div>
                    <div className='px-2'>
                      <div >
                       <h6>Price</h6>
                       <div>
                       <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width:'50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                       </div>
                      </div>
                      <div className='d-flex justify-content-center pt-3'>
                        <div style={{width:'40%'}} className='me-4'> 
                          <select className='form-select'>
                             <option>Min</option>
                             <option>5%</option>
                             <option>10%</option>
                             <option>20%</option>
                             <option>30%</option>
                             <option>40%</option>
                             <option>50%</option>

                          </select>
                        </div>
                        <div style={{width:'50%'}}>
                          <select className='form-select'>
                             <option>₹250 </option>
                             <option>₹500</option>
                             <option>₹1000</option>
                             <option>₹2000</option>
                             <option>₹5000</option>
                             <option>₹10000</option>
                             <option>₹50000+</option>
                          </select>
                        </div>
                      </div>
                      <hr></hr>
                    </div>
                    <div className='px-2'>
                       <div>
                        <button onClick={toggleAccordion3} className='dropdown-custome d-flex justify-content-between'><h6>Customer Ratings</h6><span>{rating ? <RxIcons.RxCaretUp style={{height: '20px', width:'20px', color: 'blue'}} /> : <RxIcons.RxCaretDown style={{height: '20px', width:'20px', color: 'blue'}} />}</span></button>
                        {rating && (
                            <div>
                                <ul>
                                    <li><input type='checkbox'  /><span className='ps-2'><BsIcons.BsStarFill  style={{height:'15px', width:'15px'}}/></span><span className='ps-2'>& Above</span></li>
                                    <li><input type='checkbox'  /><span className='ps-2'><BsIcons.BsStarFill style={{height:'15px', width:'15px'}} /></span><span className='ps-2'>& Above</span></li>
                                </ul>
                            </div>
                        )}
                        </div>
                        <hr></hr>
                    </div>

                 </div>
               </div>
               {/* ---right product section--------- */}
               <div className="col-lg-10 col-md-12 col-12 product-list-section ">
                <div className='ms-lg-2 ms-0 product-list-inner p-3'>
                <div className='mb-3'>
                    <p>Home <span className='ps-2'>/ Computers</span></p>
                </div>
                <div>
                    <p>If you want to buy high-end computers with multitasking abilities or an entry-level one, you can find all options online on SFA. Look out for PCs with ample storage space, or enhanced computing speed, or high-end configuration. The high-end desktop models or premium laptops offer robust security and powerful performances built for superior durability. Coupled with high-performance processors and other enhanced features, most high-end desktop computers provide a fine balance between performance and price. Also, check out entry-level and mid-range level laptops for your daily needs with basic multi-tasking abilities. You can find the latest computers at best prices during Big Billion Days. Find out more</p>
                </div>
                 <h6>Category</h6> 
                 <div className='col-12'>
                    {/* here nvlink and no of products will show  */}
                    <div className='pt-3'>
                        <p>Computers(Showing 1 – 40 products of 1,559 products)</p>
                    </div>
                    {/* --for product cards list showing------------------------------- */}
                    <div className='col-12 mb-3'>
                    <div className="col-12 d-flex justify-content-center pb-3 ">
                     <div className="row  row-cols-lg-5 row-cols-md-2 row-cols-1 g-lg-2 g-md-4 g-4 w-100">
                  {currentItems.map((items, id) => {
                  return (
                    <>
                      <div className="col pt-lg-2 pt-md-0 pt-0">
                     {/*  onClick={() => history.push(`${match.url}/productDetail`)} */}
                        <button type="button" className="p-0" style={{outline:'none', border:'none',background:'none' }}  onClick={() => console.log(history.push(`${match.url}/productDetail`), "vivekekek")} >
                       
                        <div className="subproduct-card  ps-2 pe-2 pt-3  " key={id} style={{background:`${items.background}`}}>
                          <div className="d-flex justify-content-center  pt-lg-0 pt-2 mt-0 ps-0">
                              <img  className="immage-crd-sub " src={items.image} alt="images dashboard" />
                              <span className='ps-2'><BiIcons.BiHeart style={{color:'gray', height:'22px', width:'22px'}}/></span>
                          </div>
                        
                          <div className="admin-card-title pb-0 mb-0 d-flex flex-wrap">
                          <div className="col-12 d-flex justify-content-center">
                            <p  className="mb-0 pt-3">
                              <b>{items.name}</b>
                            </p>
                          </div>
                          <div className="col-12 d-flex justify-content-center pt-0">
                              <p  className="mb-0 pt-1 ">
                              <b className="text-success">{items.price}<span className="ps-1">₹</span></b>
                              </p>
                          </div>
                          <div className="col-12 d-flex justify-content-center pt-0">
                              <p  className="mb-0  pt-0 text-muted">
                              {items.dicp}
                              </p>
                          </div>
                            <div className="col-12 d-flex justify-content-center pt-0">
                               <span className='px-2'><span>Size:</span> 
                                    <span className='px-2'>{items.size.s}</span>
                                    <span className='px-2'>{items.size.m}</span>
                                    <span className='px-2'>{items.size.l}</span>
                                    <span className='px-2'>{items.size.xl}</span>
                                    <span className='px-2'>{items.size.xll}</span>
                               </span>
                            </div>
                          </div>
                        
                        </div>
                        </button>
                      </div>
                    </>
                  );
                })}
                    </div>
                </div>
                    </div>

                    <div className="col-12 d-flex justify-content-center pt-3 pb-3">
               <div>
                  <button onClick={handlePreviousPage} className='pagination-button-prev'>Previous</button>
                    {dataSub.map((item, index) => (
                      <button key={index} onClick={() => handlePageChange(index + 1)} className='pagination-button'>
                        {index + 1}
                      </button>
                    ))}
                  <button onClick={handleNextPage } className='pagination-button-next'>Next</button>
                </div>
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

export default SubProductPage