import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Member from './pages/Member';
import StaffEvent from './pages/Staff';
import PartTime from './pages/PartTime/PartTime';
import Admin from './pages/Admin';
import Login from './pages/Auth';
import Register from './pages/Auth/Register';
// Member Import
import TicketRegister from './pages/Member/TicketRegister';
import TicketDetail from './pages/Member/TicketDetail';
import TicketDelete from './pages/Member/TicketDelete';
import MemberEvent from './pages/Member/Event';
import EventSearch from './pages/Member/EventSearch';
import MemberEventDetail from './pages/Member/EventDetail';
import EventReview from './pages/Member/EventReview';
import MemberInfo from './pages/Member/Info';
import MemberInfoCheck from './pages/Member/InfoCheck';
import MemberUserInfo from './pages/Member/InfoUserInfo';
import MemberInfoUpdatePhone from './pages/Member/InfoUpdatePhone';
import MemberInfoUpdatePassword from './pages/Member/InfoUpdatePassword';
import MemberInfoNotice from './pages/Member/InfoNotice';
import MemberInfoNoticeContent from './pages/Member/InfoNoticeContent';
import MemberInfoFAQ from './pages/Member/InfoFAQ';
import MemberInfoFAQContent from './pages/Member/InfoFAQContent';

// Staff Import
import EventRegister from './pages/Staff/EventRegister';
import StaffEventDetail from './pages/Staff/EventDetail';
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
					<Route path="/member/info/faq/content" element={<MemberInfoFAQContent />}/>
					<Route path="/member/info/faq" element={<MemberInfoFAQ />} />
					<Route path="/member/info/notice/content" element={<MemberInfoNoticeContent />} />
					<Route path="/member/info/notice" element={<MemberInfoNotice />} />
					<Route path="/member/info/password" element={<MemberInfoUpdatePassword />} />
					<Route path="/member/info/phone" element={<MemberInfoUpdatePhone />} />
					<Route path="/member/info/user" element={<MemberUserInfo />} />
					<Route path="/member/info/check" element={<MemberInfoCheck />} />
					<Route path="/member/info" element={<MemberInfo />} />
					<Route path="/member/event/:eventId/review" element={<EventReview />} />
					<Route path="/member/event/:eventId" element={<MemberEventDetail />} />
					<Route path="/member/event/search" element={<EventSearch />} />
					<Route path="/member/event" element={<MemberEvent />} />
					<Route path="/member/ticket/delete" element={<TicketDelete />} />
					<Route path="/member/ticket/:ticketId" element={<TicketDetail />} />
					<Route path="/member/register" element={<TicketRegister />} />
					<Route path="/member/*" element={<Member />} />

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
					<Route path="/staff/event/detail" element={<StaffEventDetail />} />						
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
