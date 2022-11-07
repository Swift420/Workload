import React, { useState } from "react";
import { User, Users } from '../../UserData'
import { Grid, TextField, Button, Card, CardContent, Typography, ListItem } from "@material-ui/core"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Alert from "@mui/material/Alert";
import {useSelector} from "react-redux"

function ResearchCourse() {
  const user1 = useSelector((state) => state.user.value)
  const lecturer = Users.find(data=> {
            return data.stuffNumber == user1.staffNumber
    });

    console.log(lecturer)
    const [open, setOpen] = React.useState(false);
     const [researchActivity, setResearchActivity] = useState({
        Task: "",
        course: "",
        contribution: "",
        hours: 0,
    });

    const [dataGridRows, setDataGridRows] = useState([]);
   
     

//      const columns: GridColDef[] = [
 
//   { field: 'Task', headerName: 'Task', width: 130 },
//   { field: 'course', headerName: 'Program Course', width: 130 },
//   { field: 'contribution', headerName: 'Type of contribution', width: 130 },

//   { field: 'hours', headerName: 'Actual Hrs/week', width: 90 , type: 'number'},

  
// ];

 

    
    const handleAdd = (e) => {
       e.preventDefault()
      if(researchActivity.Task && researchActivity.hours > 0 && researchActivity.contribution && researchActivity.course){

          lecturer.researchCourseDetails.push(researchActivity)
       
            console.log(lecturer.researchCourseDetails)
            setOpen(true)
            
        }
             

    }

    const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    
       
    <h1 style={{color:"white", paddingTop:"100px", paddingBottom:"50px", display:"flex", alignItems:"center",justifyContent:"center"}}>Research Workload</h1>
    <h2 style={{color:"white", paddingLeft:"50px"}}>Course Details</h2>
        
    
        <Card style={{maxWidth:700}}>
            <CardContent>
                <Grid container spacing={1}>

                
                <Grid  item xs={12} sm={6}>
                    <ListItem>Enter Task</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setResearchActivity({...researchActivity, Task: e.target.value})} label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid><Grid item xs={12} sm={6}>
                    <ListItem>Program Course</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setResearchActivity({...researchActivity, course: e.target.value})}  label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ListItem>Type of Contribution</ListItem>
                 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setResearchActivity({...researchActivity, contribution: e.target.value})}  label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ListItem>Actual Hrs/week </ListItem>
                 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setResearchActivity({...researchActivity, hours: e.target.value})} type="number" label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
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
<Button onClick={handleAdd} style={{background:'green', color:'white'}} variant='contained'>Add</Button>
                    </Grid>
                    <Grid>
<Button variant='contained' color="primary"><Link to="/">Done</Link> </Button>
                    </Grid>
                    </Grid>
    <br></br>
    {/* <div className='' style={{ height: 300, width: 700 }}>
      <DataGrid
      style={{backgroundColor:'white', color: 'black',}}
        rows={dataGridRows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        getRowId={(row) =>  row.Task}
      />
    </div> */}

    <Stack spacing={2} sx={{ width: '100%' }}>
      
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Research Successfully added
        </Alert>
      </Snackbar>
      
      
    </Stack>
    </>
  )
}

export default ResearchCourse