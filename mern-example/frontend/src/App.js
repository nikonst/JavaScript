import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import AppNavbar from './components/AppNavbar'
import UsersList from './components/UsersList'

function App() {
  return (
    <div className="App">
     <AppNavbar/>
     <UsersList/>
    </div>
  );
}

export default App;
