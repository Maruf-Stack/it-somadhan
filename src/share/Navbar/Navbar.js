import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
// import MenuIcon from '@mui/icons-material/Menu';
import ListSharpIcon from "@mui/icons-material/ListSharp";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import { AuthContext } from '../../context/AuthProvider';
import { Container } from "@mui/system";
import logo from "../../assets/logo.jpg";
import Time from "../../home/time/Time";
import "./navbar.css";

const drawerWidth = 270;

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
    <Link to="/">Home</Link>,
    <a href="#courses">Courses</a>,
    <a href="#hosting">Domain & Hosting</a>,
    <a href="#services">Services</a>,
    <Link to="/completedtask">Faq</Link>,
    <Link to="/completedtask">Certifiate verify</Link>,
    <Link>
      <button className="login">Login</button>
    </Link>,

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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, fontSize: "22px", fontWeight: 600 }}
        className="text"
      >
        IT S O M A D H A N
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem
            key={i + 1}
            disablePadding
            sx={{ fontSize: 10, fontFamily: '"Segoe UI Symbol"' }}
          >
            <ListItemButton sx={{ textAlign: "start" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ boxShadow: "none", width: "100%" }}
        style={{
          backgroundImage:
            "linear-gradient(to right, #070429, #080736, #2c198f, #250570, #2d0333)",
        }}
      >
        <Container classsname="">
          <Toolbar className="maruf">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" }, padding: 0, fontSize: 20 }}
            >
              <ListSharpIcon sx={{ fontSize: "35px" }}></ListSharpIcon>
            </IconButton>
            <Time></Time>
            <img src={logo} alt="" className="logo ml-5" />
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                fontWeight: 600,
                fontSize: "1rem",
              }}
              className="text"
            >
              IT &nbsp; S O M A D H A N
            </Typography>

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navItems.map((item, i) => (
                <Button
                  key={i + 1}
                  sx={{
                    color: "#e3f2fd",
                    fontFamily: '"Segoe UI Symbol"',
                    fontSize: 14,
                  }}
                  variant="text"
                >
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
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            fontSize: 5,
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
