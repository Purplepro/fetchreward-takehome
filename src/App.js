import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import UserCreatePage from './pages/UserCreationPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/createuser" element={<UserCreatePage/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
