import React from 'react'
import styles from '../../../styles/Home.module.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'
import { IoRocketOutline } from 'react-icons/io5'
import Carousel from 'react-bootstrap/Carousel';

const HeroBanner = () => {
  return (
    <Container fluid className={styles.hero}>
      <div className="container">
        <Row className=''>
          <Col xs={{span:12, order:1}} sm={6} className={styles.margin}>
            <div className={styles.hero_text}>
              <div className={styles.heading_subhead}>
                <div className={styles.heading}>
                Discover digital art & Collect NFTs
                </div>
                <div className={styles.subhead}>
                NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                </div>
              </div>
              
            </div>
            <div className={styles.btn_mobile} >
                  <Link href='#' className={styles.btn_hero}>
                    <IoRocketOutline className=''/>
                    <span className='ps-3'>Get Started</span>
                  </Link>
            </div>
            <div className={styles.auditional_mobile}>
                <div className={styles.totalsale}>
                  <div className={styles.ending_hero}>
                  240k+
                  </div >
                  <div className={styles.name_audition}>
                  Total Sale
                  </div>
                </div>
                <div className={styles.auctions}>
                  <div className={styles.ending_hero}>
                  100k+
                  </div>
                  <div className={styles.name_audition}>
                  Auctions
                  </div>
                </div>
                <div className={styles.artists}>
                  <div className={styles.ending_hero}>
                  240k+
                  </div>
                  <div className={styles.name_audition}>
                  Artists
                  </div>
                </div>
              </div>
          </Col>
          <Col xs={{span:12, order:2}} sm={6}>
           
            <div className='hightlight mt-3'>
              <img src='homepages/hero banner.jpg' className={styles.img} />
              <div className={styles.name_img}>
              Space Walking
              </div>
              <div  className={styles.avatar}>
                <img src='/homepages/avatar hero.jpg' className={styles.avatar_hero}></img>
                <p className={styles.nameavatar}>
                Animakid
                </p>
              </div>
              
            </div>
          </Col>
          <Col xs={{span:12, order:3}} className='d-flex flex-column d-md-none'>
              <div className={styles.btn} >
                  <Link href='#' className={styles.btn_hero}>
                    <IoRocketOutline className=''/>
                    <span className='ps-3'>Get Started</span>
                  </Link>
              </div>
              <div className={styles.auditional}>
                <div className={styles.totalsale}>
                  <div className={styles.ending_hero}>
                  240k+
                  </div >
                  <div className={styles.name_audition}>
                  Total Sale
                  </div>
                </div>
                <div className={styles.auctions}>
                  <div className={styles.ending_hero}>
                  100k+
                  </div>
                  <div className={styles.name_audition}>
                  Auctions
                  </div>
                </div>
                <div className={styles.artists}>
                  <div className={styles.ending_hero}>
                  240k+
                  </div>
                  <div className={styles.name_audition}>
                  Artists
                  </div>
                </div>
              </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default HeroBanner