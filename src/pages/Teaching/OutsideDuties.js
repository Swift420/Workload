import React, { useState } from "react";
import { User } from '../../UserData'
import { Grid, TextField, Button, Card, CardContent, Typography, ListItem } from "@material-ui/core"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

function OutsideDuties() {


     const columns: GridColDef[] = [
 
  { field: 'Task', headerName: 'Course Name', width: 130 },
  { field: 'course', headerName: 'Program Course', width: 130 },
  { field: 'coursecode', headerName: 'Course Code', width: 130 },
  { field: 'numOfStudents', headerName: 'Number Of Students', width: 250 },
  { field: 'hours', headerName: 'Actual Hrs/week', width: 90 , type: 'number'},

  
];
         const [outsideActivity, setoutsideActivity] = useState({
        Task: "",
        course: "",
        coursecode: "",
        numOfStudents: 0,
        hours: 0,
    });
   

    
    const handleAdd = (e) => {
       e.preventDefault()
      
      if(outsideActivity.Task && outsideActivity.hours > 0 && outsideActivity.numOfStudents && outsideActivity.coursecode && outsideActivity.course){

          User.teachingOutside.push(outsideActivity)
       
            
            
        }

    }
  return (
    <>
    
       
    <h2 style={{color:"white", paddingTop:"300px"}}>Activities outside the workload of FT-employment</h2>
        
    
        <Card style={{maxWidth:700}}>
            <CardContent>
                <Grid container spacing={1}>

                
                <Grid item xs={12} sm={6}>
                    <ListItem>Enter Task</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setoutsideActivity({...outsideActivity, Task: e.target.value})} label="Course Name" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
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
                    <TextField onChange={(e)=> setoutsideActivity({...outsideActivity, numOfStudents: e.target.value})} label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <ListItem>Hours/week </ListItem>
                 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setoutsideActivity({...outsideActivity, hours: e.target.value})} label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                
                </Grid>
               
                
                
                
                
            </CardContent>
            
         <CardContent>
                <Grid  container
  direction="row"
   justifyContent="center"
  alignItems="center">
                    <Grid>
<Button onClick={handleAdd} variant='container'>Add</Button>
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
<Button variant='container'><Link to="/"> Cancel </Link></Button>
                    </Grid>
                    <Grid>
<Button variant='container'><Link to="/">Submit</Link> </Button>
                    </Grid>
                    </Grid>
    <br></br>
    <div className='' style={{ height: 300, width: 700 }}>
      <DataGrid
      style={{backgroundColor:'white', color: 'black',}}
        rows={User.teachingOutside}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
    </>
  )
}

export default OutsideDuties