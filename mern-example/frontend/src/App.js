import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import AppNavbar from './components/AppNavbar'
import UsersList from './components/UsersList'

import store from './store'

const store = { store }

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
