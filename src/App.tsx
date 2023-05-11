import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Member from './pages/Member';
import Staff from './pages/Staff';
import PartTime from './pages/PartTime';
import Admin from './pages/Admin';
import Login from './pages/Login';

function App() {
	return (
		<div className="App">

		<header className="App-header">
			<BrowserRouter>
				<Routes>
					<Route path="/member" element={<Member />}></Route>
					<Route path="/staff" element={<Staff />}></Route>
					<Route path="/partTime" element={<PartTime />}></Route>
					<Route path="/admin" element={<Admin />}></Route>
					<Route path="*" element={<Login />}></Route>
				</Routes>
			</BrowserRouter>
		</header>
		</div>
	);
}

export default App;
