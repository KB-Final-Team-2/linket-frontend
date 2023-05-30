import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Member from './pages/Member';
import Staff from './pages/Staff';
import PartTime from './pages/PartTime';

// Member Import
import TicketRegister from './pages/Member/TicketRegister';

// Staff Import
import EventRegister from './pages/Staff/EventRegister';
import EventUpdate from './pages/Staff/EventUpdate';
import EventDelete from './pages/Staff/EventDelete';
import StaffAttend from './pages/Staff/EventAttend';
import WebView from './pages/Staff/WebView';
import EventHire from './pages/Staff/EventHire';
import EventHireRegist from './pages/Staff/EventHireRegist';
import EventHireUpdate from './pages/Staff/EventHireUpdate';
import EventHireDelete from './pages/Staff/EventHireDelete';


//Part Import
import PartTimeHireRegister from './pages/PartTime/HireRegister';
import PartTimeAttendHire from './pages/PartTime/AttendHire';
import HireSearchResult from './pages/PartTime/HireSearchResult';

//Auth Import
import Info from './pages/Auth/Info';
import InfoCheck from './pages/Auth/InfoCheck';
import UserInfo from './pages/Auth/InfoUserInfo';
import InfoUpdatePhone from './pages/Auth/InfoUpdatePhone';
import InfoUpdatePassword from './pages/Auth/InfoUpdatePassword';
import InfoNotice from './pages/Auth/InfoNotice';
import InfoNoticeContent from './pages/Auth/InfoNoticeContent';
import InfoFAQ from './pages/Auth/InfoFAQ';
import Login from './pages/Auth';
import Register from './pages/Auth/Register';
import TicketReview from './pages/Member/TicketReview';
import InfoReview from './pages/Auth/InfoReview';
import TicketDelete from './pages/Member/TicketDelete';
import TicketPlace from './pages/Member/TicketPlace';
import EventHireChat from './pages/Staff/EventHireChat';
import HireChat from './pages/PartTime/HireChat';

function App() {

	return (
		<div className="App">
			<header className="App-header">
				<BrowserRouter>
					<Routes>
						{/* Member Router */}
						<Route path="/member/review" element={<TicketReview />} />
						<Route path="/member/register" element={<TicketRegister />} />
						<Route path="/member/delete" element={<TicketDelete />} />
						<Route path="/member" element={<Member />} />
						<Route path="/member/place" element={<TicketPlace />}/>

						{/* Staff Router */}
						<Route path="/staff/attend" element={<StaffAttend />} />	
						<Route path="/staff/delete" element={<EventDelete />} />	
						<Route path="/staff/update" element={<EventUpdate />} />								
						<Route path="/staff/register" element={<EventRegister />} />					
						<Route path='/staff/hire' element={<EventHire />} />
						<Route path='/staff/hire/regist' element={<EventHireRegist />} />
						<Route path='/staff/hire/update' element={<EventHireUpdate />} />
						<Route path='/staff/hire/delete' element={<EventHireDelete />} />
						<Route path='/staff/hire/chat' element={<EventHireChat />} />
						<Route path="/staff/*" element={<Staff />} />

						{/* Staff Web Router */}
						<Route path="/staff/web" element={<WebView />} />

						{/* PartTime Router */}
						<Route path="/part/*" element={<PartTime />} />
						<Route path="/part/register" element={<PartTimeHireRegister />} />
						<Route path="/part/attend" element={<PartTimeAttendHire />} />
						<Route path='/part/result' element={<HireSearchResult />}/>
						<Route path="/part/chat" element={<HireChat />} />

						{/* Auth Router */}
						<Route path="/register" element={<Register />} />
						<Route path="/*" element={<Login />} />
						<Route path="/info/faq" element={<InfoFAQ />} />
						<Route path="/info/notice/:noticeId" element={<InfoNoticeContent />} />
						<Route path="/info/notice" element={<InfoNotice />} />
						<Route path="/info/user/password" element={<InfoUpdatePassword />} />
						<Route path="/info/user/phone" element={<InfoUpdatePhone />} />
						<Route path="/info/user" element={<UserInfo />} />
						<Route path="/info/check" element={<InfoCheck />} />
						<Route path="/info" element={<Info />} />
						<Route path="/info/review" element={<InfoReview />} />

					</Routes>
				</BrowserRouter>
			</header>
		</div>
	);
}

export default App;
