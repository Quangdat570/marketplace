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
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/features/cart/cart.slice";
import { useParams } from "react-router-dom";

// import { useDispatch,useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { toast } from "react-toastify";
// import { selectProductById } from '../../store/cart/product/products.slice';
// import { addItem } from '../../store/cart/cart.slice'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

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

// content -------------------------------------------------

const ProductsDetail = ( {product, dataRepon}) => {
  console.log("product",product)
  console.log("data",dataRepon)
  
  
  const dispatch = useDispatch();
  const handleClick = (productId) => {
    console.log(productId);
    dispatch(
      addItem({
        productId: productId,
        quantity: 1,
      })
    );
  };  
  
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



//   const handleAddToCartClick = () => {
//     dispatch(addItem({ productId: product.id, quantity: 1 }));
//     toast("Thêm sản phẩm vào giỏ hàng thành cmn công");
// };

 
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
               <img src={product.thumbnail} alt="" className={styles.img_header} />
          
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
                      <div className='mb-2' >Collections</div>
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
                  <Box sx={{ width: '100%', color:'#fff', marginTop:'10px' }}>
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
                    <div className={styles.category}>
                      <div className={styles.head}>
                        <span className={styles.head_category}>Owner </span>
                        {/* <span className={styles.sale_category}>10% royalties</span> */}
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
                    <div className={styles.property}>
                      <div className={styles.property_title}>Property</div>
                      <div className={styles.property_swapper}>
                        <div className={styles.property_inner}>
                          <span className={styles.color_body}>HYPE TYPE</span>
                          <span className={styles.value_property}>CALM AF (STILL)</span>
                        </div>

                        <div className={styles.property_inner}>
                          <span className={styles.color_body}>BASTARDNESS</span>
                          <span className={styles.value_property}>C00LIO BASTARD</span>
                        </div>

                        <div className={styles.property_inner}>
                          <span className={styles.color_body}>TYPE</span>
                          <span className={styles.value_property}>APE</span>
                        </div>

                        <div className={styles.property_inner}>
                          <span className={styles.color_body}>ASTARDNESS</span>
                          <span className={styles.value_property}>BASTARD</span>
                        </div>
                      </div>
                    </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
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
                  </Box >
                  <div className={styles.btn}>
                    <button className={styles.btn_buy} onClick={() => handleClick(product.id)}>Buy Now</button>
                    <button className={styles.btn_bid} onClick={handleOpen} >Place Bid</button>
                    <button><Link href='/cart'>cart</Link></button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                      
                     
                    >
                      <Box sx={style} >
                        <Typography id="modal-modal-title" variant="h4" component="h2" sx={{fontWeight:'600', textAlign:'center'}}>
                          Place a bid
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2, fontSize:'16px' }}>
                        You are about to purchase This Product Form Nuron
                        </Typography>
                        <Typography variant='h4' sx={{fontWeight:'400', fontSize:'22px', mt: 2 }}>
                           Your Bid
                        </Typography>
                        <Box>
                        <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined" >
                          <InputLabel htmlFor="outlined-adornment-password" >ETH</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                           
                            endAdornment={
                              <InputAdornment position="end">
                                
                              </InputAdornment>
                            }
                            label="ETH"
                          />
                        </FormControl>
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'space-between', mt: 1}}>
                          <Typography>Your Balance</Typography>
                          <Typography sx={{fontSize:'14px'}}>9578 wETH</Typography>
                        </Box>

                        <Box sx={{display:'flex', justifyContent:'space-between', mt: 1}}>
                          <Typography>Service fee</Typography>
                          <Typography sx={{fontSize:'14px'}}>10 wETH</Typography>
                        </Box>

                        <Box sx={{display:'flex', justifyContent:'space-between', mt: 1}}>
                          <Typography>Total bid amount</Typography>
                          <Typography sx={{fontSize:'14px'}}>9588 wETH</Typography>
                        </Box>
                        <Box sx={{textAlign:'center', mt:1}}>
                          <Button variant='contained' >Place a Bid</Button>
                        </Box>
                      </Box>
                    </Modal>
                    </div>
                </div>
              </Col>
              <Col xs={12}>
                <div className={styles.recent_view}>Recent View</div>
              </Col>
             
                  {dataRepon.map((item) => (
                <Col xs={12} sm={6} lg={4} key={item.id}>
                <Link href={{
                  pathname: '/products/[pid]',
                  query: { pid: item.id}
                }} className='text-decoration-none'>
                    <Card className={styles.card} >
                        <div className={styles.card_image}>
                            <Card.Img variant="top" src={item.thumbnail} />
                        </div>
                        <Card.Body className='ps-4 pe-4'>
                            <Card.Title className={styles.title}>{item.title}</Card.Title>
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
                </Link>
                </Col>

                  ))}

                {/* <Col xs={12} sm={6} lg={4} >
                <Link href='/products/ProductsDetail' className='text-decoration-none'>
                    <Card className={styles.card} >
                        <div className={styles.card_image}>
                            <Card.Img variant="top" src="/market-img/products 1.jpg" />
                        </div>
                        <Card.Body className='ps-4 pe-4'>
                            <Card.Title className={styles.title}>asdasdasd</Card.Title>
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
                </Link>
                </Col>

                <Col xs={12} sm={6} lg={4} >
                <Link href='/products/ProductsDetail' className='text-decoration-none'>
                    <Card className={styles.card} >
                        <div className={styles.card_image}>
                            <Card.Img variant="top" src="/market-img/products 1.jpg" />
                        </div>
                        <Card.Body className='ps-4 pe-4'>
                            <Card.Title className={styles.title}>asdasdasd</Card.Title>
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
                </Link>
                </Col> */}
          </Row>
        </div>
    </Container>
    </>
  )
}

export default ProductsDetail


export const getStaticProps = async (context) => {
  const id = context.params.pid;
  const res = await fetch("http://localhost:3002/products/" + id);
  const repon = await fetch("http://localhost:3002/products");
  const dataRepon = await repon.json();
  const product = await res.json();

  return {
    props: {
      id,
      product,
      
      dataRepon: dataRepon.slice(68),
      
    },
  };
};


export async function getStaticPaths() {
  const res = await fetch("http://localhost:3002/products");
  const data = await res.json();

  const paths = data.map((product) => {
    return {
      params: { pid: product.id.toString() },
    };
  });

  return {
   
    paths,

    fallback: false,
   
  };
}