
import * as React from 'react';
import travelData from '../data/travelCards.json';
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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import Grid from '@material-ui/core/Grid';




import locationCard from './Cards';
import { useEffect, useState } from 'react';





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


function Trips() {
    const [cards, setCards] = useState();
    useEffect(() => {
        setCards(travelData);
    });


    const [expanded, setExpanded] = React.useState(false);




    return (
        <div>

        <Grid container spacing={1}>


         
            {cards ? (
                cards.map((element) => {
                    return (

                        <>
                            <Card sx={{ maxWidth: 245 , minWidth: 245, margin: '25px 35px' }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            R
                                        </Avatar>
                                    }

                                    title={<b> {element.tripName} </b>}
                                    subheader={element.date}
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={element.img}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {element.description}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>

                                </CardActions>
                            </Card>

                        </>)

                }))

                : (<h1> no data </h1>)}


            <Card sx={{ maxWidth: 245, minWidth: 245,  margin: '25px 35px' }}>
                <CardHeader
                
                    title={<b> ADD NEW TRIP </b>}
                    subheader="-"
                />
                <CardMedia
                    component="img"
                    height="224"
                    image="https://cdn1.iconfinder.com/data/icons/ui-glynh-01-of-5/100/UI_Glyph_1-02-512.png"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Your next trip here
                    </Typography>
                </CardContent>
                {/* <CardActions disableSpacing>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>

                </CardActions> */}
            </Card>

            </Grid>





        </div>
    );
}



function CardsView() {




}

export default Trips;
