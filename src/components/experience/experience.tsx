/*
* Author: Bilal Malik
* Date: May, 10th, 2021
* Last Modified on: May, 10th, 2021
* Description: This component renders the Nav bar items, a reusable components that takes the name
* of the nav bar item, and the route to where it will go
 */


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import winHacks from "images/winhacksLogo.png";
import uWin from "images/uWin.png";
import wsibLab from "images/wsibLab.jpg";
import "styles/experience.css";


const useStyles = makeStyles(() => ({
  paper: {
    padding: '6px 16px',
  },
  primary: {
    main: '#f44336',
  },
}));


export const Experience:React.FC = () => {
  const classes = useStyles();

  return (
      <div className="experience-container">
        <Timeline align="alternate">

            <TimelineItem>
                <TimelineOppositeContent>
                <Typography variant="body1" color="textSecondary">
                    May 2020 - May 2021
                </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot color="inherit">
                    <img src={wsibLab} width="52" height="52" style={{borderRadius:18}} alt="WSIB Lab Logo"/>
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                    WSIB Innovation Lab
                    </Typography>
                    <Typography>Full Stack Developer</Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
                <TimelineOppositeContent>
                <Typography variant="body1" color="textSecondary">
                    November 2019 - March 2020
                </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot color="inherit">
                    <img src={winHacks} width="52" height="52" style={{borderRadius:12}} alt="WinHacks Logo"/>
                </TimelineDot>
                <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                    Winhacks 
                    </Typography>
                    <Typography>Co-Founder/Web Developer</Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>
        
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body1" color="textSecondary">
                        August 2019 - December 2019
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="inherit">
                        <img src={uWin} width="52" height="52" style={{borderRadius:18}}  alt="University of Windsor Logo"/>
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            University of Windsor
                        </Typography>
                        <Typography>Teaching Assistant</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

        </Timeline>
    </div>
  );
}

            