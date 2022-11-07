import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Users } from '../../UserData';
import { useParams } from 'react-router-dom';

function HODResearch() {

    const { stuffNumber } = useParams();

    console.log(stuffNumber)

     const lecturer = Users.find(data=> {
            return data.stuffNumber == stuffNumber
    });

         const columns = [
 
  { field: 'Task', headerName: 'Task', width: 300 },
  { field: 'course', headerName: 'Program Course', width: 130 },
  { field: 'contribution', headerName: 'Type of contribution', width: 130 },

  { field: 'hours', headerName: 'Actual Hrs/week', width: 90 , type: 'number'},

  
];

  return (
   <>
   <h1 style={{paddingTop:"0px", color:'white', paddingBottom:"30px"}}>Research Workload</h1>
   
    <div className='' style={{ height: 300, width: 700 }}>
      <DataGrid
      style={{backgroundColor:'white', color: 'black',}}
        rows={lecturer.researchCourseDetails}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        getRowId={(row) =>  row.Task}
      />
    </div>
   </>
  )
}

export default HODResearch