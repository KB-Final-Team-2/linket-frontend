import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Member from './pages/Member';
import StaffEvent from './pages/Staff';
import PartTime from './pages/PartTime/PartTime';
import Admin from './pages/Admin';
import Login from './pages/Auth';
import Register from './pages/Auth/Register';
import EventRegister from './pages/Staff/EventRegister';
import EventDetail from './pages/Staff/EventDetail';
import EventUpdate from './pages/Staff/EventUpdate';
import EventDelete from './pages/Staff/EventDelete';
import StaffAttend from './pages/Staff/EventAttend';
import AttendDetail from './pages/Staff/EventAttendDetail';
import StaffInfo from './pages/Staff/Info';
import StaffInfoCheck from './pages/Staff/InfoCheck';
import StaffUserInfo from './pages/Staff/InfoUserInfo';
import StaffUpdatePassword from './pages/Staff/InfoUpdatePassword';
import StaffUpdatePhone from './pages/Staff/InfoUpdatePhone';
import StaffInfoNotice from './pages/Staff/InfoNotice';
import StaffInfoNoticeContent from './pages/Staff/InfoNoticeContent';
import StaffInfoFAQ from './pages/Staff/InfoFAQ';
import StaffInfoFAQContent from './pages/Staff/InfoNoticeContent';

function App() {
	return (
		<div className="App">

		<header className="App-header">
			<BrowserRouter>
				<Routes>
					{/* Member Router */}
					<Route path="/member" element={<Member />} />

					{/* Staff Router */}
					<Route path="/staff/info/faq/contents" element={<StaffInfoFAQContent />} />	
					<Route path="/staff/info/faq" element={<StaffInfoFAQ />} />	
					<Route path="/staff/info/notice/content" element={<StaffInfoNoticeContent />} />	
					<Route path="/staff/info/notice" element={<StaffInfoNotice />} />	
					<Route path="/staff/info/updatepassword" element={<StaffUpdatePassword />} />	
					<Route path="/staff/info/updatephone" element={<StaffUpdatePhone />} />	
					<Route path="/staff/info/userinfo" element={<StaffUserInfo />} />	
					<Route path="/staff/info/check" element={<StaffInfoCheck />} />	
					<Route path="/staff/info/home" element={<StaffInfo />} />	
					<Route path="/staff/event/attend/detail" element={<AttendDetail />} />	
					<Route path="/staff/event/attend" element={<StaffAttend />} />	
					<Route path="/staff/event/delete" element={<EventDelete />} />	
					<Route path="/staff/event/update" element={<EventUpdate />} />								
					<Route path="/staff/event/detail" element={<EventDetail />} />						
					<Route path="/staff/event/register" element={<EventRegister />} />					
					<Route path="/staff/events/home" element={<StaffEvent />} />

					{/* PartTime Router */}
					<Route path="/partTime" element={<PartTime />} />

					{/* Admin Router */}
					<Route path="/admin" element={<Admin />} />

					{/* Auth Router */}
					<Route path="/register" element={<Register />} />
					<Route path="*" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</header>
		</div>
	);
}

export default App;
