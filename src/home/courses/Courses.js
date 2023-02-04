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
import "./Courses.css";

export default function Courses() {
  const [rating, setRating] = React.useState(2);

  return (
    <div className="mt-24" id="courses">
      <h3 className="mb-10 text-2xl text-center course">Courses</h3>
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 md:grid-cols-2 lg:gap-0 lg:mx-32">
        <div className="mx-auto lg:mb-6">
          <Box className="single-card">
            <Card sx={{ maxWidth: 300 }} className="card">
              <Typography sx={{ padding: 1, fontFamily: '"Segoe UI Symbol"', fontWeight: "bold", fontSize: "20px" }} className="card-title">
                Micorsoft Word
              </Typography>
              <CardMedia
                component="img"
                // height='300'
                image="https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?size=626&ext=jpg&uid=R70905031&ga=GA1.1.1503284893.1652338277&semt=sph"
                alt="Paella dish"
                className="img"
              />
                          <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 0 }}>
                  This impressive paella is a perfect party cook together with your guests.
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
                  <IconButton aria-label="add to favorites" sx={{ color: red.A700 }}>
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
            <Card sx={{ maxWidth: 300 }} className="card">
              <Typography sx={{ padding: 1, fontFamily: '"Segoe UI Symbol"', fontWeight: "bold", fontSize: "20px" }} className="card-title">
                Micorsoft Word
              </Typography>
              <CardMedia
                component="img"
                // height='300'
                image="https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?size=626&ext=jpg&uid=R70905031&ga=GA1.1.1503284893.1652338277&semt=sph"
                alt="Paella dish"
                className="img"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ display: "inline", marginBottom: 0 }}>
                  This impressive paella is a perfect party cook together with your guests.
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
              <Box>
              
              </Box>

              <CardActions disableSpacing sx={{ marginTop: -3 }}>
                <Tooltip title="Add to favaurite" placement="top">
                  <IconButton aria-label="add to favorites" sx={{ color: red.A700 }}>
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
            <Card sx={{ maxWidth: 300 }} className="card">
              <Typography sx={{ padding: 1, fontFamily: '"Segoe UI Symbol"', fontWeight: "bold", fontSize: "20px" }} className="card-title">
                Micorsoft Word
              </Typography>
              <CardMedia
                component="img"
                // height='300'
                image="https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?size=626&ext=jpg&uid=R70905031&ga=GA1.1.1503284893.1652338277&semt=sph"
                alt="Paella dish"
                className="img"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ display: "inline", marginBottom: 0 }}>
                  This impressive paella is a perfect party cook together with your guests.
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
                  <IconButton aria-label="add to favorites" sx={{ color: red.A700 }}>
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
            <Card sx={{ maxWidth: 300 }} className="card">
              <Typography sx={{ padding: 1, fontFamily: '"Segoe UI Symbol"', fontWeight: "bold", fontSize: "20px" }} className="card-title">
                Micorsoft Word
              </Typography>
              <CardMedia
                component="img"
                // height='300'
                image="https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?size=626&ext=jpg&uid=R70905031&ga=GA1.1.1503284893.1652338277&semt=sph"
                alt="Paella dish"
                className="img"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ display: "inline", marginBottom: 0 }}>
                  This impressive paella is a perfect party cook together with your guests.
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
                    color: "rgb(36, 228, 36)",  //            
                  }}
                />
              </CardContent>

              <CardActions disableSpacing sx={{ marginTop: -3 }}>
                <Tooltip title="Add to favaurite" placement="top">
                  <IconButton aria-label="add to favorites" sx={{ color: red.A700 }}>
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
            <Card sx={{ maxWidth: 300 }} className="card">
              <Typography sx={{ padding: 1, fontFamily: '"Segoe UI Symbol"', fontWeight: "bold", fontSize: "20px" }} className="card-title">
                Micorsoft Word
              </Typography>
              <CardMedia
                component="img"
                // height='300'
                image="https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?size=626&ext=jpg&uid=R70905031&ga=GA1.1.1503284893.1652338277&semt=sph"
                alt="Paella dish"
                className="img"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ display: "inline", marginBottom: 0 }}>
                  This impressive paella is a perfect party cook together with your guests.
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
                  <IconButton aria-label="add to favorites" sx={{ color: red.A700 }}>
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
            <Card sx={{ maxWidth: 300 }} className="card">
              <Typography sx={{ padding: 1, fontFamily: '"Segoe UI Symbol"', fontWeight: "bold", fontSize: "20px" }} className="card-title">
                Micorsoft Word
              </Typography>
              <CardMedia
                component="img"
                // height='300'
                image="https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?size=626&ext=jpg&uid=R70905031&ga=GA1.1.1503284893.1652338277&semt=sph"
                alt="Paella dish"
                className="img"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ display: "inline", marginBottom: 0 }}>
                  This impressive paella is a perfect party cook together with your guests.
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
                  <IconButton aria-label="add to favorites" sx={{ color: red.A700 }}>
                    <FavoriteIcon></FavoriteIcon>
                  </IconButton>
                </Tooltip>
                <button className="enroll ml-14">Enroll now</button>
              </CardActions>
            </Card>
          </Box>
        </div>
      </div>
    </div>
  );
}
