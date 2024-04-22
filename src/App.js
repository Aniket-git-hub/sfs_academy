import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from "./Components/Main";
import TimeTable from './Components/CommonPages/TimeTable';
import RegisterForm from './Components/User/RegisterForm';
import LoginForm from './Components/User/LoginForm';
import Course from './Components/CommonPages/Course';
import ReviewMain from './Components/CommonPages/ReviewMain';
import Resources from './Components/Resources/Resources';
import Payments from './Components/CommonPages/Payments';
import TermsAndConditions from './Components/CommonPages/TermsAndConditions';
import ComingSoon from './Components/CommonPages/ComingSoon';
import LoginForNotes from './Components/User/LoginForNotes';
import Admin from './Components/Admin/Admin';
import AdminLogin from './Components/Admin/AdminLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/time-table" element={<TimeTable />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/loginnotes" element={<LoginForNotes />} />
        <Route path="/course" element={<Course />} />
        <Route path="/reviews" element={<ReviewMain />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/admin/upload" element={<Admin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
