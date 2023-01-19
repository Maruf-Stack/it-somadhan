import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { lightBlue, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Courses.css'
import { Box } from '@mui/system';
import { RoundedCorner, RoundedCornerRounded } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Courses() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='mt-14'>
            <h3 className='mb-10 text-2xl text-center course'>Courses</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-0 lg:mx-32'>
                <div className='mx-auto lg:mb-5'>
                    <Box className='single-card'>
                        <Card sx={{ maxWidth: 300, }} className='card'>
                            <Typography sx={{ padding: 1, fontFamily: '"Segoe UI Symbol"', fontWeight: 'bold', fontSize: '20px' }} className='card-title'>Micorsoft Word</Typography>
                            <CardMedia
                                component="img"
                                // height='300'
                                image="https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?size=626&ext=jpg&uid=R70905031&ga=GA1.1.1503284893.1652338277&semt=sph"
                                alt="Paella dish"
                                className='img'
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline', marginBottom: 0 }}>
                                    This impressive paella is a perfect party cook
                                    together with your guests.<ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon sx={{ color: lightBlue[600], display: 'inline' }}></ExpandMoreIcon>

                                    </ExpandMore>

                                </Typography>
                            </CardContent>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: -3 }}>
                                        Add rice and stir very gently to distribute. Top with artichokes and
                                        peppers, and cook without stirring, until most of the liquid is absorbed,
                                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                        mussels, tucking them down into the rice, and cook again without
                                        stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don&apos;t open.)
                                    </Typography>
                                </CardContent>
                            </Collapse>
                            <CardActions disableSpacing sx={{ marginTop: -3 }}>

                                <Tooltip title="Add to favaurite" placement="top">
                                    <IconButton aria-label="add to favorites" sx={{ color: red.A700 }} >
                                        <FavoriteIcon ></FavoriteIcon>
                                    </IconButton>
                                </Tooltip>
                                <button className='enroll ml-14'>Enroll now</button>

                            </CardActions>

                        </Card>
                    </Box>
                </div>
                <div className='mx-auto'>
                    <Box className='single-card'>
                        <Card sx={{ maxWidth: 300, }} className='card'>
                            <Typography sx={{ padding: 1, fontFamily: '"Segoe UI Symbol"', fontWeight: 'bold', fontSize: '20px' }} className='card-title'>Micorsoft Word</Typography>
                            <CardMedia
                                component="img"
                                // height='300'
                                image="https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?size=626&ext=jpg&uid=R70905031&ga=GA1.1.1503284893.1652338277&semt=sph"
                                alt="Paella dish"
                                className='img'
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline', marginBottom: 0 }}>
                                    This impressive paella is a perfect party cook
                                    together with your guests.<ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon sx={{ color: lightBlue[600], display: 'inline' }}></ExpandMoreIcon>
                                    </ExpandMore>

                                </Typography>
                            </CardContent>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: -3 }}>
                                        Add rice and stir very gently to distribute. Top with artichokes and
                                        peppers, and cook without stirring, until most of the liquid is absorbed,
                                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                        mussels, tucking them down into the rice, and cook again without
                                        stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don&apos;t open.)
                                    </Typography>
                                </CardContent>
                            </Collapse>
                            <CardActions disableSpacing sx={{ marginTop: -3 }}>

                                <Tooltip title="Add to favaurite" placement="top">
                                    <IconButton aria-label="add to favorites" sx={{ color: red.A700 }} >
                                        <FavoriteIcon ></FavoriteIcon>
                                    </IconButton>
                                </Tooltip>
                                <button className='enroll ml-14'>Enroll now</button>

                            </CardActions>

                        </Card>
                    </Box>
                </div>
                <div className='mx-auto'>
                    <Box className='single-card'>
                        <Card sx={{ maxWidth: 300, }} className='card'>
                            <Typography sx={{ padding: 1, fontFamily: '"Segoe UI Symbol"', fontWeight: 'bold', fontSize: '20px' }} className='card-title'>Micorsoft Word</Typography>
                            <CardMedia
                                component="img"
                                // height='300'
                                image="https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?size=626&ext=jpg&uid=R70905031&ga=GA1.1.1503284893.1652338277&semt=sph"
                                alt="Paella dish"
                                className='img'
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline', marginBottom: 0 }}>
                                    This impressive paella is a perfect party cook
                                    together with your guests.<ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon sx={{ color: lightBlue[600], display: 'inline' }}></ExpandMoreIcon>
                                    </ExpandMore>

                                </Typography>
                            </CardContent>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: -3 }}>
                                        Add rice and stir very gently to distribute. Top with artichokes and
                                        peppers, and cook without stirring, until most of the liquid is absorbed,
                                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                        mussels, tucking them down into the rice, and cook again without
                                        stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don&apos;t open.)
                                    </Typography>
                                </CardContent>
                            </Collapse>
                            <CardActions disableSpacing sx={{ marginTop: -3 }}>

                                <Tooltip title="Add to favaurite" placement="top">
                                    <IconButton aria-label="add to favorites" sx={{ color: red.A700 }} >
                                        <FavoriteIcon ></FavoriteIcon>
                                    </IconButton>
                                </Tooltip>
                                <button className='enroll ml-14'>Enroll now</button>

                            </CardActions>

                        </Card>
                    </Box>

                </div>
                <div className='mx-auto'>
                    <Box className='single-card'>
                        <Card sx={{ maxWidth: 300, }} className='card'>
                            <Typography sx={{ padding: 1, fontFamily: '"Segoe UI Symbol"', fontWeight: 'bold', fontSize: '20px' }} className='card-title'>Micorsoft Word</Typography>
                            <CardMedia
                                component="img"
                                // height='300'
                                image="https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?size=626&ext=jpg&uid=R70905031&ga=GA1.1.1503284893.1652338277&semt=sph"
                                alt="Paella dish"
                                className='img'
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline', marginBottom: 0 }}>
                                    This impressive paella is a perfect party cook
                                    together with your guests.<ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon sx={{ color: lightBlue[600], display: 'inline' }}></ExpandMoreIcon>
                                    </ExpandMore>

                                </Typography>
                            </CardContent>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: -3 }}>
                                        Add rice and stir very gently to distribute. Top with artichokes and
                                        peppers, and cook without stirring, until most of the liquid is absorbed,
                                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                        mussels, tucking them down into the rice, and cook again without
                                        stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don&apos;t open.)
                                    </Typography>
                                </CardContent>
                            </Collapse>
                            <CardActions disableSpacing sx={{ marginTop: -3 }}>

                                <Tooltip title="Add to favaurite" placement="top">
                                    <IconButton aria-label="add to favorites" sx={{ color: red.A700 }} >
                                        <FavoriteIcon ></FavoriteIcon>
                                    </IconButton>
                                </Tooltip>
                                <button className='enroll ml-14'>Enroll now</button>

                            </CardActions>

                        </Card>
                    </Box>

                </div>
                <div className='mx-auto'>
                    <Box className='single-card'>
                        <Card sx={{ maxWidth: 300, }} className='card'>
                            <Typography sx={{ padding: 1, fontFamily: '"Segoe UI Symbol"', fontWeight: 'bold', fontSize: '20px' }} className='card-title'>Micorsoft Word</Typography>
                            <CardMedia
                                component="img"
                                // height='300'
                                image="https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?size=626&ext=jpg&uid=R70905031&ga=GA1.1.1503284893.1652338277&semt=sph"
                                alt="Paella dish"
                                className='img'
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline', marginBottom: 0 }}>
                                    This impressive paella is a perfect party cook
                                    together with your guests.<ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon sx={{ color: lightBlue[600], display: 'inline' }}></ExpandMoreIcon>
                                    </ExpandMore>

                                </Typography>
                            </CardContent>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: -3 }}>
                                        Add rice and stir very gently to distribute. Top with artichokes and
                                        peppers, and cook without stirring, until most of the liquid is absorbed,
                                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                        mussels, tucking them down into the rice, and cook again without
                                        stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don&apos;t open.)
                                    </Typography>
                                </CardContent>
                            </Collapse>
                            <CardActions disableSpacing sx={{ marginTop: -3 }}>

                                <Tooltip title="Add to favaurite" placement="top">
                                    <IconButton aria-label="add to favorites" sx={{ color: red.A700 }} >
                                        <FavoriteIcon ></FavoriteIcon>
                                    </IconButton>
                                </Tooltip>
                                <button className='enroll ml-14'>Enroll now</button>

                            </CardActions>

                        </Card>
                    </Box>

                </div>
                <div className='mx-auto'>
                    <Box className='single-card'>
                        <Card sx={{ maxWidth: 300, }} className='card'>
                            <Typography sx={{ padding: 1, fontFamily: '"Segoe UI Symbol"', fontWeight: 'bold', fontSize: '20px' }} className='card-title'>Micorsoft Word</Typography>
                            <CardMedia
                                component="img"
                                // height='300'
                                image="https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?size=626&ext=jpg&uid=R70905031&ga=GA1.1.1503284893.1652338277&semt=sph"
                                alt="Paella dish"
                                className='img'
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" sx={{ display: 'inline', marginBottom: 0 }}>
                                    This impressive paella is a perfect party cook
                                    together with your guests.<ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon sx={{ color: lightBlue[600], display: 'inline' }}></ExpandMoreIcon>
                                    </ExpandMore>

                                </Typography>
                            </CardContent>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: -3 }}>
                                        Add rice and stir very gently to distribute. Top with artichokes and
                                        peppers, and cook without stirring, until most of the liquid is absorbed,
                                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                        mussels, tucking them down into the rice, and cook again without
                                        stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don&apos;t open.)
                                    </Typography>
                                </CardContent>
                            </Collapse>
                            <CardActions disableSpacing sx={{ marginTop: -3 }}>

                                <Tooltip title="Add to favaurite" placement="top">
                                    <IconButton aria-label="add to favorites" sx={{ color: red.A700 }} >
                                        <FavoriteIcon ></FavoriteIcon>
                                    </IconButton>
                                </Tooltip>
                                <button className='enroll ml-14'>Enroll now</button>

                            </CardActions>

                        </Card>
                    </Box>

                </div>
            </div>
        </div>
    );
}
