import React , { useState } from 'react'
import { Container, Row, Col, Card, CardGroup, Carousel } from 'react-bootstrap'
import Link from 'next/link'
import styles from '../../../styles/marketcss/ListProducts.module.css'
import { FiFilter } from 'react-icons/fi'
import Collapse from 'react-bootstrap/Collapse';
import { useForm } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MuiInput from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { TextField} from '@mui/material'
import makeStyles from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import List from './ListProducts'
// import Pagination from '@mui/material/Pagination';
import Pagination from 'react-bootstrap/Pagination';
import { useRouter } from 'next/router'





const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));




const ListProducts = ( { products, total, totalPage, page }) => {
    console.log("page",page)
    console.log("totalpage", totalPage)
    console.log("total", total)
    // const dispatch = useDispatch();
    // const { data: products } = useSelector(selectsProducts);
    
    const [open, setOpen] = useState(false);
    const [value, setValue] = React.useState(37);
    const [lang, setLang] = useState();
    const Categori=["Art", "Collectibles","Music","Photography","Video","Utility","Sport","Virtual Worlds"];
    const colecttion =['BoredApeYachtClub',"MutantApeYachtClub","Art Blocks Factory"];
    const sales =['Fixed price',"Timed auction","Not for sale","Open for offers"];
    
    
    const { register, handleSubmit } = useForm({
        defaultValues:{
            category: 'Category'
        }
    });

    const [category, setCategory] = useState('');
    const [Collections, setCollections] = useState('');
    const [Sale, setSale] = useState('');

    const handleCategory = (event) => {
        setCategory(event.target.value);
    };

    const handleCollections = (event) => {
        setCollections(event.target.value);
      };

      const handleSale = (event) => {
        setSale(event.target.value);
      };
    

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

//   pagenaigation
// const [pagenavion, setPage] = React.useState(1);
//   const handleChange = (event, value) => {
//     setPage(value);
//   };

let active = 1;
let items = [];
for (let number = 1; number <= totalPage; number++) {
  items.push(
    <Pagination.Item key={number} active={number == page} onClick={() => {
        router.push({
            url:"/products",
            query: { page: number},
        });
    }}>
      {number}
    </Pagination.Item>,
  );
}
const router = useRouter();


    

  return (
    <>
    <Container fluid className={styles.background}>
        <div className="container">
            <Row>
                <Col xs={12} className={styles.layout_heading}>
                    <h3 className={styles.title}>Explore Product</h3>
                    <div className={styles.fillter}>
                        <button className={styles.btn_filter}  
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        >
                        Filter
                        <span> <FiFilter/></span>
                        </button>
                    </div>
                

                </Col>

               
                <Col xs={12}>
                    <Collapse in={open}>
                            <Row id="example-collapse-text " className={styles.layout_filter}>
                                <Col xs={12} md={6} lg={3} className='mb-3'>
                                <div className="inner">
                                    <Typography color="white" variant='h6' mb={1} >
                                        Category
                                    </Typography>
                                    <Box >
                                        <TextField 
                                            
                                        value={lang} 
                                        onChange={e => setLang(e.target.ariaValueNow)} 
                                        select
                                        SelectProps={{native:true}}
                                        sx={{width:"100%", backgroundColor:"#fff"}}
                                        >
                                            {Categori.map(lang => (
                                                <option value={lang} key={lang}> {lang}</option>
                                                ))}
                                        </TextField>
                                    </Box>
                                    
                                </div>
                                </Col>

                                <Col xs={12} md={6} lg={3} className='mb-3'>
                                <div className="inner">
                                    <Typography color="white" variant='h6' mb={1}>
                                    Collections
                                    </Typography>
                                    <Box>
                                        <TextField 
                                            
                                        value={lang} 
                                        onChange={e => setLang(e.target.ariaValueNow)} 
                                        select
                                        SelectProps={{native:true}}
                                        sx={{width:"100%", backgroundColor:"#fff"}}
                                        >
                                            {colecttion.map(lang => (
                                                <option value={lang} key={lang}> {lang}</option>
                                                ))}
                                        </TextField>
                                    </Box>
                                    
                                </div>
                                </Col>

                                <Col xs={12} md={6} lg={3} className='mb-3'>
                                <div className="inner">
                                    <Typography color="white" variant='h6' mb={1}>
                                    Sale type
                                    </Typography>
                                    <Box>
                                        <TextField 
                                            
                                        value={lang} 
                                        onChange={e => setLang(e.target.ariaValueNow)} 
                                        select
                                        SelectProps={{native:true}}
                                        sx={{width:"100%", backgroundColor:"#fff"}}
                                        >
                                            {sales.map(lang => (
                                                <option value={lang} key={lang}> {lang}</option>
                                                ))}
                                        </TextField>
                                    </Box>
                                    
                                </div>
                                </Col>

                                <Col xs={12} md={6} lg={3}  className='mb-3'>
                                    <Box color='white'>
                                    <Search>
                                    <SearchIconWrapper>
                                    <SearchIcon />
                                    </SearchIconWrapper >
                                        
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                        
                                        />
                                    </Search>
                                    </Box>
                                </Col>
                                
                            </Row>

                        
                    </Collapse>
                </Col>

                {products.map((item) => (
                <Col xs={12} sm={6} lg={3} key={item.id}>
                <Card className={styles.card} >
                    <div className={styles.card_image}>
                        <Card.Img variant="top" src={item.thumbnail}/>
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
                </Col>

                ))}
                
                    <Col className='justify-content-center d-flex' xs={12}>
                    <Pagination >{items}</Pagination>
                    </Col>
                


                {/* <Col xs={12} sm={6} lg={3}>
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

                <Col xs={12} sm={6} lg={3}>
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

                <Col xs={12} sm={6} lg={3}>
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

                <Col xs={12} sm={6} lg={3}>
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

                <Col xs={12} sm={6} lg={3}>
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

                <Col xs={12} sm={6} lg={3}>
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

                <Col xs={12} sm={6} lg={3}>
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

                <Col xs={12} sm={6} lg={3}>
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

                <Col xs={12} sm={6} lg={3}>
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

                <Col xs={12} sm={6} lg={3}>
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

                <Col xs={12} sm={6} lg={3}>
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
                </Col> */}


                {/* <ProductsList products={products} /> */}
            </Row>
        </div>

    </Container>
    
    </>
  )
}

export default ListProducts
// export const getStaticProps = async (ctx) => {
//     const res = await fetch("http://localhost:3002/creator");
//     const data = await res.json();
//     console.log(data)

//     return {
//         props: {
//             products: data,
//         }
//     }
// }