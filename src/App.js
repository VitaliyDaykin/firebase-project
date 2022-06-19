import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css';
import AppRouter from './components/AppRouter';

function App() {
	return (
		<Router>
			<Navbar />
			<AppRouter />
		</Router>
	);
}

export default App;
