import React, { useState } from "react";
import { User, Users } from '../../UserData'
import { Grid, TextField, Button, Card, CardContent, Typography, ListItem } from "@material-ui/core"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Stack from '@mui/material/Stack';
import {useSelector} from "react-redux"

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Alert from "@mui/material/Alert";
function OutsideDuties() {
   const user1 = useSelector((state) => state.user.value)

    const [open, setOpen] = React.useState(false);

//      const columns: GridColDef[] = [
 
//   { field: 'Task', headerName: 'Course Name', width: 130 },
//   { field: 'course', headerName: 'Program Course', width: 130 },
//   { field: 'coursecode', headerName: 'Course Code', width: 130 },
//   { field: 'numOfStudents', headerName: 'Number Of Students', width: 250 },
//   { field: 'hours', headerName: 'Actual Hrs/week', width: 90 , type: 'number'},

  
// ];
         const [outsideActivity, setoutsideActivity] = useState({
        Task: "",
        course: "",
        coursecode: "",
        numOfStudents: 0,
        hours: 0,
    });
   const lecturer = Users.find(data=> {
            return data.stuffNumber == user1.staffNumber
    });

    
    const handleAdd = (e) => {
       e.preventDefault()
      
      if(outsideActivity.Task && outsideActivity.hours > 0 && outsideActivity.numOfStudents && outsideActivity.coursecode && outsideActivity.course){

          lecturer.teachingOutside.push(outsideActivity)
       
            setOpen(true)
            
            
        }

    }

    const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    
    <h1 style={{color:"white", paddingTop:"100px", paddingBottom:"50px", display:"flex", alignItems:"center",justifyContent:"center"}}>Teaching Workload</h1>
       
    <h2 style={{color:"white"}}>Activities outside the workload of FT-employment</h2>
        
    
        <Card style={{maxWidth:700}}>
            <CardContent>
                <Grid container spacing={1}>

                
                <Grid item xs={12} sm={6}>
                    <ListItem>Enter Task</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setoutsideActivity({...outsideActivity, Task: e.target.value})} label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid><Grid item xs={12} sm={6}>
                    <ListItem>Program Course</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setoutsideActivity({...outsideActivity, course: e.target.value})} label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ListItem>Course Code</ListItem>
                 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setoutsideActivity({...outsideActivity, coursecode: e.target.value})} label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ListItem>Number of students </ListItem>
                 
                </Grid>
                
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setoutsideActivity({...outsideActivity, numOfStudents: e.target.value})} type="number" label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <ListItem>Hours/week </ListItem>
                 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setoutsideActivity({...outsideActivity, hours: e.target.value})} type="number" label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                
                </Grid>
               
                
                
                
                
            </CardContent>
            
         <CardContent>
                <Grid  container
  direction="row"
   justifyContent="center"
  alignItems="center">
                    <Grid>
<Button onClick={handleAdd} style={{background:'green', color:'white'}} variant='contained'>Add</Button>
                    </Grid>
                    
                
                
                 </Grid>   
         </CardContent>
         
        </Card>
        
    

    <br></br>
    <Grid 
    container
  direction="row"
   justifyContent="space-evenly"
  alignItems="center">
                    <Grid>
<Button variant='contained' style={{backgroundColor:'red'}}><Link to="/"> Cancel </Link></Button>
                    </Grid>
                    <Grid>
<Button variant='contained' color='primary'><Link to="/">Submit</Link> </Button>
                    </Grid>
                    </Grid>
    <br></br>
    <Stack spacing={2} sx={{ width: '100%' }}>
      
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Community Activity Successfully added
        </Alert>
      </Snackbar>
      
      
    </Stack>
    </>
  )
}

export default OutsideDuties