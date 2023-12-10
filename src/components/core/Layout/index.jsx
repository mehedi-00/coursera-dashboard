import * as React from 'react';
import { styled, useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
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
import RightSidebar from '../Shared/RightSidebar/RightSidebar';
import { navItems } from '@/src/constant/navbar';
import { Collapse } from '@mui/material';
import Link from 'next/link';

const drawerWidth = 300;

// Define your light theme
const lightTheme = createTheme();

// Define your dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const ScrollableDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    overflowY: 'auto',
    scrollbarWidth: 'thin', // Firefox
    '&::-webkit-scrollbar': {
      width: '5px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'gray', // Change the color as needed
    },
  },
});


const Layout = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openSubMenu, setOpenSubMenu] = React.useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSubMenuClick = (index) => {
    setOpenSubMenu((prev) => {
      const updatedState = [...prev];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };


  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex' }}>
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

        <ScrollableDrawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader className='bg-black'>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon className='text-white' /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <div className='absolute mt-2'>
            <div className='flex items-center gap-1'>
              <img className='w-12 h-12' src="https://i.postimg.cc/Y0Fsh5Fb/dashboard-logo.png" alt="logo" />
              <h3 className='text-lg text-white'>React</h3>
              <h3 className='text-lg text-white'>Typescript</h3>
            </div>
          </div>
          <List className='text-gray-400'>
            <div className='mt-5 flex flex-col items-center'>
              <img className='rounded-full h-24 w-24' src="https://i.postimg.cc/28bzxyQK/profile.jpg" alt="" />
              <h3>Abbott Keitch</h3>
              <p className='text-xs'>admin@fusetheme.com</p>
            </div>

            {/* Dashboard start */}
            <div className='mt-12 mb-2 ms-4'>
              <h1 className='text-sm text-blue-500'>DASHBOARDS</h1>
              <p className='text-xs'>Unique dashboard designs</p>
            </div>
            {navItems.slice(0, 4).map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon className='text-gray-400' onClick={() => handleSubMenuClick(index)}>
                    {
                      item.icon
                    }
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            {/* Dashboard End */}

          </List>
          <Divider />

          {/* Application start */}
          <List className='text-gray-400'>
            <div className='mt-6 mb-2 ms-4'>
              <h1 className='text-sm text-blue-500'>APPLICATIONS</h1>
              <p className='text-xs'>Custom made application designs</p>
            </div>
            {navItems.slice(4, 16).map((item, index) => (
              <div key={index}>
                <ListItem className='text-gray-400' disablePadding>
                  <ListItemButton onClick={() => handleSubMenuClick(index)}>
                    <ListItemIcon className='text-gray-400'>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                    {item.subMenu && (
                      <IconButton
                        size="small"
                        sx={{ marginLeft: 'auto', transform: openSubMenu[index] ? 'rotate(90deg)' : 'none' }}
                      >
                        <ChevronRightIcon />
                      </IconButton>
                    )}
                  </ListItemButton>
                </ListItem>
                {item.subMenu && (
                  <Collapse in={openSubMenu[index]} timeout="auto" unmountOnExit>
                    <List className='text-gray-400' component="div" disablePadding>
                      {item.subMenu.map((subItem, subIndex) => (
                        <ListItem key={subIndex} disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              {subItem.icon}
                            </ListItemIcon>
                            <Link href={subItem.path}>{subItem.label}</Link>
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </div>
            ))}
          </List>
          {/* Application End */}

          {/* Pages Start */}
          <List className='text-gray-400'>
            <div className='mt-6 mb-2 ms-4'>
              <h1 className='text-sm text-blue-500'>PAGES</h1>
              <p className='text-xs'>Custom made application designs</p>
            </div>
            {navItems.slice(16, 24).map((item, index) => (
              <div key={index}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleSubMenuClick(index)}>
                    <ListItemIcon className='text-gray-400'>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                    {item.subMenu && (
                      <IconButton
                        size="small"
                        sx={{ marginLeft: 'auto', transform: openSubMenu[index] ? 'rotate(90deg)' : 'none' }}
                      >
                        <ChevronRightIcon />
                      </IconButton>
                    )}
                  </ListItemButton>
                </ListItem>
                {item.subMenu && (
                  <Collapse in={openSubMenu[index]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.subMenu.map((subItem, subIndex) => (
                        <ListItem key={subIndex} disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              {subItem.icon}
                            </ListItemIcon>
                            <ListItemText primary={subItem.label} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </div>
            ))}
          </List>
          {/* Pages End */}

          {/* user interface */}
          <List className='text-gray-400'>
            <div className='mt-6 mb-2 ms-4'>
              <h1 className='text-sm text-blue-500'>USER INTERFACE</h1>
              <p className='text-xs'>Building blocks of the UI & UX</p>
            </div>
            {navItems.slice(24,28).map((item, index) => (
              <div key={index}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleSubMenuClick(index)}>
                    <ListItemIcon className='text-gray-400'>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                    {item.subMenu && (
                      <IconButton
                        size="small"
                        sx={{ marginLeft: 'auto', transform: openSubMenu[index] ? 'rotate(90deg)' : 'none' }}
                      >
                        <ChevronRightIcon />
                      </IconButton>
                    )}
                  </ListItemButton>
                </ListItem>
                {item.subMenu && (
                  <Collapse in={openSubMenu[index]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.subMenu.map((subItem, subIndex) => (
                        <ListItem key={subIndex} disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              {subItem.icon}
                            </ListItemIcon>
                            <ListItemText primary={subItem.label} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </div>
            ))}
          </List>


        </ScrollableDrawer>

        <Main open={open}>
          <DrawerHeader />
          {children}
          <RightSidebar />
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
