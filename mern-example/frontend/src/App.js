import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Provider} from 'react-redux'

import AppNavbar from './components/AppNavbar'
import UsersList from './components/UsersList'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <UsersList />
      </div>
    </Provider>
  );
}

export default App;
