import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import EventIcon from '@material-ui/icons/Event';
import SchoolIcon from '@material-ui/icons/School';


const useStyles = makeStyles({
    root: {
        width: "60vw",
        height: "40vh",
        marginLeft: "2rem",
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)',
    },
    title:{
        fontSize: "1.5rem",
        marginLeft: "1rem"
    },
    Masters:{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: "1.8rem",
        marginTop: "1rem"
    },
    masters_Content: {
        marginLeft: "1rem",
        marginTop: "0.1rem"
    },
    main_Eductaion:{
        display: 'flex',
        flexDirection: 'row',
    },
    university_1:{
        marginLeft: "2rem",
        marginTop: "1rem"
    },
    university_2:{
        marginLeft: "2rem",
        marginTop: "1.5rem"
    },

    EduLogo:{
        display: "flex",
        flexDirection: "row",
        marginLeft: "1.5rem",
        marginTop: "1rem"
    },
    line:{
        marginTop: "2rem"
    }

});

export default function Education(){
  const classes = useStyles();
  return(
     <Card className={classes.root}>
     <div className={classes.EduLogo}>
     <SchoolIcon/>
     <Typography variant = "h3" className = {classes.title}> Education </Typography>
    </div>

         <Typography variant = "h6" className = {classes.university_1}> University of New Haven - Masters in Computer Science </Typography>
         <div className={classes.Masters}>
             <EventIcon/>
             <typography variant = "h7" className={classes.masters_Content}> Jan 2019 - Expected: Dec 2020 </typography>
         </div>

         <hr className={classes.line}/>

         <Typography variant = "h6" className = {classes.university_2}> National Institute of Technology, Calicut - Bachelors in Computer Science </Typography>
         <div className={classes.Masters}>
             <EventIcon/>
             <typography variant = "h7" className={classes.masters_Content}> Aug 2014 - May 2018 </typography>
         </div>

     </Card>
  )
}