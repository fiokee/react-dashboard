import React, {useState} from 'react'


import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Home from '../pages/Home';
import homeImage from '../assets/home-2.png';
import dashbImg from '../assets/category-2.png';
import personal from '../assets/strongbox.png'
import Sales from '../assets/Group 40027.png';
import Talent from '../assets/3dcube.png';
import Spend from '../assets/card-edit.png';
import Card from '../assets/cards.png';
import Lead from '../assets/medal-star.png';
import Setting from '../assets/security-user.png';
import Bank from '../assets/radar.png';
import ChevIcon from '../assets/Icon.png';

const drawerWidth = 290;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function SideNav() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [menuData, setMenuData] = useState("Home");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#07112D',
            color: '#FFFFFF'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: '#FFFFFF' }}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        
        <List>
         
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: '#FFFFFF' }}>

              <h1>playbox</h1>
              <span>by LibertyPay</span>
                </ListItemIcon>
              
              </ListItemButton>
            </ListItem>
        </List>

        <Divider  sx={{ border: ' 0.7px dashed gray'}}/>
        <List>
         
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: '#FFFFFF' }}>
                   <img src={homeImage} alt='home'/>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
        </List>

        <List>
         <ListItem disablePadding>
           <ListItemButton>
             <ListItemIcon sx={{ color: 'gray' }}>
                <img src={dashbImg} alt='dashboard'/>
             </ListItemIcon>
             <ListItemText primary="Analytics Dashboard" />
           </ListItemButton>
         </ListItem>
     </List>

        <Divider sx={{ border: ' 0.7px dashed gray'}}/>
        <List>
         <ListItem disablePadding>
           <ListItemButton>
             <ListItemIcon sx={{ color: '#FFFFFF' }}>
                <img src={personal} alt=''/>
             </ListItemIcon>
             <ListItemText primary="Personal" />
             <img src={ChevIcon}/>
           </ListItemButton>
         </ListItem>

         <ListItem disablePadding>
           <ListItemButton>
             <ListItemIcon sx={{ color: '#FFFFFF' }}>
                <img src={Sales} alt='sales'/>
             </ListItemIcon>
             <ListItemText primary="Sales Hub" />
             <img src={ChevIcon}/>
           </ListItemButton>
         </ListItem>
         <ListItem disablePadding>
           <ListItemButton>
             <ListItemIcon sx={{ color: '#FFFFFF' }}>
                <img src={Talent} alt='talent management'/>
             </ListItemIcon>
             <ListItemText primary="Talent Management" />
             <img src={ChevIcon}/>
           </ListItemButton>
         </ListItem>

         <ListItem disablePadding>
           <ListItemButton>
             <ListItemIcon sx={{ color: '#FFFFFF' }}>
                <img src={Spend} alt='spend management'/>
             </ListItemIcon>
             <ListItemText primary="Spend Management" />
             <img src={ChevIcon}/>
           </ListItemButton>
         </ListItem>

         <ListItem disablePadding>
           <ListItemButton>
             <ListItemIcon sx={{ color: '#FFFFFF' }}>
                <img src={Card} alt='cards'/>
             </ListItemIcon>
             <ListItemText primary="Cards" />
           </ListItemButton>
         </ListItem>
     </List>
        <Divider sx={{ border: ' 0.7px dashed gray'}}/>

        <List>
         <ListItem disablePadding>
           <ListItemButton>
             <ListItemIcon sx={{ color: '#FFFFFF' }}>
                <img src={Lead} alt='leader'/>
             </ListItemIcon>
             <ListItemText primary="Leaderboard" />
           </ListItemButton>
         </ListItem>

         <ListItem disablePadding>
           <ListItemButton>
             <ListItemIcon sx={{ color: '#FFFFFF' }}>
                <img src={Setting} alt='profile_settings'/>
             </ListItemIcon>
             <ListItemText primary="Profile & Settings" />
           </ListItemButton>
         </ListItem>

         <ListItem disablePadding>
           <ListItemButton>
             <ListItemIcon sx={{ color: '#FFFFFF' }}>
                <img src={Bank} alt='bank_performance'/>
             </ListItemIcon>
             <ListItemText primary="Bank Performance" />
             <img src={ChevIcon}/>
           </ListItemButton>
         </ListItem>
     </List>
      </Drawer>
      <Main open={open} >
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Main>
      {menuData == "Home" && <Home/>}
    </Box>
  );
}