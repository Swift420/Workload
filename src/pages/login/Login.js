import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import {useSelector} from "react-redux"
import {useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {login} from '../../features/user'
import { Users } from '../../UserData'

function Login() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value)
  const paperStyle={padding: 20, height:550, width:400, margin:"40px auto"}
  
  const [loginDetails,setLoginDetails] = useState({
    staffNumber: 0,
    password: ''
  })
   const navigate = useNavigate()
   const ownNav = () => {
    const lecturer = Users.find(data=> {
            return (data.stuffNumber == loginDetails.staffNumber) && ( data.password == loginDetails.password)
    });
    console.log(lecturer)

    if(typeof lecturer !== "undefined"){
      
      if(lecturer.isAdmin){
        dispatch(login({staffNumber: lecturer.stuffNumber, password: lecturer.password}))
          navigate('/HOD')
      }else if(lecturer.isAdmin == false) {
        dispatch(login({staffNumber: lecturer.stuffNumber, password: lecturer.password}))
          navigate('/')
      }
    }
   } 
    return (
      <>
    <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar ></Avatar>
            <h1>Login</h1>  
            </Grid>     
            <TextField label='Staff Number' onChange={(e)=>setLoginDetails({...loginDetails, staffNumber: e.target.value}) } style={{margin: '20px 0'}} fullWidth variant='outlined' required/>
            <TextField label='Password' onChange={(e)=>setLoginDetails({...loginDetails, password: e.target.value}) }  style={{margin: '20px 0'}} fullWidth variant='outlined' type='password' required/>
            

             <Button  onClick={()=>ownNav()} type='submit' style={{margin: '20px 0'}} fullWidth  color='primary' variant='contained'><Link to='/'>Login</Link> </Button>
            
        </Paper>
    </Grid>
    </>
  )
}

export default Login