import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' exact Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;