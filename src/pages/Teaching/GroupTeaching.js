import React, { useState } from "react";
import { User } from '../../UserData'
import { Grid, TextField, Button, Card, CardContent, Typography, ListItem } from "@material-ui/core"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
function GroupTeaching() {


    const columns: GridColDef[] = [
 
  { field: 'group', headerName: 'Groups', width: 130 },
  { field: 'iDOfGroup', headerName: 'ID Of Group', width: 130 },
  { field: 'numOfGroupsCoordinated', headerName: 'Number Of Groups Coordinated', width: 90 , type: 'number'},
  { field: 'sizeOfGroup', headerName: 'size Of Group', width: 90 , type: 'number'},

  
];
     const [groupDetails, setGroupDetails] = useState({
        group: "",
        iDOfGroup: "",
        numOfGroupsCoordinated: 0,
        sizeOfGroup: 0,
    });
   

    
    const handleAdd = (e) => {
       e.preventDefault()
      if(groupDetails.group && groupDetails.iDOfGroup && groupDetails.numOfGroupsCoordinated > 0 && groupDetails.sizeOfGroup > 0 ){

          User.tecahingGroupDetails.push(groupDetails)
       
            console.log(User.tecahingGroupDetails)
            
            
        }

    }

    
  return (
    <>
    
       
    <h1 style={{color:"white", paddingTop:"100px"}}>Group Details</h1>
        
    
        <Card style={{maxWidth:700}}>
            <CardContent>
                <Grid container spacing={1}>

                
                <Grid item xs={12} sm={6}>
                    <ListItem>Multiple Groups of a course</ListItem>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setGroupDetails({...groupDetails, group: e.target.value})} label="Course Name" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
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
                    <TextField onChange={(e)=> setGroupDetails({...groupDetails, numOfGroupsCoordinated: e.target.value})}  label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ListItem>Size of Group </ListItem>
                 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField onChange={(e)=> setGroupDetails({...groupDetails, sizeOfGroup: e.target.value})} label="" palceholder="Enter Course Code" variant="outlined" fullWidth></TextField>
                </Grid>
                
                </Grid>
               
                
                
                
                
            </CardContent>
            
         <CardContent>
                <Grid  container
  direction="row"
    justifyContent="space-around"
  alignItems="flex-end">
                    <Grid>
<Button variant='container'><Link to="/teaching"> Course Details </Link></Button>
                    </Grid>
                    <Grid>
<Button onClick={handleAdd} variant='container'><Link to='/duties'>Next</Link> </Button>
                    </Grid>
                
                
                 </Grid>   
         </CardContent>
         
        </Card>
        
    

    <br></br>

    <div className='' style={{ height: 300, width: 700 }}>
      <DataGrid
      style={{backgroundColor:'white', color: 'black',}}
        rows={User.tecahingGroupDetails}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
    
    </>
  )
}

export default GroupTeaching