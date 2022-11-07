
import React, { useState } from "react";
import { User, Users } from '../../UserData'
import { Grid, TextField, Button, Card, CardContent, Typography, ListItem } from "@material-ui/core"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import Stack from '@mui/material/Stack';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Alert from "@mui/material/Alert";
import {useSelector} from "react-redux"


function Community() {
   const user1 = useSelector((state) => state.user.value)
   
    const [open, setOpen] = React.useState(false);

    const [communityMajorActivity, setCommunityMajorActivity] = useState({
        majorActivity: "",
        hours: 0
    });

    const lecturer = Users.find(data=> {
            return data.stuffNumber == user1.staffNumber
    });


   

//     const columns: GridColDef[] = [
 
//   { field: 'majorActivity', headerName: 'Major Activity', width: 130 },

//   { field: 'hours', headerName: 'Hrs/week', width: 90 , type: 'number'},

  
// ];
   

    
    const handleAdd = (e) => {
       e.preventDefault()
    
      if(communityMajorActivity.majorActivity && communityMajorActivity.hours > 0){

          lecturer.communityMajorActivities.push(communityMajorActivity)
            
            console.log(lecturer)
            setOpen(true)

            
        }

    }

    const handleClose = () => {
    setOpen(false);
  };
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
                    <TextField onChange={(e)=>setCommunityMajorActivity({...communityMajorActivity, majorActivity: e.target.value})} label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid><Grid item xs={12} sm={6}>
                    <ListItem>Enter Hours/Week</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=>setCommunityMajorActivity({...communityMajorActivity, hours: e.target.value})} type="number" label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                
                
                </Grid>
               
                
                
                
                
            </CardContent>
            
         <CardContent>
                <Grid  container
  direction="row"
   justifyContent="center"
  alignItems="center">
                    <Grid >
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
<Button color="primary" variant='contained'><Link to="/">Done</Link> </Button>
                    </Grid>
                    </Grid>

                    <br></br>

                    {/* <div className='' style={{ height: 300, width: 700 }}>
      <DataGrid
      style={{backgroundColor:'white', color: 'black',}}
        rows={User.communityMajorActivities}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div> */}
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

export default Community