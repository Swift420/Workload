
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
import Login from './pages/login/Login';
import HODLanding from './pages/HOD/HODLanding';
import HODDetail from './pages/HOD/HODDetail';
import HODTeaching from './pages/HOD/HODTeaching';
import HODResearch from './pages/HOD/HODResearch';
import HODCommunity from './pages/HOD/HODCommunity';
import HODAdmin from './pages/HOD/HODAdmin';

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
        <Route path="/Workload" element={<Login/>}  />
        <Route path="/HOD" element={<HODLanding/>}  />
        <Route path="/HOD/:stuffNumber" element={<HODDetail/>}  />
        <Route path="/HOD/:stuffNumber/teaching/:stuffNumber" element={<HODTeaching/>}  />
        <Route path="/HOD/:stuffNumber/research/:stuffNumber" element={<HODResearch/>}  />
        <Route path="/HOD/:stuffNumber/community/:stuffNumber" element={<HODCommunity/>}  />
        <Route path="/HOD/:stuffNumber/admin/:stuffNumber" element={<HODAdmin/>}  />
      </Routes>
   
 {/* <Login/> */}

      
    
   
    </>
  );
}

export default App;
