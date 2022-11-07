import React from 'react'
import { Users } from '../../UserData';
import { DataGrid } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';

function HODTeaching() {

  const { stuffNumber } = useParams();

    console.log(stuffNumber)

     const lecturer = Users.find(data=> {
            return data.stuffNumber == stuffNumber
    });
    const columns = [
 
  { field: 'courseName', headerName: 'Course Name', width: 100 },
  { field: 'courseCode', headerName: 'CourseCode', width: 130 },
  { field: 'noveltyOfCourse', headerName: 'Novelty Of Course', width: 150 },
  { field: 'time', headerName: 'time', width: 50 , type: 'number'},
  { field: 'contactTime', headerName: 'Contact Time', width: 90 , type: 'number'},
  { field: 'size', headerName: 'Group Size', width: 90 , type: 'number'},
  { field: 'Excursions', headerName: 'Excursions', width: 90 , type: 'number'},

  
];

const columns2 = [
 
  { field: 'group', headerName: 'Groups', width: 130 },
  { field: 'iDOfGroup', headerName: 'ID Of Group', width: 130 },
  { field: 'numOfGroupsCoordinated', headerName: 'Number Of Groups Coordinated', width: 90 , type: 'number'},
  { field: 'sizeOfGroup', headerName: 'size Of Group', width: 90 , type: 'number'},

  
];

     const columns3= [
 
  { field: 'Task', headerName: 'Course Name', width: 130 },
  { field: 'course', headerName: 'Program Course', width: 130 },
  { field: 'coursecode', headerName: 'Course Code', width: 130 },
  { field: 'numOfStudents', headerName: 'Number Of Students', width: 150 },
  { field: 'hours', headerName: 'Actual Hrs/week', width: 100 , type: 'number'},

  
];

    const columns4 = [
 
  { field: 'Task', headerName: 'Course Name', width: 230 },
  { field: 'course', headerName: 'Program Course', width: 130 },
  { field: 'contribution', headerName: 'Type of contribution', width: 150 },
  { field: 'hours', headerName: 'Actual Hrs/week', width: 90 , type: 'number'},

  
];

  return (
    <>
    <h1 style={{paddingTop:"900px", color:'white', paddingBottom:"30px"}}>Teaching Workload</h1>
    
    <h2 style={{color:'white', paddingLeft:"20px"}}>Group</h2>

    <div className='' style={{ height: 300, width: 700 }}>
      <DataGrid
      style={{backgroundColor:'white', color: 'black',}}
        rows={lecturer.tecahingGroupDetails}
        columns={columns2}
        pageSize={7}
        rowsPerPageOptions={[7]}
        getRowId={(row) =>  row.iDOfGroup}
        
      />
    </div>
    <br></br>
    <br></br>
    <h2 style={{color:'white', paddingLeft:"20px"}}>Other Teaching related duties</h2>
    <div className='' style={{ height: 300, width: 700 }}>
      <DataGrid
      style={{backgroundColor:'white', color: 'black',}}
        rows={lecturer.teachingOutside}
        columns={columns3}
        pageSize={7}
        rowsPerPageOptions={[7]}
        getRowId={(row) =>  row.coursecode}
        
      />
    </div>
    <br></br>
    <br></br>
    <h2 style={{color:'white', paddingLeft:"20px"}}>Activities outside the workload of FT-employment</h2>
    <div className='' style={{ height: 300, width: 700 }}>
      <DataGrid
      style={{backgroundColor:'white', color: 'black',}}
        rows={lecturer.teachingDuties}
        columns={columns4}
        pageSize={7}
        rowsPerPageOptions={[7]}
        getRowId={(row) =>  row.course}
        
      />
    </div>
    <br></br>
    <br></br>

    <h2 style={{color:'white', paddingLeft:"20px"}}>Course</h2>

    <div className='' style={{ height: 300, width: 700 }}>
      <DataGrid
      style={{backgroundColor:'white', color: 'black',}}
        rows={lecturer.teachingCourseDetails}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        getRowId={(row) =>  row.courseCode}
      />
    </div>
    <br></br>
    
    </>
  )
}

export default HODTeaching