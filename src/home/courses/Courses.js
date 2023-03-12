import FavoriteIcon from "@mui/icons-material/Favorite";
import { Rating, Tooltip } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import * as React from "react";
import Fade from "react-reveal/Fade";
import "./Courses.css";

export default function Courses() {
  const [rating, setRating] = React.useState(2);

  return (
    <div className="mt-24" id="courses">
      <Fade top cascade>
        <h3 className="mb-10 text-2xl text-center course">Courses</h3>
      </Fade>
      <Fade bottom cascade>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 md:grid-cols-2 lg:gap-0 lg:mx-32">
          <div className="mx-auto lg:mb-8">
            <Box className="single-card">
              <Card sx={{ maxWidth: 320 }} className="card">
                <Typography
                  sx={{
                    padding: 1,
                    fontFamily: '"Segoe UI Symbol"',
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                  className="card-title"
                >
                  Microsoft Word
                </Typography>
                <div className="geek">
                  <CardMedia
                    component="img"
                    // height='300'
                    image="https://images.unsplash.com/photo-1580428839063-353cbae694a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80"
                    alt="Paella dish"
                    className="img"
                  />
                </div>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginBottom: 0 }}
                  >
                    This impressive paella is a perfect party cook together with
                    your guests.
                  </Typography>
                  <Rating
                    size="small"
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                    sx={{
                      mt: 1,
                      color: "rgb(36, 228, 36)",
                    }}
                  />
                </CardContent>

                <CardActions disableSpacing sx={{ marginTop: -3 }}>
                  <Tooltip title="Add to favaurite" placement="top">
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ color: red.A700 }}
                    >
                      <FavoriteIcon></FavoriteIcon>
                    </IconButton>
                  </Tooltip>
                  <button className="enroll ml-14">Enroll now</button>
                </CardActions>
              </Card>
            </Box>
          </div>
          <div className="mx-auto lg:mb-8">
            <Box className="single-card">
              <Card sx={{ maxWidth: 320 }} className="card">
                <Typography
                  sx={{
                    padding: 1,
                    fontFamily: '"Segoe UI Symbol"',
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                  className="card-title"
                >
                  Microsoft Excel
                </Typography>
                <div className="geek">
                  <CardMedia
                    component="img"
                    // height='300'
                    image="https://img.freepik.com/free-photo/tax-payment-financial-economy-accounting-concept_53876-120797.jpg?w=996&t=st=1675591094~exp=1675591694~hmac=7ce45d212b7a4bf04e809d879048949fc07dd6de71849fd90952e421d88673c3"
                    alt="Paella dish"
                    className="img"
                  />
                </div>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginBottom: 0 }}
                  >
                    This impressive paella is a perfect party cook together with
                    your guests.
                  </Typography>
                  <Rating
                    size="small"
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                    sx={{
                      mt: 1,
                      color: "rgb(36, 228, 36)",
                    }}
                  />
                </CardContent>

                <CardActions disableSpacing sx={{ marginTop: -3 }}>
                  <Tooltip title="Add to favaurite" placement="top">
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ color: red.A700 }}
                    >
                      <FavoriteIcon></FavoriteIcon>
                    </IconButton>
                  </Tooltip>
                  <button className="enroll ml-14">Enroll now</button>
                </CardActions>
              </Card>
            </Box>
          </div>
          <div className="mx-auto lg:mb-8">
            <Box className="single-card">
              <Card sx={{ maxWidth: 320 }} className="card">
                <Typography
                  sx={{
                    padding: 1,
                    fontFamily: '"Segoe UI Symbol"',
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                  className="card-title"
                >
                  Graphics Design
                </Typography>
                <div className="geek">
                  <CardMedia
                    component="img"
                    // height='300'
                    image="https://www.webmarketing-com.com/wp-content/uploads/2022/06/alternative-photoshop.jpg"
                    alt="Paella dish"
                    className="img"
                  />
                </div>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginBottom: 0 }}
                  >
                    This impressive paella is a perfect party cook together with
                    your guests.
                  </Typography>
                  <Rating
                    size="small"
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                    sx={{
                      mt: 1,
                      color: "rgb(36, 228, 36)",
                    }}
                  />
                </CardContent>

                <CardActions disableSpacing sx={{ marginTop: -3 }}>
                  <Tooltip title="Add to favaurite" placement="top">
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ color: red.A700 }}
                    >
                      <FavoriteIcon></FavoriteIcon>
                    </IconButton>
                  </Tooltip>
                  <button className="enroll ml-14">Enroll now</button>
                </CardActions>
              </Card>
            </Box>
          </div>
          <div className="mx-auto">
            <Box className="single-card">
              <Card sx={{ maxWidth: 320 }} className="card">
                <Typography
                  sx={{
                    padding: 1,
                    fontFamily: '"Segoe UI Symbol"',
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                  className="card-title"
                >
                  Web Development
                </Typography>
                <div className="geek">
                  <CardMedia
                    component="img"
                    // height='300'
                    image="https://images.unsplash.com/photo-1558459654-c430be5b0a44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Paella dish"
                    className="img"
                  />
                </div>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginBottom: 0 }}
                  >
                    This impressive paella is a perfect party cook together with
                    your guests.
                  </Typography>
                  <Rating
                    size="small"
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                    sx={{
                      mt: 1,
                      color: "rgb(36, 228, 36)",
                    }}
                  />
                </CardContent>

                <CardActions disableSpacing sx={{ marginTop: -3 }}>
                  <Tooltip title="Add to favaurite" placement="top">
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ color: red.A700 }}
                    >
                      <FavoriteIcon></FavoriteIcon>
                    </IconButton>
                  </Tooltip>
                  <button className="enroll ml-14">Enroll now</button>
                </CardActions>
              </Card>
            </Box>
          </div>
          <div className="mx-auto">
            <Box className="single-card">
              <Card sx={{ maxWidth: 320 }} className="card">
                <Typography
                  sx={{
                    padding: 1,
                    fontFamily: '"Segoe UI Symbol"',
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                  className="card-title"
                >
                  Digital Marketing
                </Typography>
                <div className="geek">
                  <CardMedia
                    component="img"
                    // height='300'
                    image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
                    alt="Paella dish"
                    className="img"
                  />
                </div>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginBottom: 0 }}
                  >
                    This impressive paella is a perfect party cook together with
                    your guests.
                  </Typography>
                  <Rating
                    size="small"
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                    sx={{
                      mt: 1,
                      color: "rgb(36, 228, 36)",
                    }}
                  />
                </CardContent>

                <CardActions disableSpacing sx={{ marginTop: -3 }}>
                  <Tooltip title="Add to favaurite" placement="top">
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ color: red.A700 }}
                    >
                      <FavoriteIcon></FavoriteIcon>
                    </IconButton>
                  </Tooltip>
                  <button className="enroll ml-14">Enroll now</button>
                </CardActions>
              </Card>
            </Box>
          </div>
          <div className="mx-auto">
            <Box className="single-card">
              <Card sx={{ maxWidth: 320 }} className="card">
                <Typography
                  sx={{
                    padding: 1,
                    fontFamily: '"Segoe UI Symbol"',
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                  className="card-title"
                >
                  Social Media Marketing
                </Typography>
                <div className="geek">
                  <CardMedia
                    component="img"
                    // height='300'
                    image="https://images.unsplash.com/photo-1643503640904-75c1a2093570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Paella dish"
                    className="img"
                  />
                </div>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginBottom: 0 }}
                  >
                    This impressive paella is a perfect party cook together with
                    your guests.
                  </Typography>
                  <Rating
                    size="small"
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                    sx={{
                      mt: 1,
                      color: "rgb(36, 228, 36)",
                    }}
                  />
                </CardContent>

                <CardActions disableSpacing sx={{ marginTop: -3 }}>
                  <Tooltip title="Add to favaurite" placement="top">
                    <IconButton
                      aria-label="add to favorites"
                      sx={{ color: red.A700 }}
                    >
                      <FavoriteIcon></FavoriteIcon>
                    </IconButton>
                  </Tooltip>
                  <button className="enroll ml-14">Enroll now</button>
                </CardActions>
              </Card>
            </Box>
          </div>
        </div>
      </Fade>
    </div>
  );
}
