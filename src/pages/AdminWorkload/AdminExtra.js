import React, { useState } from "react";
import { User } from '../../UserData'
//import "./Teaching.css"
import { Grid, TextField, Button, Card, CardContent, Typography, ListItem } from "@material-ui/core"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

function AdminExtra() {
    

    const [adminExtraActivity, setAdminExtraActivity] = useState({
        extraActivity: "",
        hours: 0
    });
   

     const columns: GridColDef[] = [
 
  { field: 'extraActivity', headerName: 'Extra Activity', width: 130 },
  { field: 'hours', headerName: 'Actual Hrs/week', width: 90 , type: 'number'},

  
];
    
    const handleSubmit = (e) => {
       e.preventDefault()
      if(adminExtraActivity.extraActivity && adminExtraActivity.hours > 0){

          User.adminExtraActivities.push(adminExtraActivity)
            setAdminExtraActivity({...adminExtraActivity, extraActivity: ""})
            setAdminExtraActivity({...adminExtraActivity, hours: ""})
            
        }

    }
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
                    <TextField onChange={(e)=> setAdminExtraActivity({...adminExtraActivity, hours: e.target.value})} label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                
                
                </Grid>
               
                
                
                
                
            </CardContent>
            
         <CardContent>
                <Grid  container
  direction="row"
   justifyContent="center"
  alignItems="center">
                    <Grid>
<Button onClick={handleSubmit} variant='container'>Add</Button>
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
<Button  variant='container'><Link to="/admin">Major Activities</Link> </Button>
                    </Grid>
                    <Grid>
<Button  variant='container'><Link to="/">Submit</Link> </Button>
                    </Grid>
                    </Grid>
    </form>
    <div className='' style={{ height: 300, width: 700 }}>
      <DataGrid
      style={{backgroundColor:'white', color: 'black',}}
        rows={User.adminExtraActivities}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
    </>
  )
}

export default AdminExtra