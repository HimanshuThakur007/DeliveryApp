import React, {useState} from 'react'
import SubMenu from './layout/SubMenu';
import './css/productDetail.css';
import * as TbIcons from 'react-icons/tb'
import * as BiIcons from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as BsIcons from 'react-icons/bs'
import * as RiIcons from 'react-icons/ri'







var images =[
        
  {id:1, pic:'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/j/o/u/-original-imaghvb6pxynaurx.jpeg?q=70'},
  {id:2, pic:'https://rukminim1.flixcart.com/image/832/832/l0fm07k0/shoe/7/o/r/8-390143-8-puma-black-bright-rose-original-imagc7vezdcfwgah.jpeg?q=70'},
  {id:3,pic:'https://rukminim1.flixcart.com/image/832/832/l0fm07k0/shoe/f/2/b/8-390143-8-puma-black-bright-rose-original-imagc7ve6dsn5vsj.jpeg?q=70'},
  {id:4, pic:'https://rukminim1.flixcart.com/image/832/832/l0fm07k0/shoe/i/7/z/8-390143-8-puma-black-bright-rose-original-imagc7vehzan3gsh.jpeg?q=70'},
  {id:5,pic:'https://rukminim1.flixcart.com/image/832/832/l0fm07k0/shoe/n/f/d/8-390143-8-puma-black-bright-rose-original-imagc7veyygtnxva.jpeg?q=70'},
  {id:6, pic:'https://rukminim1.flixcart.com/image/832/832/l0fm07k0/shoe/k/x/r/8-390143-8-puma-black-bright-rose-original-imagc7ver72hkckc.jpeg?q=70'},
  {id:7,pic:'https://rukminim1.flixcart.com/image/832/832/l0fm07k0/shoe/a/j/k/8-390143-8-puma-black-bright-rose-original-imagc7veua938t5r.jpeg?q=70'},
  {id:8,pic:'https://rukminim1.flixcart.com/image/832/832/l2ghgnk0/shoe/y/s/a/8-390143-8-puma-black-bright-rose-original-imagdsqpsddbrnaj.jpeg?q=70'},
]
var availableOffer=[
  {id:1,one:'Flat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999'},
  {id:2,one:'Flat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹40,000 to ₹49,999'},
  {id:3,one:'Flat ₹4,000 Off on HDFC Bank Credit Card EMI Transactions on orders of ₹50,000 and above'},
  {id:4, one:'Flat ₹4,000 Off on HDFC Bank Credit Card EMI Transactions on orders of ₹50,000 and above'},
  {id:5,one:'Flat ₹4,000 Off on HDFC Bank Credit Card EMI Transactions on orders of ₹50,000 and above'},
  {id:6, one:'Flat ₹4,000 Off on HDFC Bank Credit Card EMI Transactions on orders of ₹50,000 and above'},
  {id:7,one:'Flat ₹4,000 Off on HDFC Bank Credit Card EMI Transactions on orders of ₹50,000 and above'},
  {id:8,one:'Flat ₹4,000 Off on HDFC Bank Credit Card EMI Transactions on orders of ₹50,000 and above'},
]
const ProductDetail = () => {
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedImages, setDisplayedImages] = useState(images.slice(0, 5));
  const [visibleItems, setVisibleItems] = useState(availableOffer.slice(0, 3));
  const [isExpanded, setIsExpanded] = useState(false);






  const Product = [
    {
      id:1,
      name:"Puma Shoes",
      brand:'PUMA',
      desc:'Crafty Wns Sneakers For Women  (Black)',
      price:'₹10000',
      offers: '30%',
      rating:'4.5',
      totalRating:'400',
      image:[
        
        {id:1, pic:'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/j/o/u/-original-imaghvb6pxynaurx.jpeg?q=70'},
        {id:2, pic:'https://rukminim1.flixcart.com/image/832/832/l0fm07k0/shoe/7/o/r/8-390143-8-puma-black-bright-rose-original-imagc7vezdcfwgah.jpeg?q=70'},
        {id:3,pic:'https://rukminim1.flixcart.com/image/832/832/l0fm07k0/shoe/f/2/b/8-390143-8-puma-black-bright-rose-original-imagc7ve6dsn5vsj.jpeg?q=70'},
        {id:4, pic:'https://rukminim1.flixcart.com/image/832/832/l0fm07k0/shoe/i/7/z/8-390143-8-puma-black-bright-rose-original-imagc7vehzan3gsh.jpeg?q=70'},
        {id:5,pic:'https://rukminim1.flixcart.com/image/832/832/l0fm07k0/shoe/n/f/d/8-390143-8-puma-black-bright-rose-original-imagc7veyygtnxva.jpeg?q=70'},
        {id:6, pic:'https://rukminim1.flixcart.com/image/832/832/l0fm07k0/shoe/k/x/r/8-390143-8-puma-black-bright-rose-original-imagc7ver72hkckc.jpeg?q=70'},
        {id:7,pic:'https://rukminim1.flixcart.com/image/832/832/l0fm07k0/shoe/a/j/k/8-390143-8-puma-black-bright-rose-original-imagc7veua938t5r.jpeg?q=70'},
        {id:8,pic:'https://rukminim1.flixcart.com/image/832/832/l2ghgnk0/shoe/y/s/a/8-390143-8-puma-black-bright-rose-original-imagdsqpsddbrnaj.jpeg?q=70'},
      ],
      availableOffer:[
        {id:1,one:'Flat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999'},
        {id:2,one:'Flat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹40,000 to ₹49,999'},
        {id:3,one:'Flat ₹4,000 Off on HDFC Bank Credit Card EMI Transactions on orders of ₹50,000 and above'},
        {id:4, one:'Flat ₹4,000 Off on HDFC Bank Credit Card EMI Transactions on orders of ₹50,000 and above'},
        {id:5,one:'Flat ₹4,000 Off on HDFC Bank Credit Card EMI Transactions on orders of ₹50,000 and above'},
        {id:6, one:'Flat ₹4,000 Off on HDFC Bank Credit Card EMI Transactions on orders of ₹50,000 and above'},
        {id:7,one:'Flat ₹4,000 Off on HDFC Bank Credit Card EMI Transactions on orders of ₹50,000 and above'},
        {id:8,one:'Flat ₹4,000 Off on HDFC Bank Credit Card EMI Transactions on orders of ₹50,000 and above'},
      ],
    size:[
    {id:1, Size:''}
    ]
    }
  ]

//---------------for small image  show-----------------------------
 const handleNext = () => {
    const newIndex = currentIndex + 1;
    if (newIndex <= images.length - 5) {
      setCurrentIndex(newIndex);
      setDisplayedImages(images.slice(newIndex, newIndex + 5));
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
      setDisplayedImages(images.slice(newIndex, newIndex + 5));
    }
  };

  // ----------loadmore logic for ---offers--------------------------------------
    const handleLoadMore = () => {
      const nextIndex = visibleItems.length + 3;
      const nextItems = availableOffer.slice(0, nextIndex);
      setVisibleItems(nextItems);
      setIsExpanded(true);
    };

    const handleLoadLess = () => {
      const nextItems = availableOffer.slice(0, 3);
      setVisibleItems(nextItems);
      setIsExpanded(false);
    };


  return (
    <div className='conatiner-fluid'>
      <div className="row">
        {/* -----------------------sub menu --------------------------------- */}
      <div className='col-12'>
         <SubMenu />
        </div>
        <div className="col-12 d-flex justify-content-center">
        {/* ----for content product detail------------------------------------- */}
           <div className="col-lg-10 col-12 d-flex flex-wrap">
            {/* --for image----- -------*/}
            <div className="col-lg-5 col-md-12 col-12 order-1 d-flex product-image-box">
              <div className="col-lg-2 col-md-2 col-3 p-2 ">
                    <div>
                      <button onClick={handlePrevious} disabled={currentIndex === 0} className='previous-bttn'>
                          <RiIcons.RiArrowUpSFill />
                        </button>
                    </div>
                      <div    className="product-item">
                        {
                         displayedImages.map((images, id) => {
                          
                            return(
                              <>
                              <div key={id} className='small-image-show '>
                              <img src={images.pic} alt='images' className='multi-images' />
                              </div>
                              </>
                            )
                          })
                        }
                      </div>
                  
                   <div className="controls">
                  <button onClick={handleNext} disabled={currentIndex >= images.length - 5} className='next-bttn'>
                    <RiIcons.RiArrowDownSFill />
                  </button>
                </div>
              </div>
              <div className="col-lg-10 col-md-10 col-9 p-3 image-show-box">
                <div>
                  <div className='wishlist-box'>
                    <div className='wishlist-inner-box'>
                   <span className='text-muted'><button className='button-style'><BiIcons.BiHeart style={{height:'20px', width:'20px'}} /></button></span>
                    </div>
                  </div>
                  <div className='image-style-box'>
                  <span className='pt-lg-5 pt-3'>
                  <img src={'https://rukminim1.flixcart.com/image/832/832/l0fm07k0/shoe/f/2/b/8-390143-8-puma-black-bright-rose-original-imagc7ve6dsn5vsj.jpeg?q=70' }  alt='image-of-product' className='larger-image-show'/>
                  
                  </span>
                  </div>
                  {/* ---button------------- */}
                   <div className='d-flex flex-wrap justify-content-center mt-5 pt-lg-5 pt-md-3 pt-0'>
                     <div className='col-lg-6 col-md-6 col-12'>
                      <button className='add-cart-btn'><span><IoIcons.IoMdCart  style={{color:'white', height:'20px', width:'20px'}}/></span>ADD TO CART</button>
                     </div>
                     <div className='col-lg-6 col-md-6 col-12 pt-lg-0 pt-md-0 pt-3'>
                      <button className='buy-now-btn'><span><BsIcons.BsLightningFill  style={{color:'white', height:'20px', width:'20px'}}/></span>BUY NOW</button>
                     </div>
                   </div>
                </div>
              </div>
            </div>
            {/* --for product deail----- */}
            <div className="col-lg-7 col-md-12 col-12 order-2 p-3 product-detail-box">
              {/* --for route links---------------------------- */}
              <div className='d-flex justify-content-between'>
               <div>
               <span>Home /</span><span>subproduct/</span><span>ProductDetail/Puma</span>
               </div>
               <div><button className='button-style'>Share<span className='ps-2'><TbIcons.TbShare3 style={{height:'20px', width:'20px'}} /></span></button></div>
              </div>
              {/* ----detail section------------------------------ */}
              {
               Product.map((item) => {
                 return(
                  <>
                   <div>
                    <h5 className='pt-3 text-muted'>{item.brand}</h5>
                    <h6 className=''>{item.desc}</h6>
                    <div className='d-flex'>
                      <h2>{item.price}</h2>
                      <span className='d-flex text-success ps-4 pt-2'><p className='pe-3'>{item.offers}</p> off</span>
                    </div>
                    {/* ---rating------- */}
                    <div className='pt-3  '>
                      <span className='rating-box text-white'>{item.rating}<span className='ps-1'><AiIcons.AiFillStar style={{height:'10px', width:'10px'}} /></span></span>
                      <span className='ps-3 rating-txt'>{item.totalRating} Rating and 10 Review</span>
                    </div>
                    {/* ----offers--------- */}
                    <div className='pt-3'>
                      <h6>Available offers</h6>
                      {
                        visibleItems.map((offer, id ) => {
                          return(
                            <>
                            <div key={id}>
                              <span className='offer-txt d-flex'><b className='pe-2'>Bank Offer</b><p>{offer.one}</p><span className='text-primary ps-2'>T&C</span>        
                              </span>
                           
                            </div>
                           
                            </>
                          )
                        })
                      }
                          {!isExpanded && availableOffer.length > 3 && (
                                <button onClick={handleLoadMore} className='load-more-btn'>Load More</button>
                              )}
                              {isExpanded && (
                                <button onClick={handleLoadLess} className='load-less-btn'>Load Less</button>
                              )}
                    </div>
               
                   </div>
                  </>
                 )
               }) 
              }
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail