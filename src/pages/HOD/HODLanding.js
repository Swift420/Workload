import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Users } from '../../UserData';

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { Avatar, Grid } from '@material-ui/core';
import {logout} from '../../features/user'
import {useDispatch} from 'react-redux'
import {useSelector} from "react-redux"

const columns = [
  { field: 'stuffNumber', headerName: 'Stuff Number', width: 130,  renderCell: (params) => (
    <Link to={`/HOD/${params.value}`}>{params.value}</Link>
  )},
  { field: 'fullName1', headerName: 'Full Name', width: 130 },
  { field: 'department', headerName: 'Department', width: 200 },
  { field: 'status', headerName: 'Status', width: 130 },
  { field: 'dateSubmitted', headerName: 'Date Submitted', width: 130 },
  { field: 'workload', headerName: 'Workload (%)', width: 130 , type: 'number'},

  
 
];



function HODLanding() {
const dispatch = useDispatch()  

const user1 = useSelector((state) => state.user.value)
const lecturer = Users.find(data=> {
            return data.stuffNumber == user1.staffNumber
    });
  return (
    <>
    
    <h1 style={{color:"white", paddingTop:"100px", paddingBottom:"20px", display:"flex", alignItems:"center",justifyContent:"center"}}>Workload Management System</h1>
    <Grid style={{paddingLeft:"400px", paddingBottom:"30px"}}>
<Link to="/Workload" >
    <Avatar onClick={()=>{
      

        dispatch(logout())
      
    }} style={{backgroundColor:"Green"}}>{lecturer.fullName1.substring(0,1)}</Avatar>
    </Link>
    </Grid>
    <div style={{ height: 500, width: 900, backgroundColor: 'white', }}>
      <DataGrid
        rows={Users}
       columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        
        />
    </div>
    
    
        </>
  )
}

export default HODLanding