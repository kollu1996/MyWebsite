import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';


const useStyles = makeStyles({
    root: {
        width: "60vw",
        height: "30vh",
        marginLeft: "2rem",
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)',
        marginBottom: "2rem",

    },
    cardContent:{
        display: "flex",
        flexDirection: "row",
        marginTop: "1rem",
        marginLeft: "2rem"
    },
    aboutlogo:{
        marginTop: "0.2em"
    },
    about:{
        marginLeft: "0.8rem"
    },
    about_content:{
        marginLeft: "2rem",
        marginTop: "1rem"
    }
})
export default function About(){
    const classes = useStyles();
   return(
       <Card className={classes.root}>
           <div className={classes.cardContent}>
         <PermIdentityRoundedIcon  className = {classes.aboutlogo}/>
       <Typography variant = "h5" className = {classes.about}> About Me </Typography>
           </div>
           <Typography variant = "h6" className = {classes.about_content}>
               I am an application developer and a competitive programmer. I love to travel and explore different cultures.
               I like to do competitive programming when I am free. I am  interested in solving logical puzzles
               and math problems. Keen to learn new programming languages and frameworks which can produces benefical software products.

           </Typography>

       </Card>
   )
}