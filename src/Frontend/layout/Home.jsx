import React, {useRef} from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../css/home.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
    Product61,  Product62,Product63,Product64,Product65,Product66,Product67, Product68,Product29,  Product31,
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
  } from "../../EntryFile/imagePath";
  



const Home = ({match}) => {
  const sliderRef = useRef(null);
 const history = useHistory();

  const data = [
    {
      id:1,
      name:"samsung Glaxy",
      image:`${pic10}`,
      price: '15000',
      dicp:"Lorem Ipsum Lorem"
    },
    {
      id:2,
      name:"Iphone",
      image:`${pic9}`,
      price: '90000',
      dicp:"Lorem Ipsum Lorem"
    },
    {
      id:3,
      name:"Realme 10 pro",
      image:`${pic13}`,
      price: '18000',
      dicp:"Lorem Ipsum Lorem"
    },
    {
      id:4,
      name:"Printer",
      image:`${pic7}`,
      price: '1100',
      dicp:"Lorem Ipsum Lorem"
    },
    {
      id:5,
      name:"PowerBank",
      image:`${pic4}`,
      price: '2000',
      dicp:"Lorem Ipsum Lorem"
    },
    {
      id:6,
      name:"Puma Shoes",
      image:`${pic1}`,
      price: '15000',
      dicp:"Lorem Ipsum Lorem"
    },
    {
      id:7,
      name:"Xparx",
      image:`${pic2}`,
      price: '2000',
      dicp:"Lorem Ipsum Lorem"
    },
    {
      id:8,
      name:"samsung Glaxy",
      image:`${pic10}`,
      price: '15000',
      dicp:"Lorem Ipsum Lorem"
    },
    {
      id:9,
      name:"Neckless",
      image:`${pic8}`,
      price: '15000',
      dicp:"Lorem Ipsum Lorem"
    },
    {
      id:10,
      name:"Suit",
      image:`${pic14}`,
      price: '3000',
      dicp:"Lorem Ipsum Lorem"
    },
    {
      id:11,
      name:"Tv",
      image:`${pic15}`,
      price: '15000',
      dicp:"Lorem Ipsum Lorem"
    },
 
  ]

  const cardSec2 = [
    {
      id:1,
      image:`${image1}`
    },
    {
      id:2,
      image:`${image2}`
    },
    {
      id:3,
      image:`${image3}`
    }
  ]

 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
     speed:300,
    infinite:true,
    prevArrow: (
      <button className="slick-arrow slick-prev" onClick={previousSlide}>
        Previous
      </button>
    ),
    nextArrow: (
      <button className="slick-arrow slick-next" onClick={nextSlide}>
        Next
      </button>
    ),
   
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };


  return (
    <div className="col-lg-12 col-sm-12 tabs_wrapper">
        {/* ----------category list section----------------------- */}
        <ul className=" tabs owl-carousel owl-theme owl-product  border-0 position-relative  ">
        <OwlCarousel
          className="owl-theme"
          items={8}
          margin={10}
          dots={false}
          nav
        >
          <li id="fruits" className="item-box active">
            <div className="product-details-item ">
              <img src={Product62} alt="img" style={{height:'50px', width:'80px'}} />
              <h6>Fruits</h6>
            </div>
          </li>
          <li id="headphone" className="item-box ">
            <div className="product-details-item ">
              <img src={Product63} alt="img" style={{height:'50px', width:'80px'}}/>
              <h6>Headphones</h6>
            </div>
          </li>
          <li id="Accessories" className="item-box ">
            <div className="product-details-item">
              <img src={Product64} alt="img" style={{height:'50px', width:'80px'}}/>
              <h6>Accessories</h6>
            </div>
          </li>
          <li id="Shoes" className="item-box">
            <Link to="#" className="product-details-item">
              <img src={Product65} alt="img" style={{height:'50px', width:'80px'}}/>
              <h6>Shoes</h6>
            </Link>
          </li>
          <li id="computer" className="item-box">
            <Link to="#" className="product-details-item">
              <img src={Product66} alt="img" style={{height:'50px', width:'80px'}} />
              <h6>Computer</h6>
            </Link>
          </li>
          <li id="Snacks" className="item-box">
            <Link to="#" className="product-details-item">
              <img src={Product67} alt="img" style={{height:'50px', width:'80px'}} />
              <h6>Snacks</h6>
            </Link>
          </li>
          <li id="watch" className="item-box">
            <Link to="#" className="product-details-item">
              <img src={Product68} alt="img" style={{height:'50px', width:'80px'}} />
              <h6>Watches</h6>
            </Link>
          </li>
          {/* <li id="cycle" className="item">
            <Link to="#" className="product-details">
              <img src={Product61} alt="img" />
              <h6>Cycles</h6>
            </Link>
          </li>
          <li id="fruits1" className="item">
            <div className="product-details ">
              <img src={Product62} alt="img" />
              <h6>Fruits</h6>
            </div>
          </li>
          <li id="headphone1" className="item">
            <div className="product-details ">
              <img src={Product63} alt="img" />
              <h6>Headphones</h6>
            </div>
          </li> */}
        </OwlCarousel>
      </ul>
      {/* --------react responsive carousel------------------------ */}
      <div className="mx-3 mt-0 ">
        <div className="col-12 position-relative mb-0 ">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{height:'40vh'}}>
      {/* <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div> */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100" alt="..." style={{height:'40vh'}} />
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="..." style={{height:'40vh'}} />
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="..."style={{height:'40vh'}} />
        </div>
        <div className="carousel-item">
          <img src={banner4} className="d-block w-100" alt="..."style={{height:'40vh'}} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
          </div>
        </div>
          {/* ---card section--------one------------ */}
          <div className="col-12 position-relative card-wrapper mt-2">
                <div className="col-12 d-flex justify-content-center pb-3 ">
                <div className="row  row-cols-lg-5 row-cols-md-2 row-cols-1 g-lg-4 g-md-4 g-4 w-100">
                  {data.map((items, id) => {
                  return (
                    <>
                      <div className="col pt-lg-2 pt-md-0 pt-0">
                        <button type="button" className="p-0" style={{outline:'none', border:'none',background:'none' }} onClick={() => history.push(`${match.url}/subproducts`)}>
                       
                        <div className="dashboard-card  ps-3 pe-3 pt-3  " key={id} style={{background:`${items.background}`}}>
                          <div className="d-flex justify-content-center  pt-lg-0 pt-2 mt-0 ps-0">
                              <img  className="immage-crd " src={items.image} alt="images dashboard" />
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
      
          </div>

          <div className="row">
                {/* ------cards section----- Two------------------------------------ */}
          <div className="col-12 position-relative  ">
                <div className="col-12 d-flex justify-content-center pb-3 ">
                <div className="row  row-cols-lg-3 row-cols-md-2 row-cols-1 g-lg-4 g-md-4 g-4 w-100">
                  {cardSec2.map((items, id) => {
                  return (
                    <>
                      <div className="col pt-lg-3 pt-md-0 pt-0">
                        <div className="dashboard-card-two pt-0  " key={id} style={{background:`${items.background}`}}>
                          <div className="d-flex justify-content-center  pt-lg-0 pt-2 mt-0 ps-0">
                              <img  className="immage-crd-two " src={items.image} alt="images dashboard" />  
                          </div>
                        
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
                </div>
          </div>
          </div>
          {/* -----slick silder --section---------------- */}
           <div className="row">
           <div className="col-12 position-relative  pb-5 mb-3" style={{background:'#fff', cursor:'pointer'}}>
              <Slider  ref={sliderRef} {...settings}>
                <div className="d-flex justify-content-center">
                <img src={pic1}  alt="slider image" className="slider-images"/>
                </div>
                <div className="d-flex justify-content-center">
                <img src={pic2}  alt="slider image" className="slider-images" />
                </div>
                <div className="d-flex justify-content-center">
                <img src={pic4}  alt="slider image" className="slider-images"/>
                </div>
                <div className="d-flex justify-content-center">
                <img src={pic7}  alt="slider image" className="slider-images"/>
                </div>
                <div className="d-flex justify-content-center">
                <img src={pic8}  alt="slider image" className="slider-images"/>
                </div>
                <div className="d-flex justify-content-center">
                <img src={pic9}  alt="slider image" className="slider-images"/>
                </div>
                <div className="d-flex justify-content-center">
                <img src={pic10}  alt="slider image" className="slider-images"/>
                </div>
                <div className="d-flex justify-content-center">
                <img src={pic15}  alt="slider image" className="slider-images"/>
                </div>
                <div className="d-flex justify-content-center">
                <img src={pic14}  alt="slider image" className="slider-images"/>
                </div>
  
              </Slider>
         {/* <div>
          <button type="button" onClick={previousSlide}>Previous</button>
          <button type="button" onClick={nextSlide}>next</button>
         </div> */}
          </div>
           </div>

    </div>
  );
};

export default Home;
