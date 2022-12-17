import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Row, Col, Card, CardGroup, Carousel } from 'react-bootstrap'
import Link from 'next/link'
import styles from '../../styles/walletcss/wallet.module.css'

const Waleet = () => {
    const [webApi, setWebApi] = useState();
useEffect(() => {
    const eth=window.ethereum;
    // setWebApi(eth);
    eth.request({method: "eth.requestAccounts"});
    
},[]);


  return (
    <>
    <Container fluid className={styles.background}>
        <Row>
            <Col xs={12} md={6} className='ps-0'>
                <img src="/walletpage/Image 1.jpg" alt="" className={styles.img} />
            </Col>
            <Col xs={12} md={6} className="mx-auto my-auto">
                <div className={styles.connect_wallet}>
                    <div className={styles.heading}>
                        <div className={styles.headline}>Connect Wallet</div>
                        <div className={styles.sub_head}>Choose a wallet you want to connect. There are several wallet providers.</div>
                    </div>
                    <div className={styles.wallet_option}>
                        <div className={styles.layout}>
                            <Link href=''className='text-decoration-none text-white'>
                                <div className={styles.wallet}>
                                    <div >
                                        <img src="/walletpage/Metamask.jpg" alt="" />
                                    </div>
                                    <div className={styles.name_wallet}>Metamask</div>
                                </div>
                            </Link>

                            <div className={styles.wallet}>
                                <div >
                                    <img src="/walletpage/WalletConnect.jpg" alt="" />
                                </div>
                                <div  className={styles.name_wallet}>Wallet Connect</div>
                            </div>

                            <div className={styles.wallet}>
                                <div >
                                    <img src="/walletpage/Coinbase.jpg" alt="" />
                                </div>
                                <div  className={styles.name_wallet}>Coinbase</div>
                            </div>
                        </div>

                    </div>

                </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Waleet