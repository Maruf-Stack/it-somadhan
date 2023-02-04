import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { MenuItem } from '@mui/material';
import Icon from '@mui/material/Icon';
import { ListSharp } from '@mui/icons-material';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import { Container } from '@mui/system';
import './navbar.css'
import logo from '../../assets/logo.jpg'





const drawerWidth = 240;


export default function Navbar(props) {
    // const { user, logOut } = React.useContext(AuthContext)
    // const navigate = useNavigate()
    // const handleLogout = () => {
    //     logOut()
    //         .then(() => {
    //             navigate('/')
    //             toast.success("Log out successfull")
    //         })
    //         .catch(err => console.log(err));

    // }

    const navItems = [
        <Link to='/'>Home</Link>,
        <Link><a href="#courses">Courses</a></Link>,
        <Link to='/mytask'>Domain Hosting</Link>,
        <Link to='/completedtask'>Services</Link>,
        <Link to='/completedtask'>Faq</Link>,
        <Link to='/completedtask'>Certifiate verify</Link>,
        <Link><button className='login'>Login</button></Link>,

        // <>
        //     {
        //         user?.uid ?
        //             <Link><Button onClick={handleLogout} variant="contained">Log out</Button></Link> :

        //             <Link to='/login'><Button variant="contained">Login</Button></Link>
        //     }
        // </>

    ];
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', }}>
            <Typography variant="h6" sx={{ my: 2, fontSize: '22px', fontWeight: 600 }} className='text'>
                IT S O M A D H A N
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, i) => (
                    <ListItem key={i + 1} disablePadding sx={{ fontSize: 10, fontFamily: '"Segoe UI Symbol"' }}>
                        <ListItemButton sx={{ textAlign: 'start', }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}

            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ boxShadow: 'none' }} style={{ backgroundImage: 'linear-gradient(to right, #070429, #080736, #2c198f, #250570, #2d0333)' }}>
                <Container>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none', }, }}
                        >

                            <ListSharpIcon></ListSharpIcon>
                        </IconButton>
                        <img src={logo} alt="" className='logo' />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontWeight: 600, fontSize: '2rem' }}
                            className='text'
                        >
                            IT &nbsp; S O M A D H A N

                        </Typography>

                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            {navItems.map((item, i) => (
                                <Button key={i + 1} sx={{ color: '#e3f2fd', fontFamily: '"Segoe UI Symbol"', fontSize: 13 }} variant='text' >
                                    {item}
                                </Button>

                            ))}

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        fontSize: 5
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}
