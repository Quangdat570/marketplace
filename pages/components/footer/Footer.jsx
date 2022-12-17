import React from 'react'
import styles from '../../../styles/homecss/footer.module.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'
import { SiDiscord } from 'react-icons/si'
import { AiOutlineYoutube } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'
import { FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <Container fluid className={styles.background}>
        <div className="container">
            <Row>
                <Col xs={12} lg={4}>
                    <div className={styles.layout_column_1}>
                        <div className={styles.nft_market_info}>
                            <div className={styles.logo}>NFT Marketplace</div>
                        </div>
                        <div className={styles.audition_footer}>
                            <p className={styles.text_audition_footer}>NFT marketplace UI created with Anima for Figma.</p>
                            <div className={styles.community_info}>
                                <div className={styles.join_community}>Join our community</div>
                                <div className={styles.icons}>
                                    <Link href='' className={styles.icons_media}>
                                        <SiDiscord/>
                                    </Link>
                                    <Link href='' className={styles.icons_media}>
                                        <AiOutlineYoutube/>
                                    </Link>
                                    <Link href='' className={styles.icons_media}>
                                        <FaTwitter/>
                                    </Link>
                                    <Link href='' className={styles.icons_media}>
                                        <FiInstagram/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </Col>

                <Col xs={12} lg={3}>
                    <div className={styles.layout_column_2}>
                        <div className={styles.explore}>
                        Explore
                        </div>
                        <div className={styles.pages}>
                            <Link href='' className={styles.href}>Marketplace</Link>
                            <Link href=''  className={styles.href}>Rankings</Link>
                            <Link href=''  className={styles.href}>Connect a wallet</Link>
                        </div>
                    </div>
                </Col>

                <Col xs={12} lg={5} className='d-none d-sm-block'>
                    <div className={styles.layout_column_2}>
                        <div className={styles.explore}>
                        Join Our Weekly Digest
                        </div>
                        <div className={styles.pages}>
                            <p className={styles.text_audition_footer}>Get exclusive promotions & updates straight to your inbox.</p>
                            <div className={styles.subscribe_form}>
                                <input type="text" placeholder='Enter your email here' className={styles.input}/>
                                <Link href='' className={styles.link_btn}>
                                    <div className={styles.btn_footer}>Subscribe</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                
                </Col>

                <Col xs={12}></Col>
            </Row>
        </div>

    </Container>
  )
}

export default Footer