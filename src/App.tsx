import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Member from './pages/Member';
import Staff from './pages/Staff';
import PartTime from './pages/PartTime';
import Admin from './pages/Admin';
import Login from './pages/Auth';
import Register from './pages/Auth/Register';
import PartTimeHireRegister from './pages/PartTime/HireRegister';
import PartTimeAttendHire from './pages/PartTime/AttendHire';
import PartTimeHireDetail from './pages/PartTime/HireDetail';
import PartTimeAttendDetail from './pages/PartTime/AttendDetail';
import PartTimeInfo from './pages/PartTime/Info';
import PartTimeInfoCheck from './pages/PartTime/InfoCheck';
import PartTimeUserInfo from './pages/PartTime/InfoUserInfo';
import PartTimeInfoUpdatePhone from './pages/PartTime/InfoUpdatePhone';
import PartTimeInfoUpdatePassword from './pages/PartTime/InfoUpdatePassword';
import PartTimeInfoNotice from './pages/PartTime/InfoNotice';
import PartTimeInfoNoticeContent from './pages/PartTime/InfoNoticeContent';
import PartTimeInfoFAQ from './pages/PartTime/InfoFAQ';

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
import EventSearchResult from './pages/Member/EventSearchResult';
import WebView from './pages/Staff/WebView';
import HireSearch from './pages/PartTime/HireSearch';
import HireSearchResult from './pages/PartTime/HireSearchResult';
import HireSearchDetail from './pages/PartTime/HireSearchDetail';
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<BrowserRouter>
					<Routes>
						{/* Member Router */}
						<Route path="/member/info/faq" element={<MemberInfoFAQ />} />
						<Route path="/member/info/notice/:noticeId" element={<MemberInfoNoticeContent />} />
						<Route path="/member/info/notice" element={<MemberInfoNotice />} />
						<Route path="/member/info/user/password" element={<MemberInfoUpdatePassword />} />
						<Route path="/member/info/user/phone" element={<MemberInfoUpdatePhone />} />
						<Route path="/member/info/user" element={<MemberUserInfo />} />
						<Route path="/member/info/check" element={<MemberInfoCheck />} />
						<Route path="/member/info" element={<MemberInfo />} />
						<Route path="/member/event/:eventId/review" element={<EventReview />} />
						<Route path="/member/event/:eventId" element={<MemberEventDetail />} />
						<Route path="/member/event/search/result" element={<EventSearchResult />} />
						<Route path="/member/event/search" element={<EventSearch />} />
						<Route path="/member/event" element={<MemberEvent />} />
						<Route path="/member/ticket/delete" element={<TicketDelete />} />
						<Route path="/member/ticket/:ticketId" element={<TicketDetail />} />
						<Route path="/member/register" element={<TicketRegister />} />
						<Route path="/member/*" element={<Member />} />

						{/* Staff Router */}
						<Route path="/staff/info/faq" element={<StaffInfoFAQ />} />	
						<Route path="/staff/info/notice/:noticeId" element={<StaffInfoNoticeContent />} />	
						<Route path="/staff/info/notice" element={<StaffInfoNotice />} />	
						<Route path="/staff/info/user/password" element={<StaffUpdatePassword />} />	
						<Route path="/staff/info/user/phone" element={<StaffUpdatePhone />} />	
						<Route path="/staff/info/user" element={<StaffUserInfo />} />	
						<Route path="/staff/info/check" element={<StaffInfoCheck />} />	
						<Route path="/staff/info" element={<StaffInfo />} />	
						<Route path="/staff/event/:eventId/attend/:date" element={<AttendDetail />} />	
						<Route path="/staff/event/:eventId/attend" element={<StaffAttend />} />	
						<Route path="/staff/event/:eventId/delete" element={<EventDelete />} />	
						<Route path="/staff/event/:eventId/update" element={<EventUpdate />} />								
						<Route path="/staff/event/:eventId" element={<StaffEventDetail />} />						
						<Route path="/staff/event/register" element={<EventRegister />} />					
						<Route path="/staff/*" element={<Staff />} />

						{/* Staff Web Router */}
						<Route path="/staff/web" element={<WebView />} />

						{/* PartTime Router */}
						<Route path="/part/*" element={<PartTime />} />
						<Route path="/part/register" element={<PartTimeHireRegister />} />
						<Route path="/part/:hireId" element={<PartTimeHireDetail />} />
						<Route path="/part/:hireId/attend" element={<PartTimeAttendHire />} />
						<Route path="/part/:hireId/attend/:attendId" element={<PartTimeAttendDetail />} />
						<Route path="/part/:hireId" element={<HireSearchDetail />} />
						<Route path='/part/search' element={<HireSearch />}/>
						<Route path='/part/search/result' element={<HireSearchResult />}/>
						<Route path="/part/search/:hireId" element={<HireSearchDetail />} />

						<Route path="/part/info" element={<PartTimeInfo />} />
						<Route path="/part/info/check" element={<PartTimeInfoCheck />} />
						<Route path="/part/info/user" element={<PartTimeUserInfo />} />
						<Route path="/part/info/user/phone" element={<PartTimeInfoUpdatePhone />} />
						<Route path="/part/info/user/password" element={<PartTimeInfoUpdatePassword />} />

						<Route path="/part/info/notice" element={<PartTimeInfoNotice />} />
						<Route path="/part/info/notice/:noticeId" element={<PartTimeInfoNoticeContent />} />
						<Route path="/part/info/faq" element={<PartTimeInfoFAQ />} />


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
