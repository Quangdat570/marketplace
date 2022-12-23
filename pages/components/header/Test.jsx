import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import StoreIcon from '@mui/icons-material/Store';
import Link from 'next/link';
import { set } from 'react-hook-form';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Modal from '@mui/material/Modal';
import ImageListItem from '@mui/material/ImageListItem';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import { useDispatch, useSelector } from "react-redux";
import { selectCart } from '../../../store/features/cart/cart.slice';



const style = {
  position: 'absolute',
  top: '7%',
  right: '5%',
  bottom:'5%',
  
  width: '30%',
  minWidth:'330px',
  maxWidth:'400px',
  
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 6
  
};

const pages = ['marketplace', 'wankings', 'wallet'];
const settings = ['Cart','Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {

  const { items, products, totalPrice, incQty, decQty, removeItem, clearItem } =
  useSelector(selectCart);
  const dispatch = useDispatch();
  console.log("items", items)
  console.log(products)

  const handleDelete = (productId) => {
    if (confirm("Xoas sanr pham?")) {
      dispatch(removeItem(productId));
    }
  };

  const handleClear = () => {
    if (confirm("Xoa toan bo san pham khoi gio hang")) {
      dispatch(clearItem());
    }
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{background:'#2b2b2b', borderBottom:'1px solid #ffffff14'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StoreIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              
            }}
          >
            NFTs Marketplace
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(anchor, true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton> */}
            
          </Box>
          <StoreIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Work Sans',
              fontWeight: 600,
             
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NFTs
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            <Button onClick={handleCloseNavMenu}  sx={{ my: 2, color: 'white', display: 'block', fontFamily:'Work Sans', fontWeight:'600', fontSize:'16px', textTransform:'capitalize' }}>
                <Link href='/products' className='text-white text-decoration-none'>Marketplace</Link>
            </Button>

            <Button onClick={handleCloseNavMenu}  sx={{ my: 2, color: 'white', display: 'block', fontFamily:'Work Sans', fontWeight:'600', fontSize:'16px', textTransform:'capitalize' }}>
                <Link href='/rankings' className='text-white text-decoration-none'>Rankings</Link>
            </Button>

            <Button onClick={handleCloseNavMenu}  sx={{ my: 2, color: 'white', display: 'block', fontFamily:'Work Sans', fontWeight:'600', fontSize:'16px', textTransform:'capitalize' }}>
                <Link href='/connectwallet' className='text-white text-decoration-none'>Connect Wallet</Link>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Cart">
              <IconButton onClick={handleOpen} sx={{ p: 0 }}>
                
                <AddShoppingCartIcon sx={{color:'#fff'}}/>
                
              </IconButton>
            </Tooltip>
            <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{borderBottom:1, pb:2 , borderColor:"#acacac"}}>
                      You Cart
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, display:'flex' , justifyContent:'space-between', fontFamily:'Poppins', color:'#04111D', fontWeight:'600' }}>
                     <Typography sx={{color:'#04111D', fontWeight:'600'}}>item</Typography>
                     <Typography sx={{color:'#04111D', fontWeight:'600', cursor:'pointer'}}>Clear all</Typography>
                    </Typography>
                    {( items.length === 0) ? <Box>
                      <Typography>Hãy thêm sản phẩm vào giỏ hàng</Typography>
                    </Box> : 
                    <Box sx={{height:'194px', overflow:'scroll'}}>
                      {items.map((item) => (
                      <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', mt:2,borderBottom:1, pb:2 , borderColor:"#acacac"}}>
                        <ImageListItem sx={{width:'72px', height:'72px'}}>
                          <img src={item.product.thumbnail} className='rounded '/>
                        </ImageListItem>
                        <Box sx={{display:'flex', flexDirection:'column', padding:'0px 10px'}}>
                          <Typography sx={{fontSize:'14px', fontFamily:'Poppins', fontWeight:'600', overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis', width:'100px'}}>{item.product.title}</Typography>
                          <Typography sx={{fontSize:'14px', fontFamily:'Poppins'}}>Ecotars 3D</Typography>
                          <Typography sx={{fontSize:'14px', fontFamily:'Poppins'}}>ETH</Typography>
                        </Box>
                        <Button sx={{color:'#333'}} onClick={() => handleDelete(item.product.id)}> <DeleteOutlineIcon/></Button>
                      </Box>
                      ))}
                    </Box>

                    }
                    <Typography id="modal-modal-description" sx={{ mt: 2, display:'flex' , justifyContent:'space-between', fontFamily:'Poppins', color:'#04111D', fontWeight:'600' }}>
                     <div>Total Price</div>
                     <div>0 ETH</div>
                    </Typography>
                    <Box sx={{ display:'flex' , justifyContent:'space-between', fontFamily:'Poppins', color:'#04111D', mt:4 }}>
                      <Typography>
                      Payment method
                      </Typography>
                      <Typography>Crypto</Typography>
                     
                    </Box>
                    <FormControl>
                      
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel value="crypto" control={<Radio /> } label="Crypto" />
                        <FormControlLabel value="credit" control={<Radio />} label="Credit or debit card" />
                        
                      </RadioGroup>
                    </FormControl>

                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Button variant="contained" >Complete purchase</Button>

                    </Box>

                  </Box>
                  
                </Modal>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;