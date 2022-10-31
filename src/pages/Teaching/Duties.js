import React, { useState } from "react";
import { User } from '../../UserData'
import { Grid, TextField, Button, Card, CardContent, Typography, ListItem } from "@material-ui/core"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


function Duties() {


    const columns: GridColDef[] = [
 
  { field: 'Task', headerName: 'Course Name', width: 130 },
  { field: 'course', headerName: 'Program Course', width: 130 },
  { field: 'contribution', headerName: 'Type of contribution', width: 250 },
  { field: 'hours', headerName: 'Actual Hrs/week', width: 90 , type: 'number'},

  
];

     const [researchActivity, setResearchActivity] = useState({
        Task: "",
        course: "",
        contribution: "",
        hours: 0,
    });
   

    
    const handleAdd = (e) => {
       e.preventDefault()
      if(researchActivity.Task && researchActivity.hours > 0 && researchActivity.contribution && researchActivity.course){

          User.teachingDuties.push(researchActivity)
       
            
            
        }

    }
  return (
    <>
    
       
    <h2 style={{color:"white"}}>Other teaching related duties</h2>
        
    
        <Card style={{maxWidth:700}}>
            <CardContent>
                <Grid container spacing={1}>

                
                <Grid item xs={12} sm={6}>
                    <ListItem>Enter Task</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setResearchActivity({...researchActivity, Task: e.target.value})} label="Course Name" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid><Grid item xs={12} sm={6}>
                    <ListItem>Program Course</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setResearchActivity({...researchActivity, course: e.target.value})} label="Enter Contact time/week" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ListItem>Type of Contribution</ListItem>
                 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setResearchActivity({...researchActivity, contribution: e.target.value})}  label="Enter Contact time/week" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ListItem>Actual Hrs/week </ListItem>
                 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setResearchActivity({...researchActivity, hours: e.target.value})} label="Enter Contact time/week" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
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
<Button variant='container'><Link to="/outsideDuties"> Activites outside the worklaod of FT-employment</Link></Button>
                    </Grid>
                    
                    <Grid>
<Button variant='container'><Link to="/">Submit</Link> </Button>
                    </Grid>
                    </Grid>

                <br></br>
                    <div className='' style={{ height: 300, width: 700 }}>
      <DataGrid
      style={{backgroundColor:'white', color: 'black',}}
        rows={User.teachingDuties}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
    
    </>
  )
}

export default Duties