import React from 'react'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'
import styles from '../../../styles/homecss/discover.module.css'
import  { AiOutlineEye } from 'react-icons/ai'

const Discover = () => {
  return (
    <Container fluid className={styles.background}>
        <div className="container">
            <Row>
                <Col xs={12}>
                <div className="heading-button d-flex align-items-end justify-content-between pb-4">
                    <div className="headline ">
                        <div className={styles.discover_more}>Discover More Nfts</div>
                        <div className={styles.explore_trending}>Explore New Trending Nfts</div>
                    </div>
                    <div className='d-none d-sm-flex'>
                        <Link href='' className={styles.swapper_button}>
                            <div className={styles.icon_eye}>
                                <AiOutlineEye/>
                            </div>
                            <div className={styles.button}>See All</div>
                        </Link>
                    </div>
                </div>
                </Col>
                <Col xs={12} sm={6} lg={4}>
                <Card className={styles.card}>
                    <div className={styles.card_image}>
                        <Card.Img variant="top" src="/homepages/discover 1.jpg"/>
                    </div>
                    <Card.Body className='ps-4 pe-4'>
                        <Card.Title className={styles.title}>Distant Galaxy</Card.Title>
                        <div className='d-flex gap-3 pb-4 pt-1'>
                           <img src="homepages/avatar trend 1.jpg" alt="" className={styles.img_discover} />
                           <div className={styles.name_avatar}>NFT Artist</div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className={styles.discover_price}>
                                <div className={styles.name_price}>Price</div>
                                <div className={styles.price}>1.63 ETH</div>
                            </div>
                            <div className="highness">
                                <div className={styles.name_highness}>Highest Bid</div>
                                <div className={styles.price_highness}>0.33 wETH</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                </Col>

                <Col xs={12} sm={6} lg={4}>
                <Card className={styles.card}>
                    <div className={styles.card_image}>
                        <Card.Img variant="top" src="/homepages/discover 2.jpg"/>
                    </div>
                    <Card.Body className='ps-4 pe-4'>
                        <Card.Title className={styles.title}>Distant Galaxy</Card.Title>
                        <div className='d-flex gap-3 pb-4 pt-1'>
                           <img src="homepages/avatar trend 2.jpg" alt="" className={styles.img_discover} />
                           <div className={styles.name_avatar}>NFT Artist</div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className={styles.discover_price}>
                                <div className={styles.name_price}>Price</div>
                                <div className={styles.price}>1.63 ETH</div>
                            </div>
                            <div className="highness">
                                <div className={styles.name_highness}>Highest Bid</div>
                                <div className={styles.price_highness}>0.33 wETH</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                </Col>

                <Col xs={12}  lg={4} className='d-sm-none d-lg-block'>
                <Card className={styles.card}>
                    <div className={styles.card_image}>
                        <Card.Img variant="top" src="/homepages/discover 3.jpg"/>
                    </div>
                    <Card.Body className='ps-4 pe-4'>
                        <Card.Title className={styles.title}>Distant Galaxy</Card.Title>
                        <div className='d-flex gap-3 pb-4 pt-1'>
                           <img src="homepages/avatar trend 3.jpg" alt="" className={styles.img_discover} />
                           <div className={styles.name_avatar}>NFT Artist</div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className={styles.discover_price}>
                                <div className={styles.name_price}>Price</div>
                                <div className={styles.price}>1.63 ETH</div>
                            </div>
                            <div className="highness">
                                <div className={styles.name_highness}>Highest Bid</div>
                                <div className={styles.price_highness}>0.33 wETH</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                </Col>

                {/* <Col xs={12} sm={6} lg={3}>
                <Card className={styles.card}>
                    <div className={styles.card_image}>
                        <Card.Img variant="top" src="/homepages/discover 1.jpg"/>
                    </div>
                    <Card.Body className='ps-4 pe-4'>
                        <Card.Title className={styles.title}>Distant Galaxy</Card.Title>
                        <div className='d-flex gap-3 pb-4 pt-1'>
                           <img src="homepages/avatar trend 2.jpg" alt="" className={styles.img_discover} />
                           <div className={styles.name_avatar}>NFT Artist</div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className={styles.discover_price}>
                                <div className={styles.name_price}>Price</div>
                                <div className={styles.price}>1.63 ETH</div>
                            </div>
                            <div className="highness">
                                <div className={styles.name_highness}>Highest Bid</div>
                                <div className={styles.price_highness}>0.33 wETH</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                </Col> */}

                <div className=' d-sm-none '>
                        <Link href='' className={styles.swapper_button_mobile}>
                            <div className={styles.icon_eye}>
                                <AiOutlineEye/>
                            </div>
                            <div className={styles.button}>See All</div>
                        </Link>
                    </div>
            </Row>
        </div>
    </Container>
  )
}

export default Discover