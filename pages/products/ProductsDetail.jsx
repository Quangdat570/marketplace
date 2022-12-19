import React from 'react'
import { Container, Row, Col, Card, CardGroup, Carousel } from 'react-bootstrap'
import styles from '../../styles/marketcss/products-detail.module.css'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const ProductsDetail = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <>
    <Container fluid className={styles.breadcump}>
      <div className="container">
      <Row>
      <Col xs={12} md={6} lg={6}>
                  <h5 className={styles.text}>Products Detail</h5>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <div className={styles.list}>
                    <div className={styles.item}>Home</div>
                    <div className={styles.separator}> <MdOutlineKeyboardArrowRight/>  </div>
                    <div className={styles.current}>Products Detail</div>
                </div>
              </Col>
      </Row>

      </div>

    </Container>
    <Container className={styles.background} fluid>
        <div className="container">
          <Row>
              <Col xs={12} md={6}>
               <img src="/market-img/products 11.jpg" alt="" className='w-100' />
          
              </Col>
              <Col xs={12} md={6}>
                <div className={styles.content_product}>
                  <div className={styles.title_aria}>
                    <div className={styles.title}>The Amazing Game</div>
                    <div className={styles.react_aria}>
                        <span className={styles.icon_heart}><AiOutlineHeart/></span>
                        <div className={styles.number_react}>33</div>
                    </div>
                  </div>
                  <div className={styles.bid}>
                    <span className={styles.name_bid}>Height bid </span>
                    <span className={styles.price}>0.11wETH</span>
                  </div>
                  <div className={styles.title_name}>#22 Portal , Info bellow</div>
                  <div className={styles.category_collection}>
                    <div className={styles.category}>
                      <div className={styles.head}>
                        <span className={styles.head_category}>Catagory </span>
                        <span className={styles.sale_category}>10% royalties</span>
                      </div>
                      <div className={styles.top_seller}>
                        <div className={styles.top_seller_swapper}>
                          <div className={styles.thumbnail}>
                            <img src="/homepages/Avatar 10.jpg" alt="" className={styles.img_products} />
                          </div>
                          <div className={styles.top_seller_content}>Brodband</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.collection}>
                      <div head_category>Collections</div>
                      <div className={styles.top_seller}>
                        <div className={styles.top_seller_swapper}>
                          <div className={styles.thumbnail}>
                            <img src="/homepages/Avatar 11.jpg" alt="" className={styles.img_products} />
                          </div>
                          <div className={styles.top_seller_content}>Brodband</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Box sx={{ width: '100%', color:'#fff' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', color:'#fff' }}>
                      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                        <Tab label="Bids" {...a11yProps(0)} sx={{color:'#fff'}}  />
                        <Tab label="Details" {...a11yProps(1)} sx={{color:'#fff'}}/>
                        <Tab label="History" {...a11yProps(2)} sx={{color:'#fff'}}/>
                      </Tabs>
                    </Box>
                    <TabPanel value={value} index={0} >
                     <div className={styles.swapper_bids}>
                      <div className={styles.top_creator}>
                        <div className={styles.thumbnail}>
                          <img src="/homepages/Avatar 1.jpg" alt="" className={styles.img_products} />
                        </div>
                        <div className={styles.top_creator_content}>
                        <span className={styles.price_bids}>0.11wETH by</span>
                        <span className={styles.name_bid_creator}>Allen Waltker </span>
                        <div className={styles.price_bids}>1 hours ago</div>

                        </div>
                      </div>
                     </div>

                     <div className={styles.swapper_bids}>
                      <div className={styles.top_creator}>
                        <div className={styles.thumbnail}>
                          <img src="/homepages/Avatar 1.jpg" alt="" className={styles.img_products} />
                        </div>
                        <div className={styles.top_creator_content}>
                        <span className={styles.price_bids}>0.11wETH by</span>
                        <span className={styles.name_bid_creator}>Allen Waltker </span>
                        <div className={styles.price_bids}>1 hours ago</div>

                        </div>
                      </div>
                     </div>

                     <div className={styles.swapper_bids}>
                      <div className={styles.top_creator}>
                        <div className={styles.thumbnail}>
                          <img src="/homepages/Avatar 1.jpg" alt="" className={styles.img_products} />
                        </div>
                        <div className={styles.top_creator_content}>
                        <span className={styles.price_bids}>0.11wETH by</span>
                        <span className={styles.name_bid_creator}>Allen Waltker </span>
                        <div className={styles.price_bids}>1 hours ago</div>

                        </div>
                      </div>
                     </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      Item Three
                    </TabPanel>
                  </Box>
                </div>
              </Col>
          </Row>
        </div>
    </Container>
    </>
  )
}

export default ProductsDetail