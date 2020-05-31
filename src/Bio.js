import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
    root:{
        width: "25vw",
        height: "40vh",
        marginLeft: "2rem",
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)',
    },

    iconText_1:{
        display: "flex",
        flexDirection: "row",
        marginLeft: "2rem",
        marginTop: "2rem"
    },
    iconText_2:{
        display: "flex",
        flexDirection: "row",
        marginLeft: "2rem",
        marginTop: "1rem"
    },
    socialMedia:{
        display: "flex",
        flexDirection: "row",
        marginLeft: "2rem",
        marginTop: "1rem",
    },
    text: {
        marginLeft: "0.5rem"
    },
    linkedin_icon: {
        marginLeft: "2rem"
    }

})
export default function Bio(){
    const classes = useStyles();
    return(
        <Card className={classes.root}>

        <div className={classes.iconText_1}>
         <PersonIcon fontSize = "large"/>
        <Typography variant = "h6" className = {classes.text} > Sreenikhil Kollu </Typography>
        </div>

         <div className={classes.iconText_2}>
         <HomeIcon  fontSize="large"/>
         <Typography variant = "h6" className = {classes.text}> West Haven, Connecticut </Typography>
         </div>

            <div className={classes.socialMedia}>
                <GitHubIcon  fontSize="large"/>
                <LinkedInIcon className = {classes.linkedin_icon} fontSize="large"/>
            </div>
        </Card>
    )
}