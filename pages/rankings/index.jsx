import React from 'react'
import { Container, Row, Col,Navbar,Offcanvas,Nav} from 'react-bootstrap'
import Link from 'next/link'
import styles from '../../styles/rankingscss/rankings.module.css'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const index = ( {products}) => {
  console.log(products)
  return (
    <>
    <Container fluid className={styles.breadcump}>
      <div className="container">
      <Row>
      <Col xs={12} md={6} lg={6}>
                  <h5 className={styles.text}>Our Top NFTs</h5>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <div className={styles.list}>
                    <div className={styles.item}>Home</div>
                    <div className={styles.separator}> <MdOutlineKeyboardArrowRight/>  </div>
                    <div className={styles.current}>Rakings</div>
                </div>
              </Col>
      </Row>

      </div>

    </Container>
    <Container fluid className={styles.background}>
      <div className="container">
        <Row>
              {/* <Col xs={12} md={6} lg={6}>
                  <h5 className={styles.text}>Our Top NFTs</h5>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <div className={styles.list}>
                    <div className={styles.item}>Home</div>
                    <div className={styles.separator}> <MdOutlineKeyboardArrowRight/>  </div>
                    <div className={styles.current}>Rakings</div>
                </div>
              </Col> */}
              <Col xs={12}>
              <div className={styles.table_title}>
                <div className={styles.icon_head}><HiOutlineShoppingBag/></div>
                <div className={styles.title_top}>The top NFTs</div>

              </div>
             
              
              </Col>
             
                <Col xs={12}>
                <div className={styles.border}>
                  <div className={styles.table_item_header}>
                      <div className={styles.table_artist}>
                        <div className={styles.rank_number}>#</div>
                        <div className={styles.artist_header}>
                  
                        Artist
                        </div>
                      </div>
                      <div className={styles.stats}>
                        <div className={styles.change_header}>Change</div>
                        <div className={styles.nft_sold}>NFTs Sold</div>
                        <div className={styles.volume}>Volume</div>
                      </div>
                    </div>
                </div>
                </Col>
                {products.map((creator) => (
                <Col xs={12} lg={12} className={styles.rank_1}>
                  <Link href='' className='text-decoration-none text-white'>
                    <div className={styles.table_item}>
                      <div className={styles.table_artist}>
                        <div className={styles.rank_number}>{creator.id}</div>
                        <div className={styles.artist_card}>
                          <div className={styles.avatar}>
                            <img src={creator.thumbnail} alt={creator.title} className={styles.img} />
                          </div>
                          <div className={styles.artist_info}>{creator.title}</div>
                        </div>
                      </div>
                      <div className={styles.stats}>
                      {creator.status == true  ? <div className={styles.change}>{creator.floor}%</div> : <div className={styles.changeIf}>{creator.floor}%</div> }
                        <div className={styles.nft_sold}>{creator.sale}</div>
                        <div className={styles.volume}>{creator.totalItem} ETH</div>
                      </div>
                    </div>
                  </Link>
                </Col>

                ))}
                
              


           
          
        </Row>
      </div>

    </Container>
    
    </>
  )
}

export default index

export const getStaticProps = async (ctx) => {
 

  const res = await fetch("http://localhost:3002/creator");
  const repon = await fetch("http://localhost:3002/categori")
  const dataCategori = await repon.json();

  const data = await res.json();


  return {
    props: {
      products: data,
      categories:dataCategori,
    },
    
  };
  
};