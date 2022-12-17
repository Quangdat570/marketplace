import React from 'react'
import styles from '../../../styles/Home.module.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'
import { IoRocketOutline } from 'react-icons/io5'
import Carousel from 'react-bootstrap/Carousel';

const Trending = () => {
  return (
    <Container fluid className={styles.background}>
    <div className='container'>
      <div className='row'>
        <div className='col-12 pb-5'>
            <h3 className={styles.heading_trend}>Trending Collection</h3>
            <p className={styles.sub_heading_trend}>Checkout our weekly updated trending collection.</p>
        </div>
        <div className='col-12 col-sm-6  col-md-6 col-lg-4 mb-4'>
          <div className='col-12'>
            <div className={styles.card}>
              <div className={styles.card_image}>
                <Link href='/info'><img src='/homepages/trending 1.jpg' className={styles.img_trending}></img></Link>
              </div>
            </div>
          </div>
          <div className='col-12 d-flex mt-3'>
            <div className='col-4 d-flex justify-content-center align-items-center'>
              <div className={styles.card}>
                <div className={styles.card_image}>
                  <img src='/homepages/trending 2.jpg' className={styles.img_sub_trending}></img>
                </div>
              </div>
            </div>
            <div className='col-4 d-flex justify-content-center'>
            <div className={styles.card}>
                <div className={styles.card_image}>
                  <img src='/homepages/trending 3.jpg' className={styles.img_sub_trending}></img>
                </div>
              </div>
            </div>
            <div className='col-4 d-flex justify-content-center'>
            <div className={styles.card}>
                <div className={styles.card_image}>
                  <img src='/homepages/trending 2.jpg' className={styles.img_sub_trending}></img>
                </div>
              </div>
            </div>
          </div>
          <div className='collect-info pt-3 pb-3 ps-2 pe-2'>
            <div className={styles.collect_name}>
            DSGN Animals
            </div>
            <div className='d-flex gap-3 mt-2'>
             <img src='/homepages/avatar trend 1.jpg' className={styles.img_collect_name}></img>
             <div className={styles.sub_collect_name}>MrFox</div>
            </div>
          </div>

        </div>

        <div className='col-12 col-sm-6 col-md-6 col-lg-4 mb-4'>
          <div className='col-12'>
          <div className={styles.card}>
              <div className={styles.card_image}>
                <img src='/homepages/trending 4.jpg' className={styles.img_trending}></img>
              </div>
            </div>
          </div>
          <div className='col-12 d-flex mt-3'>
            <div className='col-4 d-flex justify-content-center'>
             <div className={styles.card}>
                <div className={styles.card_image}>
                  <img src='/homepages/trending 5.jpg' className={styles.img_sub_trending}></img>
                </div>
              </div>
            </div>
            <div className='col-4 d-flex justify-content-center'>
            <div className={styles.card}>
                <div className={styles.card_image}>
                  <img src='/homepages/trending 6.jpg' className={styles.img_sub_trending}></img>
                </div>
              </div>
            </div>
            <div className='col-4 d-flex justify-content-center'>
             <div className={styles.card}>
                <div className={styles.card_image}>
                  <img src='/homepages/trending 5.jpg' className={styles.img_sub_trending}></img>
                </div>
              </div>
            </div>
          </div>
          <div className='collect-info pt-3 pb-3 ps-2 pe-2'>
            <div className={styles.collect_name}>
            Magic Mushrooms
            </div>
            <div className='d-flex gap-3 mt-2'>
             <img src='/homepages/avatar trend 2.jpg' className={styles.img_collect_name}></img>
             <div className={styles.sub_collect_name}>Shroomie</div>
            </div>
          </div>

        </div>

        <div className='col-12 d-none d-lg-block col-lg-4 mb-4'>
          <div className='col-12'>
          <div className={styles.card}>
              <div className={styles.card_image}>
                <img src='/homepages/trendinng 7.jpg' className={styles.img_trending}></img>
              </div>
            </div>
          </div>
          <div className='col-12 d-flex mt-3'>
            <div className='col-4 d-flex justify-content-center'>
             <div className={styles.card}>
                <div className={styles.card_image}>
                  <img src='/homepages/trending 8.jpg' className={styles.img_sub_trending}></img>
                </div>
              </div>
            </div>
            <div className='col-4 d-flex justify-content-center'>
            <div className={styles.card}>
                <div className={styles.card_image}>
                  <img src='/homepages/trending 9.jpg' className={styles.img_sub_trending}></img>
                </div>
              </div>
            </div>
            <div className='col-4 d-flex justify-content-center'>
             <div className={styles.card}>
                <div className={styles.card_image}>
                  <img src='/homepages/trending 8.jpg' className={styles.img_sub_trending}></img>
                </div>
              </div>
            </div>
          </div>
          <div className='collect-info pt-3 pb-3 ps-2 pe-2'>
            <div className={styles.collect_name}>
            Disco Machines
            </div>
            <div className='d-flex gap-3 mt-2'>
             <img src='/homepages/avatar trend 3.jpg' className={styles.img_collect_name}></img>
             <div className={styles.sub_collect_name}>BeKind2Robots</div>
            </div>
          </div>

        </div>
      </div>

    </div>

  </Container>
  )
}

export default Trending