// import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import { Plinko } from './pages/Plinko'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Plinko />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
