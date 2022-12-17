import React from 'react'
import styles from '../../../styles/Home.module.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'
import { IoRocketOutline } from 'react-icons/io5'
import Carousel from 'react-bootstrap/Carousel';

const Creator = ({games}) => {
    
  return (
    <Container fluid className={styles.background}>
    <div className='container pt-5'>
      <div className='row'>
          <div className='col-12 '>
            <div className='d-flex align-items-end justify-content-between mb-5 '>
              <div className={styles.head_creator}>
                <h3>Top creators</h3>
                <div className={styles.sub_heading_creator}>Checkout Top Rated Creators on the NFT Marketplace</div>
              </div>
              <div>
                <Link href='#'  className={styles.btn_creator_box}>
                    <div className={styles.logo_btn_creator}> <IoRocketOutline/> </div>
                    <span className={styles.btn_creator}>View Rankings</span>
                </Link>
              </div>

            </div>
          </div>
         
         {games.map(  item=>(

          
          <Col xs={12} md={6} lg={3} className='mb-3' >
          <div className={styles.card_creator}>
            <Card className={styles.bg_avatar}>
              <Card.Img src={item.thumbnail} className={styles.img_avatar}></Card.Img>
              <div className='d-flex flex-column '>
                    <div className={styles.name_avatar_creator}>{item.title}</div>
                    <div className='d-flex gap-2 align-items-center justify-content-center'>
                      <div className={styles.total}>Total Sales:</div>
                      <div className={styles.price}>34.53 ETH</div>
                    </div>
                  </div>
            </Card>
          </div>

          </Col>


         )
          
          
          
          )}

          

          {/* <Col xs={12} md={6} lg={3} className='mb-3'>
          <Card className={styles.bg_avatar}>
            <Card.Img src='/homepages/Avatar 2.jpg' className={styles.img_avatar}></Card.Img>
            <div className='d-flex flex-column '>
                  <div className={styles.name_avatar_creator}>DigiLab</div>
                  <div className='d-flex gap-2 align-items-center justify-content-center'>
                    <div className={styles.total}>Total Sales:</div>
                    <div className={styles.price}>34.53 ETH</div>
                  </div>
                </div>
          </Card>

          </Col> */}

          {/* <Col xs={12} md={6} lg={3} className='mb-3'>
          <Card className={styles.bg_avatar}>
            <Card.Img src='/homepages/Avatar 3.jpg' className={styles.img_avatar}></Card.Img>
            <div className='d-flex flex-column '>
                  <div className={styles.name_avatar_creator}>GravityOne</div>
                  <div className='d-flex gap-2 align-items-center justify-content-center'>
                    <div className={styles.total}>Total Sales:</div>
                    <div className={styles.price}>34.53 ETH</div>
                  </div>
                </div>
          </Card>

          </Col> */}

          {/* <Col xs={12} md={6} lg={3} className='mb-3'>
          <Card className={styles.bg_avatar}>
            <Card.Img src='/homepages/Avatar 4.jpg' className={styles.img_avatar}></Card.Img>
            <div className='d-flex flex-column '>
                  <div className={styles.name_avatar_creator}>Juanie</div>
                  <div className='d-flex gap-2 align-items-center justify-content-center'>
                    <div className={styles.total}>Total Sales:</div>
                    <div className={styles.price}>34.53 ETH</div>
                  </div>
                </div>
          </Card>

          </Col> */}

          {/* <Col xs={12} md={6} lg={3} className='mb-3'>
          <Card className={styles.bg_avatar}>
            <Card.Img src='/homepages/Avatar 5.jpg' className={styles.img_avatar}></Card.Img>
            <div className='d-flex flex-column '>
                  <div className={styles.name_avatar_creator}>BlueWhale</div>
                  <div className='d-flex gap-2 align-items-center justify-content-center'>
                    <div className={styles.total}>Total Sales:</div>
                    <div className={styles.price}>34.53 ETH</div>
                  </div>
                </div>
          </Card>

          </Col> */}

          {/* <Col xs={12} md={6} lg={3} className='mb-3'>
          <Card className={styles.bg_avatar}>
            <Card.Img src='/homepages/Avatar 6.jpg' className={styles.img_avatar}></Card.Img>
            <div className='d-flex flex-column '>
                  <div className={styles.name_avatar_creator}>Mr Fox</div>
                  <div className='d-flex gap-2 align-items-center justify-content-center'>
                    <div className={styles.total}>Total Sales:</div>
                    <div className={styles.price}>34.53 ETH</div>
                  </div>
                </div>
          </Card>

          </Col> */}

          {/* <Col xs={12} md={6} lg={3} className='mb-3'>
          <Card className={styles.bg_avatar}>
            <Card.Img src='/homepages/Avatar 7.jpg' className={styles.img_avatar}></Card.Img>
            <div className='d-flex flex-column '>
                  <div className={styles.name_avatar_creator}>Shroomie</div>
                  <div className='d-flex gap-2 align-items-center justify-content-center'>
                    <div className={styles.total}>Total Sales:</div>
                    <div className={styles.price}>34.53 ETH</div>
                  </div>
                </div>
          </Card>

          </Col> */}

          {/* <Col xs={12} md={6} lg={3} className='mb-3'>
          <Card className={styles.bg_avatar}>
            <Card.Img src='/homepages/Avatar 8.jpg' className={styles.img_avatar}></Card.Img>
            <div className='d-flex flex-column '>
                  <div className={styles.name_avatar_creator}>Robotica</div>
                  <div className='d-flex gap-2 align-items-center justify-content-center'>
                    <div className={styles.total}>Total Sales:</div>
                    <div className={styles.price}>34.53 ETH</div>
                  </div>
                </div>
          </Card>

          </Col> */}

          {/* <Col xs={12} md={6} lg={3} className='mb-3'>
          <Card className={styles.bg_avatar}>
            <Card.Img src='/homepages/Avatar 9.jpg' className={styles.img_avatar}></Card.Img>
            <div className='d-flex flex-column '>
                  <div className={styles.name_avatar_creator}>RustyRobot</div>
                  <div className='d-flex gap-2 align-items-center justify-content-center'>
                    <div className={styles.total}>Total Sales:</div>
                    <div className={styles.price}>34.53 ETH</div>
                  </div>
                </div>
          </Card>

          </Col> */}

          {/* <Col xs={12} md={6} lg={3} className='mb-3'>
          <Card className={styles.bg_avatar}>
            <Card.Img src='/homepages/Avatar 10.jpg' className={styles.img_avatar}></Card.Img>
            <div className='d-flex flex-column '>
                  <div className={styles.name_avatar_creator}>Animakid</div>
                  <div className='d-flex gap-2 align-items-center justify-content-center'>
                    <div className={styles.total}>Total Sales:</div>
                    <div className={styles.price}>34.53 ETH</div>
                  </div>
                </div>
          </Card>

          </Col> */}

          {/* <Col xs={12} md={6} lg={3} className='mb-3'>
          <Card className={styles.bg_avatar}>
            <Card.Img src='/homepages/Avatar 11.jpg' className={styles.img_avatar}></Card.Img>
            <div className='d-flex flex-column '>
                  <div className={styles.name_avatar_creator}>Dotgu</div>
                  <div className='d-flex gap-2 align-items-center justify-content-center'>
                    <div className={styles.total}>Total Sales:</div>
                    <div className={styles.price}>34.53 ETH</div>
                  </div>
                </div>
          </Card>

          </Col> */}

          {/* <Col xs={12} md={6} lg={3} className='mb-3'>
          <Card className={styles.bg_avatar}>
            <Card.Img src='/homepages/Avatar 12.jpg' className={styles.img_avatar}></Card.Img>
            <div className='d-flex flex-column '>
                  <div className={styles.name_avatar_creator}>Ghiblier</div>
                  <div className='d-flex gap-2 align-items-center justify-content-center'>
                    <div className={styles.total}>Total Sales:</div>
                    <div className={styles.price}>34.53 ETH</div>
                  </div>
                </div>
          </Card>

          </Col> */}
      </div>

    </div>
  </Container>
  )
}

export default Creator


