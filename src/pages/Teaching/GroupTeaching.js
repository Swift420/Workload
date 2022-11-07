import * as React from 'react';
import  { useState } from "react";
import { User, Users } from '../../UserData'
import { Grid, TextField, Button, Card, CardContent, Typography, ListItem } from "@material-ui/core"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {useSelector} from "react-redux"

function GroupTeaching() {

  const user1 = useSelector((state) => state.user.value)
      const lecturer = Users.find(data=> {
            return data.stuffNumber == user1.staffNumber
    });
//     const columns: GridColDef[] = [
 
//   { field: 'group', headerName: 'Groups', width: 130 },
//   { field: 'iDOfGroup', headerName: 'ID Of Group', width: 130 },
//   { field: 'numOfGroupsCoordinated', headerName: 'Number Of Groups Coordinated', width: 90 , type: 'number'},
//   { field: 'sizeOfGroup', headerName: 'size Of Group', width: 90 , type: 'number'},

  
// ];
     const [groupDetails, setGroupDetails] = useState({
        group: "",
        iDOfGroup: "",
        numOfGroupsCoordinated: 0,
        sizeOfGroup: 0,
    });


   

    
    const handleAdd = (e) => {
       e.preventDefault()
      if(groupDetails.group && groupDetails.iDOfGroup && groupDetails.numOfGroupsCoordinated > 0 && groupDetails.sizeOfGroup > 0 ){

          lecturer.tecahingGroupDetails.push(groupDetails)
       
            console.log(lecturer)
            
            
        }

    }

    

    
  return (
    <>
    
    <h1 style={{color:"white", paddingTop:"100px", paddingBottom:"50px", display:"flex", alignItems:"center",justifyContent:"center"}}>Teaching Workload</h1>
       
    <h2 style={{color:"white"}}>Group Details</h2>
        
    
        <Card style={{maxWidth:700}}>
            <CardContent>
                <Grid container spacing={1}>

                
                <Grid item xs={12} sm={6}>
                    <ListItem>Multiple Groups of a course</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setGroupDetails({...groupDetails, group: e.target.value})} label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid><Grid item xs={12} sm={6}>
                    <ListItem>Enter ID/ Name of Group</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setGroupDetails({...groupDetails, iDOfGroup: e.target.value})}  label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ListItem>Enter Num of Groups Coordinated</ListItem>
                 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setGroupDetails({...groupDetails, numOfGroupsCoordinated: e.target.value})} type="number" label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ListItem>Size of Group </ListItem>
                 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setGroupDetails({...groupDetails, sizeOfGroup: e.target.value})} type="number" label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                
                </Grid>
               
                
                
                
                
            </CardContent>
            
         <CardContent>
                <Grid  container
  direction="row"
    justifyContent="space-around"
  alignItems="flex-end">
                    <Grid>
<Button variant='contained' color='primary'><Link to="/teaching" > Course Details </Link></Button>
                    </Grid>
                    <Grid>
<Button onClick={handleAdd} variant='contained' color='primary'><Link to='/duties'>Next</Link> </Button>
                    </Grid>
                
                
                 </Grid>   
         </CardContent>
         
        </Card>
        
    

    <br></br>

    
    
    </>
  )
}

export default GroupTeaching