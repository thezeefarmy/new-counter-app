import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CounterPage from './mainPage/CounterPage';
import NoneFound from './routes/NoneFound';
import ErrorBoundaryPage from './routes/ErrorBoundaryPage';

function App() {
  return (
      <Router>
        <ErrorBoundaryPage>
          <Routes>
            <Route path="/" element={<CounterPage />} />
            <Route path="*" element={<NoneFound />} />
          </Routes>
        </ErrorBoundaryPage>
      </Router>
  );
}

export default App;