import React , {useRef,useState} from 'react'
// import { Paper,Button,Card,CardMedia } from '@mui/material'
import { Container, Row, Col, Card, CardGroup, Carousel, Ratio, Image, Stack } from 'react-bootstrap'
// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import styles from '../../../styles/marketcss/slidercollection.module.css'
import { BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill } from 'react-icons/bs'
import { IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
// import { SmoothHorzion } from './ulti';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Autoplay, Pagination,Navigation } from "swiper";








const SliderColection = ({data}) => {
    // const swiperProps = {
    //     modules: [Navigation, Pagination],
    //     spaceBetween: 24,
    //     slidesPerView: 4,
    //     navigation: true,
    // };
   
   
  return (
  <>
  

    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Autoplay]}
        className={styles.myswiper}
      >
        {data.map((product) => (

            <div className={styles.slider} key={product.id}>
                <SwiperSlide  className={styles.movie_item} >
                    <img src={product.thumbnail} alt="" />
                </SwiperSlide>
            </div>

        ))}
        
      </Swiper>

   
  
  </>
  )}

export default SliderColection