import React, { useState } from "react";
import { User, Users } from '../../UserData'
//import "./Teaching.css"
import { Grid, TextField, Button, Card, CardContent, Typography, ListItem } from "@material-ui/core"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Alert from "@mui/material/Alert";
import {useSelector} from "react-redux"

function AdminExtra() {
      const user1 = useSelector((state) => state.user.value)
    const [open, setOpen] = React.useState(false);

    const [adminExtraActivity, setAdminExtraActivity] = useState({
        extraActivity: "",
        hours: 0
    });
   const lecturer = Users.find(data=> {
            return data.stuffNumber == user1.staffNumber
    });

//      const columns: GridColDef[] = [
 
//   { field: 'extraActivity', headerName: 'Extra Activity', width: 130 },
//   { field: 'hours', headerName: 'Actual Hrs/week', width: 90 , type: 'number'},

  
// ];
    
    const handleSubmit = (e) => {
       e.preventDefault()

      if(adminExtraActivity.extraActivity && adminExtraActivity.hours > 0){
          
          lecturer.adminExtraActivities.push(adminExtraActivity)
            console.log(lecturer.adminExtraActivities)
            setOpen(true)
            
        }

    }

    const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    

       

    <h1 style={{color:"white", paddingBottom:"50px", display:"flex", alignItems:"center",justifyContent:"center"}}>Admin Workload</h1>
    <h2 style={{color:"white", paddingLeft:"50px"}}>Extra Activities</h2>
        
     <form onSubmit={handleSubmit}>
        <Card style={{maxWidth:700}}>
            <CardContent>
               
                <Grid container spacing={1}>

                
                <Grid item xs={12} sm={6}>
                    <ListItem>Enter Extra Activity</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setAdminExtraActivity({...adminExtraActivity, extraActivity: e.target.value})} label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid><Grid item xs={12} sm={6}>
                    <ListItem>Enter Hours/Week</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setAdminExtraActivity({...adminExtraActivity, hours: e.target.value})} type="number" label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                
                
                </Grid>
               
                
                
                
                
            </CardContent>
            
         <CardContent>
                <Grid  container
  direction="row"
   justifyContent="center"
  alignItems="center">
                    <Grid>
<Button onClick={handleSubmit} style={{background:'green', color:'white'}} variant='contained'>Add</Button>
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
<Button  variant='contained' color='primary'><Link to="/admin">Major Activities</Link> </Button>
                    </Grid>
                    <Grid>
<Button  variant='contained' color='primary'><Link to="/">Done</Link> </Button>
                    </Grid>
                    </Grid>
    </form>
    {/* <div className='' style={{ height: 300, width: 700 }}>
      <DataGrid
      style={{backgroundColor:'white', color: 'black',}}
        rows={User.adminExtraActivities}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div> */}
<Stack spacing={2} sx={{ width: '100%' }}>
      
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Admin Major Activity Successfully added
        </Alert>
      </Snackbar>
      
      
    </Stack>

    </>
  )
}

export default AdminExtra