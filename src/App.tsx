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

function App() {
	return (
		<div className="App">

		<header className="App-header">
			<BrowserRouter>
				<Routes>
					{/* Member Router */}
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
