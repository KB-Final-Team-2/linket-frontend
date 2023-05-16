import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Member from './pages/Member';
import Staff from './pages/Staff';
import PartTime from './pages/PartTime/PartTime';
import Admin from './pages/Admin';
import Login from './pages/Auth';
import Register from './pages/Auth/Register';
import TicketRegister from './pages/Member/TicketRegister';
import TicketDetail from './pages/Member/TicketDetail';
import TicketDelete from './pages/Member/TicketDelete';
import MemberEvent from './pages/Member/Event';
import EventSearch from './pages/Member/EventSearch';
import EventDetail from './pages/Member/EventDetail';
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
					<Route path="/member/event/:eventId" element={<EventDetail />} />
					<Route path="/member/event/search" element={<EventSearch />} />
					<Route path="/member/event" element={<MemberEvent />} />
					<Route path="/member/ticket/delete" element={<TicketDelete />} />
					<Route path="/member/ticket/:ticketId" element={<TicketDetail />} />
					<Route path="/member/register" element={<TicketRegister />} />
					<Route path="/member/*" element={<Member />} />

					{/* Staff Router */}
					<Route path="/staff" element={<Staff />} />

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
