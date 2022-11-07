import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Avatar, Button, Grid, Paper, TextField,Card, CardContent, Typography, ListItem } from '@material-ui/core'
import { Users } from '../../UserData'

function HODDetail() {
    const { stuffNumber } = useParams()
    const paperStyle={padding: 20, height:450, width:600, margin:"40px auto"}

    var x = Number(stuffNumber)

    const lecturer = Users.find(data=> {
            return data.stuffNumber == stuffNumber
    });
    
  const [approve, setApprove] = useState(lecturer.status)


   
    
  return (
    <>
    <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="right">
            <Typography variant='h8'>Workload: {lecturer.workload}%</Typography>

          </Grid>
          <br></br>
          <Card style={{maxWidth:700}}>
            <CardContent>
                    <Grid container direction="row" justifyContent='space-evenly' alignItems='center' >
            <Typography variant='h6'>Staff Number: {lecturer.stuffNumber}</Typography>
            <Typography variant='h6'>Staff Name: {lecturer.fullName1}</Typography>

          </Grid>
            </CardContent>
           
            </Card>
          <br></br>
          <Card style={{maxWidth:700}}>
            <CardContent>
                    <Grid container direction="row" justifyContent='space-evenly' alignItems='center' >
            <Typography variant='h10'>Department: {lecturer.department}</Typography>
            <Typography variant='h10'>Status: {approve}</Typography>

          </Grid>
            </CardContent>
           
            </Card>
          

          <Grid container spacing={1} style={{paddingTop:50}}>

                
                <Grid item xs={12} sm={6} style={{paddingTop:20}}>
                   <Button variant='contained' color='primary' fullWidth><Link to={`/HOD/${lecturer.stuffNumber}/teaching/${lecturer.stuffNumber}`}>Teaching Workload</Link> </Button>

                </Grid>
                <Grid item xs={12} sm={6} style={{paddingTop:20}}>
                                       <Button variant='contained' color='primary' fullWidth><Link to={`/HOD/${lecturer.stuffNumber}/research/${lecturer.stuffNumber}`}> Research Workload</Link></Button>

                </Grid>
                <Grid item xs={12} sm={6} style={{paddingTop:20}}>
                    <Button variant='contained' color='primary' fullWidth><Link to={`/HOD/${lecturer.stuffNumber}/admin/${lecturer.stuffNumber}`}>Admin Workload </Link></Button>
                 
                </Grid>
                <Grid item xs={12} sm={6} style={{paddingTop:20}}>
                    <Button variant='contained' color='primary' fullWidth><Link to={`/HOD/${lecturer.stuffNumber}/community/${lecturer.stuffNumber}`}>Community Workload </Link></Button>
                    
                </Grid>
                
                
                
                </Grid>    
            
        </Paper>
    </Grid>
    
         <Grid 
    container
  direction="row"
   justifyContent="space-evenly"
  alignItems="center">
    <Grid>
<Button variant='contained' color='primary'><Link to="/HOD"> Back </Link></Button>
                    </Grid>
                    <Grid>
<Button variant='contained' style={{backgroundColor:"Red"}}><Link > Decline </Link></Button>
                    </Grid>
                    
                    <Grid>
<Button onClick={()=> setApprove("Declined")} variant='contained' style={{backgroundColor:"Green"}}><Link >Approve</Link> </Button>
                    </Grid>
                    </Grid>
    </>
  )
}

export default HODDetail