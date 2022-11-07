import React from 'react'
import { Users } from '../../UserData'
import { DataGrid } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';

function HODCommunity() {
    const { stuffNumber } = useParams();

    console.log(stuffNumber)

     const lecturer = Users.find(data=> {
            return data.stuffNumber == stuffNumber
    });
    
        const columns = [
 
  { field: 'majorActivity', headerName: 'Major Activity', width: 300 },

  { field: 'hours', headerName: 'Hrs/week', width: 90 , type: 'number'},

  
];
  return (
    <>
    <h1 style={{paddingTop:"0px", color:'white', paddingBottom:"30px"}}>Community Workload</h1>
   
    <div className='' style={{ height: 300, width: 700 }}>
      <DataGrid
      style={{backgroundColor:'white', color: 'black',}}
        rows={lecturer.communityMajorActivities}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        getRowId={(row) =>  row.majorActivity}
      />
    </div>
    </>
  )
}

export default HODCommunity