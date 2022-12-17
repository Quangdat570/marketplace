import React from 'react'
import { Container, Row, Col, Card, CardGroup, Carousel } from 'react-bootstrap'
import styles from '../../../styles/marketcss/Sell.module.css'
import { RiWallet2Line } from 'react-icons/ri'
import { TbCloudUpload } from 'react-icons/tb'
import { AiFillTags } from 'react-icons/ai'


const Sell = () => {
  return (
    <>
    <Container fluid className={styles.background}>
        <div className="container">
            <Row>
                <Col xs={12} md={6} lg={4} className='mb-3'>
                    <div className={styles.feature}>
                        <div className={styles.onstep}>
            
                            <RiWallet2Line className={styles.logo} />
            
                        </div>
                        <div className={styles.text}>
                            <div className={styles.deading}>Set up your wallet</div>
                            <div className={styles.subhead}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</div>
                        </div>
                    </div>
                </Col>

                <Col xs={12} md={6} lg={4} className='mb-3'>
                    <div className={styles.feature}>
                        <div className={styles.onstep}>
            
                            <TbCloudUpload className={styles.logo} />
            
                        </div>
                        <div className={styles.text}>
                            <div className={styles.deading}>Set up your wallet</div>
                            <div className={styles.subhead}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</div>
                        </div>
                    </div>
                </Col>

                <Col xs={12} md={6} lg={4} className='mb-3'>
                    <div className={styles.feature}>
                        <div className={styles.onstep}>
            
                            <AiFillTags className={styles.logo} />
            
                        </div>
                        <div className={styles.text}>
                            <div className={styles.deading}>Set up your wallet</div>
                            <div className={styles.subhead}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

    </Container>
    </>
  )
}

export default Sell