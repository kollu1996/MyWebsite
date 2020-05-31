import React from 'react'
import image1  from './Nikhil Profile edited Pic 2.jpeg'
import {makeStyles} from "@material-ui/core/styles";
import Education from "./Education";
import About from "./About";
import Bio from './Bio'



const useStyles = makeStyles(theme =>({
  root:{
     display: 'flex',
     flexDirection: 'row'
  },
  edu_detail:{
     marginLeft: '2rem',
  },
  info:{
      display: 'flex',
      flexDirection: 'column'
    }
}))

export default function Profile(){
   const classes = useStyles();
   return(
      <Bio/>
   )
}


/*
 <div className={classes.root}>
       <img src = {image1} alt = "My profile pic" style={{"width":"380px", "height": "425px", "margin-left": "5rem"}}/>
       <div className={classes.info}>
       <About/>
       <Education/>
       </div>
       </div>
 */