import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Member from './pages/Member';
import Staff from './pages/Staff';
import PartTime from './pages/PartTime';

// Member Import
import TicketRegister from './pages/Member/TicketRegister';
import TicketDetail from './pages/Member/TicketDetail';
import TicketDelete from './pages/Member/TicketDelete';
import MemberEvent from './pages/Member/Event';
import EventSearch from './pages/Member/EventSearch';
import MemberEventDetail from './pages/Member/EventDetail';
import EventReview from './pages/Member/EventReview';

// Staff Import
import EventRegister from './pages/Staff/EventRegister';
import StaffEventDetail from './pages/Staff/EventDetail';
import EventUpdate from './pages/Staff/EventUpdate';
import EventDelete from './pages/Staff/EventDelete';
import StaffAttend from './pages/Staff/EventAttend';
import AttendDetail from './pages/Staff/EventAttendDetail';
import EventSearchResult from './pages/Member/EventSearchResult';
import WebView from './pages/Staff/WebView';
import HireSearch from './pages/PartTime/HireSearch';
import HireSearchResult from './pages/PartTime/HireSearchResult';
import HireSearchDetail from './pages/PartTime/HireSearchDetail';

//Part Import
import PartTimeHireRegister from './pages/PartTime/HireRegister';
import PartTimeAttendHire from './pages/PartTime/AttendHire';
import PartTimeHireDetail from './pages/PartTime/HireDetail';
import PartTimeAttendDetail from './pages/PartTime/AttendDetail';

//Auth Import
import Info from './pages/Auth/Info';
import InfoCheck from './pages/Auth/InfoCheck';
import UserInfo from './pages/Auth/InfoUserInfo';
import InfoUpdatePhone from './pages/Auth/InfoUpdatePhone';
import InfoUpdatePassword from './pages/Auth/InfoUpdatePassword';
import InfoNotice from './pages/Auth/InfoNotice';
import InfoNoticeContent from './pages/Auth/InfoNoticeContent';
import InfoFAQ from './pages/Auth/InfoFAQ';
import Admin from './pages/Admin';
import Login from './pages/Auth';
import Register from './pages/Auth/Register';
import { useSelector } from 'react-redux';
function App() {

	return (
		<div className="App">
			<header className="App-header">
				<BrowserRouter>
					<Routes>
						{/* Member Router */}
						<Route path="/member/event/:eventId/review" element={<EventReview />} />
						<Route path="/member/event/:eventId" element={<MemberEventDetail />} />
						<Route path="/member/event/search/result" element={<EventSearchResult />} />
						<Route path="/member/event/search" element={<EventSearch />} />
						<Route path="/member/event" element={<MemberEvent />} />
						<Route path="/member/register" element={<TicketRegister />} />
						<Route path="/*" element={<Member />} />

						{/* Staff Router */}
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

						{/* Admin Router */}
						<Route path="/admin" element={<Admin />} />

						{/* Auth Router */}
						<Route path="/register" element={<Register />} />
						<Route path={"/login"} element={<Login />} />
						<Route path="/info/faq" element={<InfoFAQ />} />
						<Route path="/info/notice/:noticeId" element={<InfoNoticeContent />} />
						<Route path="/info/notice" element={<InfoNotice />} />
						<Route path="/info/user/password" element={<InfoUpdatePassword />} />
						<Route path="/info/user/phone" element={<InfoUpdatePhone />} />
						<Route path="/info/user" element={<UserInfo />} />
						<Route path="/info/check" element={<InfoCheck />} />
						<Route path="/info" element={<Info />} />

					</Routes>
				</BrowserRouter>
			</header>
		</div>
	);
}

export default App;
