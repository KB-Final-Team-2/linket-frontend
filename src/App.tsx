import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Member from './pages/Member';
import Staff from './pages/Staff';
import PartTime from './pages/PartTime';
import Admin from './pages/Admin';
import Login from './pages/Auth';
import Register from './pages/Auth/Register';
import PartTimeAttendRegister from './pages/PartTime/AttendRegister';
import PartTimeAttendEvent from './pages/PartTime/AttendEvent';
import PartTimeEventDetail from './pages/PartTime/EventDetail';
import PartTimeAttendDetail from './pages/PartTime/AttendDetail';
import PartTimeInfo from './pages/PartTime/Info';
import PartTimeInfoCheck from './pages/PartTime/InfoCheck';
import PartTimeUserInfo from './pages/PartTime/UserInfo';
import PartTimeInfoUpdatePhone from './pages/PartTime/InfoUpdatePhone';
import PartTimeInfoUpdatePassword from './pages/PartTime/InfoUpdatePassword';
import PartTimeInfoNotice from './pages/PartTime/InfoNotice';
import PartTimeInfoNoticeContent from './pages/PartTime/InfoNoticeContent';
import PartTimeInfoFAQ from './pages/PartTime/InfoFAQ';
import PartTimeInfoFAQContents from './pages/PartTime/InfoFAQContents';

function App() {
	return (
		<div className="App">

			<header className="App-header">
				<BrowserRouter>
					<Routes>
						{/* Member Router */}
						<Route path="/member" element={<Member />} />

						{/* Staff Router */}
						<Route path="/staff" element={<Staff />} />

						{/* PartTime Router */}
						<Route path="/partTime" element={<PartTime />} />
						<Route path="/partTime/attendRegister" element={<PartTimeAttendRegister />} />
						<Route path="/partTime/eventDetail" element={<PartTimeEventDetail />} />
						<Route path="/PartTime/attendEvent" element={<PartTimeAttendEvent />} />
						<Route path="/PartTime/attendDetail" element={<PartTimeAttendDetail />} />

						<Route path="/PartTime/info" element={<PartTimeInfo />} />
						<Route path="/PartTime/infoCheck" element={<PartTimeInfoCheck />} />
						<Route path="/PartTime/userInfo" element={<PartTimeUserInfo />} />
						<Route path="/PartTime/infoUpdatePhone" element={<PartTimeInfoUpdatePhone />} />
						<Route path="/PartTime/infoUpdatePassword" element={<PartTimeInfoUpdatePassword />} />

						<Route path="/PartTime/infoNotice" element={<PartTimeInfoNotice />} />
						<Route path="/PartTime/infoNoticeContent" element={<PartTimeInfoNoticeContent />} />
						<Route path="/PartTime/infoFAQ" element={<PartTimeInfoFAQ />} />
						<Route path="/PartTime/infoFAQContents" element={<PartTimeInfoFAQContents />} />


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
