import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Provider} from 'react-redux'

import AppNavbar from './components/AppNavbar'
import ProducstList from './components/ProductList'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <ProducstList />
      </div>
    </Provider>
  );
}

export default App;
