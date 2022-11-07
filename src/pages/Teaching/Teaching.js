import React, { useState } from "react";
import { User, Users } from '../../UserData'
import { Grid, TextField, Button, Card, CardContent, Typography, ListItem } from "@material-ui/core"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {useSelector} from "react-redux"



function Teaching() {

      const user1 = useSelector((state) => state.user.value)
      
    
// const columns: GridColDef[] = [
 
//   { field: 'courseName', headerName: 'Course Name', width: 130 },
//   { field: 'courseCode', headerName: 'CourseCode', width: 130 },
//   { field: 'noveltyOfCourse', headerName: 'Novelty Of Course', width: 250 },
//   { field: 'time', headerName: 'time', width: 90 , type: 'number'},
//   { field: 'contactTime', headerName: 'Contact Time', width: 90 , type: 'number'},
//   { field: 'size', headerName: 'Group Size', width: 90 , type: 'number'},
//   { field: 'Excursions', headerName: 'Excursions', width: 90 , type: 'number'},

  
// ];


       const [teachingDetails, setteachingDetails] = useState({
        courseName: "",
        courseCode: "",
        noveltyOfCourse: "",
        time: 0,
        contactTime: 0,
        size: 0,
        Excursions: 0,
    });
   

    const lecturer = Users.find(data=> {
            return data.stuffNumber == user1.staffNumber
    });

        console.log(`lecturer ${lecturer}`)
    const handleAdd = (e) => {
       e.preventDefault()
      
      if(teachingDetails.courseCode && teachingDetails.courseCode && teachingDetails.noveltyOfCourse && teachingDetails.contactTime > 0 && (teachingDetails.size === 30 || teachingDetails.size === 50)&&  teachingDetails.Excursions > 0){

          lecturer.teachingCourseDetails.push(teachingDetails)
       
            console.log(lecturer)
            
            
        }

    }
    
  return (
    <>
    
    <h1 style={{color:"white", paddingTop:"100px", paddingBottom:"50px", display:"flex", alignItems:"center",justifyContent:"center"}}>Teaching Workload</h1>
       
    <h2 style={{color:"white"}}>Course Details</h2>
        
    
        <Card style={{maxWidth:700}}>
            <CardContent>
                <Grid container spacing={1}>

                
                <Grid item xs={12} sm={6}>
                    <ListItem>Course Code</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField  onChange={(e)=> setteachingDetails({...teachingDetails, courseCode: e.target.value})} label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid><Grid item xs={12} sm={6}>
                    <ListItem>Course Name</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setteachingDetails({...teachingDetails, courseName: e.target.value})} label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ListItem>Novelty of Course</ListItem>
                 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setteachingDetails({...teachingDetails, noveltyOfCourse: e.target.value})}  label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                
                
                </Grid>
                <Grid container spacing={1}>

                
                <Grid item xs={12} sm={6}>
                    <ListItem>Enter Contact time/week</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setteachingDetails({...teachingDetails, contactTime: e.target.value})} type="number" label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid><Grid item xs={12} sm={6}>
                    <ListItem>Group Size(30,50)</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setteachingDetails({...teachingDetails, size: e.target.value})} type="number" label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ListItem>Excursions(total days)</ListItem>
                 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setteachingDetails({...teachingDetails, Excursions: e.target.value})} type="number" label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                
                
                </Grid>
            </CardContent>
            
         <CardContent>
                <Grid  container
  direction="row"
  justifyContent="flex-end"
  alignItems="flex-end">
   
                    <Grid>
                        
                  <Button onClick={handleAdd} color="primary" variant='contained'><Link to="/groupteaching">Group Details</Link> </Button> 
                  </Grid>
                   
                
                
                 </Grid>   
         </CardContent>
         
        </Card>


        
    

    <br></br>

    
  
    </>
  )
}

export default Teaching