import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Provider} from 'react-redux'

import AppNavbar from './components/AppNavbar'
import ProductList from './components/ProductList'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
