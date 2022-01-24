import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.scss';
import UserCreatePage from './pages/UserCreationPage';

function App() {
  return (
    <div className="App">
        {/* React 18 changed the way we create routes throug react-router-dom so it now looks like this */}
      <Router>
        <Routes>
          <Route exact path="/" element={<UserCreatePage/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
