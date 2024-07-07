// import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Game } from './pages/Game'
import { Navbar } from './components'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Game />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
