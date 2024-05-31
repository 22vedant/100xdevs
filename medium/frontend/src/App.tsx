import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import Landing from './components/Landing';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" Component={Landing} />
				{/* <Route path="/" Component={Home}> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
