// import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import { Game } from './pages/Game'

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
