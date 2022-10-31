
import React, { useState } from "react";
import { User } from '../../UserData'
import { Grid, TextField, Button, Card, CardContent, Typography, ListItem } from "@material-ui/core"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

function Community() {

    const [communityMajorActivity, setCommunityMajorActivity] = useState({
        majorActivity: "",
        hours: 0
    });

    const columns: GridColDef[] = [
 
  { field: 'majorActivity', headerName: 'Major Activity', width: 130 },

  { field: 'hours', headerName: 'Hrs/week', width: 90 , type: 'number'},

  
];
   

    
    const handleAdd = (e) => {
       e.preventDefault()
    
      if(communityMajorActivity.majorActivity && communityMajorActivity.hours > 0){

          User.communityMajorActivities.push(communityMajorActivity)
            setCommunityMajorActivity({...communityMajorActivity, majorActivity: ""})
            setCommunityMajorActivity({...communityMajorActivity, hours: 0})
            
        }

    }
  return (
    <>
    
       
    <h1 style={{color:"white", paddingBottom:"50px", display:"flex", alignItems:"center",justifyContent:"center"}}>Community Workload</h1>
    <h2 style={{color:"white", paddingLeft:"50px"}}>Major Activities</h2>
        
    
        <Card style={{maxWidth:600}}>
            <CardContent>
                <Grid container spacing={1}>

                
                <Grid item xs={12} sm={6}>
                    <ListItem>Enter Major Activity</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=>setCommunityMajorActivity({...communityMajorActivity, majorActivity: e.target.value})} label="Course Name" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid><Grid item xs={12} sm={6}>
                    <ListItem>Enter Hours/Week</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=>setCommunityMajorActivity({...communityMajorActivity, hours: e.target.value})} label="Enter Contact time/week" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
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
<Button variant='container'><Link to="/">Submit</Link> </Button>
                    </Grid>
                    </Grid>

                    <br></br>

                    <div className='' style={{ height: 300, width: 700 }}>
      <DataGrid
      style={{backgroundColor:'white', color: 'black',}}
        rows={User.communityMajorActivities}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
    
    </>
  )
}

export default Community