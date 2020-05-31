import React from 'react';
import DesktopBreakpoint from './desktop_breakpoint'
import TabletBreakpoint from './tablet_breakpoint'
import PhoneBreakpoint from './phone_breakpoint'
import Profile from "./Profile";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>({
    root:{
        marginTop: "2rem"
    },

}))


export default function App(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <DesktopBreakpoint>
              <Profile/>
          </DesktopBreakpoint>

          <TabletBreakpoint>
              <Profile/>
          </TabletBreakpoint>
          <PhoneBreakpoint>
              <Profile/>
          </PhoneBreakpoint>

        </div>
    );
  }
