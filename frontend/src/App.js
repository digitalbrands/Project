import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />}  />
      </Routes>
    </Router>
  );
}

export default App;
