import './app.scss';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/movies" element={<Home type="movies" />} />
				<Route path="/series" element={<Home type="series" />} />
				<Route path="/watch" element={<Watch />} />
			</Routes>
		</Router>
	);
};

export default App;
