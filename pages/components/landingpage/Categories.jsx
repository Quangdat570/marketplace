import React from 'react'
import styles from '../../../styles/homecss/categories.module.css'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import Link from 'next/link'

const Categories = () => {
  return (
   <Container fluid className={styles.background}>
    <div className="container">
        <Row>
            <h3 className={styles.heading}>
            Browse Categories
            </h3>
            <Col xs={6} lg={3}>
                <Card className={styles.card}>
                    <div className={styles.card_image}>
                        <Card.Img variant="top" src="/homepages/categori 1.jpg"/>
                    </div>
                    <Card.Body>
                        <Card.Title className={styles.title}>Art</Card.Title>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={6} lg={3}>
                <Card className={styles.card}>
                    <div className={styles.card_image}>
                        <Card.Img variant="top" src="/homepages/categori 2.jpg"/>
                    </div>
                    <Card.Body>
                        <Card.Title className={styles.title}>Collectibles</Card.Title>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={6} lg={3}>
                <Card className={styles.card}>
                    <div className={styles.card_image}>
                        <Card.Img variant="top" src="/homepages/categori 3.jpg"/>
                    </div>
                    <Card.Body>
                        <Card.Title className={styles.title}>Music</Card.Title>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={6} lg={3}>
                <Card className={styles.card}>
                    <div className={styles.card_image}>
                        <Card.Img variant="top" src="/homepages/categori 4.jpg"/>
                    </div>
                    <Card.Body>
                        <Card.Title className={styles.title}>Photography</Card.Title>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={6} lg={3}>
                <Card className={styles.card}>
                    <div className={styles.card_image}>
                        <Card.Img variant="top" src="/homepages/categori 5.jpg"/>
                    </div>
                    <Card.Body>
                        <Card.Title className={styles.title}>Video</Card.Title>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={6} lg={3}>
                <Card className={styles.card}>
                    <div className={styles.card_image}>
                        <Card.Img variant="top" src="/homepages/categori 6.jpg"/>
                    </div>
                    <Card.Body>
                        <Card.Title className={styles.title}>Utility</Card.Title>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={6} lg={3}>
                <Card className={styles.card}>
                    <div className={styles.card_image}>
                        <Card.Img variant="top" src="/homepages/categori 7.jpg"/>
                    </div>
                    <Card.Body>
                        <Card.Title className={styles.title}>Sport</Card.Title>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={6} lg={3}>
                <Card className={styles.card}>
                    <div className={styles.card_image}>
                        <Card.Img variant="top" src="/homepages/categori 8.jpg"/>
                    </div>
                    <Card.Body>
                        <Card.Title className={styles.title}>Virtual</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>

   </Container>
  )
}

export default Categories