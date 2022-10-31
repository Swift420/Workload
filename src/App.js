
import Admin from './pages/AdminWorkload/Admin';
import AdminExtra from './pages/AdminWorkload/AdminExtra';
import Community from './pages/Community/Community';
import Home from './pages/Home/Home';
import ResearchCourse from './pages/Research/ResearchCourse';
import Duties from './pages/Teaching/Duties';
import GroupTeaching from './pages/Teaching/GroupTeaching';
import OutsideDuties from './pages/Teaching/OutsideDuties';
import  Teaching  from './pages/Teaching/Teaching';
import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
   
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/teaching" element={<Teaching/>}  />
        
        <Route path="/duties" element={<Duties/>}  />
        <Route path="/groupteaching" element={<GroupTeaching/>}  />
        <Route path="/outsideDuties" element={<OutsideDuties/>}  />
        <Route path="/researchcourse" element={<ResearchCourse/>}  />
        <Route path="/admin" element={<Admin/>}  />
        <Route path="/adminExtra" element={<AdminExtra/>}  />
        <Route path="/community" element={<Community/>}  />
      </Routes>
   

    
     {/* <Teaching/> */}

     {/* <GroupTeaching/> done*/}
    {/* <Duties/> done*/}
    {/* <OutsideDuties/> done*/}
    {/* <ResearchCourse/> done*/}
    {/* <Admin/> done*/}
    {/* <AdminExtra/> done*/}
    {/* <Community/> done*/} 
    </>
  );
}

export default App;
