import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import './service.css';


export default function ActionAreaCard() {
  return (
    
   <div>
   <h3 className="mb-10 text-2xl text-center service">Our Services</h3>
     <div className='grid lg:grid-cols-5 justify-items-center grid-cols-3 gap-5 lg:gap-5'>
     <Card sx={{ maxWidth: 240,backgroundColor:'black' }} className='service-card'>
      <CardActionArea>
        <div className='geeks'>
        <CardMedia
          component="img"
          
          image="https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148901755.jpg?w=900&t=st=1675520429~exp=1675521029~hmac=b242f47fb8b001e5dd21f1d310e8b2696f074cabb82f511bec0b5ac10e7bcd1b"
          alt="green iguana"
          className='service-img'
        />
        </div>
        <CardContent>
          <Typography gutterBottom component="div" className='service-title'>
            Computer traning
          </Typography>
         <p className='service-details'>
         Lizards are a widespread group of squamate reptiles, with over 6,000
            species.
         </p>
        </CardContent>
      </CardActionArea>
    </Card>
     <Card sx={{ maxWidth: 240,backgroundColor:'black' }} className='service-card'>
      <CardActionArea>
        <div className='geeks'>
        <CardMedia
          component="img"
          
          image="https://img.freepik.com/free-vector/computer-technology-isometric-icon-server-room-digital-device-set-element-design-pc-laptop_39422-1026.jpg?w=900&t=st=1675519461~exp=1675520061~hmac=6cab64c91311413e55cc7f74caea66daf6be15e009f1416497b29be52ef95b12"
          alt="green iguana"
          className='service-img'
        />
        </div>
        <CardContent>
          <Typography gutterBottom component="div" className='service-title'>
            Domain and Hosting
          </Typography>
         <p className='service-details'>
         Lizards are a widespread group of squamate reptiles, with over 6,000
            species.
         </p>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 240,backgroundColor:'black' }} className='service-card'>
      <CardActionArea>
       <div className='geeks'>
       <CardMedia
          component="img"
          
          image="https://img.freepik.com/free-photo/man-recording-studio-music-production_1303-20398.jpg?w=900&t=st=1675520021~exp=1675520621~hmac=017fd1e17d27a7b8b1c3aebcb16f77717d2c320eba55986f907be0b102925fb6"
          alt="green iguana"
          className='service-img'
        />
       </div>
        <CardContent>
          <Typography gutterBottom component="div" className='service-title'>
            Graphics Desing
          </Typography>
         <p className='service-details'>
         Lizards are a widespread group of squamate reptiles, with over 6,000
            species.
         </p>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 240,backgroundColor:'black' }} className='service-card'>
      <CardActionArea>
        <div className='geeks'>
        <CardMedia
          component="img"
          
          image="https://img.freepik.com/free-vector/portrait-programmer-working-with-pc_23-2148222500.jpg?w=740&t=st=1675519789~exp=1675520389~hmac=82b8c3c9983e06c2e0194318a4c63ca2a64904075ca9b2639e5ee2e2880f8a48"
          alt="green iguana"
          className='service-img'
        />
        </div>
        <CardContent>
          <Typography gutterBottom component="div" className='service-title'>
            Web development
          </Typography>
         <p className='service-details'>
         Lizards are a widespread group of squamate reptiles, with over 6,000
            species.
         </p>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 240,backgroundColor:'black' }} className='service-card'>
      <CardActionArea>
        <div className='geeks'>
        <CardMedia
          component="img"
          
          image="https://img.freepik.com/free-vector/colorful-icons-set_79603-1266.jpg?w=900&t=st=1675519928~exp=1675520528~hmac=e1696376cb2cbdbfa699189a4497ac194af1ac56987e124584e25df38cceb3e1"
          alt="green iguana"
          className='service-img'
        />
        </div>
        <CardContent>
          <Typography gutterBottom component="div" className='service-title'>
            Facebook marketing
          </Typography>
         <p className='service-details'>
         Lizards are a widespread group of squamate reptiles, with over 6,000
            species.
         </p>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 240,backgroundColor:'black' }} className='service-card'>
      <CardActionArea>
        <div className='geeks'>
        <CardMedia
          component="img"
          
          image="https://img.freepik.com/free-vector/video-marketing-isometric-concept_1284-10903.jpg?w=740&t=st=1675520069~exp=1675520669~hmac=db45013edf684e641c15a0da6e3d7c9f9a05f59bc350c06ff7f3388ec763ed5e"
          alt="green iguana"
          className='service-img'
        />
        </div>
        <CardContent>
          <Typography gutterBottom component="div" className='service-title'>
            Video marketing
          </Typography>
         <p className='service-details'>
         Lizards are a widespread group of squamate reptiles, with over 6,000
            species.
         </p>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 240,backgroundColor:'black' }} className='service-card clservice'>
      <CardActionArea>
       <div className='geeks'>
       <CardMedia
          component="img"
          
          image="https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?w=900&t=st=1675520176~exp=1675520776~hmac=6d1d83a95f5534bd0b719bc41e43d5aef415ed1186c5b90613ecfc48cbe97675"
          alt="green iguana"
          className='service-img'
        />
       </div>
        <CardContent>
          <Typography gutterBottom component="div" className='service-title'>
            Digital marketing
          </Typography>
         <p className='service-details'>
         Lizards are a widespread group of squamate reptiles, with over 6,000
            species.
         </p>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 240,backgroundColor:'black' }} className='service-card clservice'>
      <CardActionArea>
        <div className='geeks'>
        <CardMedia
          component="img"
          
          image="https://img.freepik.com/free-photo/pile-3d-play-button-logos_1379-880.jpg?w=900&t=st=1675520251~exp=1675520851~hmac=354607fe3a676a73564a2c6c0497fb21966edd288d62aa27bc506aa7421f067f"
          alt="green iguana"
          className='service-img'
        />
        </div>
        <CardContent>
          <Typography gutterBottom component="div" className='service-title'>
            Youtube channel making
          </Typography>
         <p className='service-details'>
         Lizards are a widespread group of squamate reptiles, with over 6,000
            species.
         </p>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 240,backgroundColor:'black' }} className='service-card clservice'>
      <CardActionArea>
        <div className='geeks'>
        <CardMedia
          component="img"
          
          image="https://img.freepik.com/free-vector/technical-support-programming-coding_335657-2470.jpg?w=900&t=st=1675520304~exp=1675520904~hmac=26750e39de4211e4653c868e7be4f7706450dde3bc65c96b5c7a26c12384d36a"
          alt="green iguana"
          className='service-img'
        />
        </div>
        <CardContent>
          <Typography gutterBottom component="div" className='service-title'>
            Website updating
          </Typography>
         <p className='service-details'>
         Lizards are a widespread group of squamate reptiles, with over 6,000
            species.
         </p>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 240,backgroundColor:'black' }} className='service-card clservice'>
      <CardActionArea>
       <div className='geeks'>
       <CardMedia
          component="img"
          
          image="https://img.freepik.com/free-photo/futuristic-smart-city-with-5g-global-network-technology_53876-98438.jpg?w=900&t=st=1675520355~exp=1675520955~hmac=0f14761d71aec5b856578a172db33afbfadef844d78c616b70c165b27cd6d5f7"
          alt="green iguana"
          className='service-img'
        />
       </div>
        <CardContent>
          <Typography gutterBottom component="div" className='service-title'>
            Online IT support
          </Typography>
         <p className='service-details'>
         Lizards are a widespread group of squamate reptiles, with over 6,000
            species.
         </p>
        </CardContent>
      </CardActionArea>
    </Card>
     
     </div>
     <div className='normal-case text-center mt-8'>
      <button className='viewallbtn'>View all <BsFillArrowRightCircleFill className='inline'></BsFillArrowRightCircleFill></button>
      
     </div>
   </div>
  );
}

