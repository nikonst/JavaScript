import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import Counter from './components/Counter'
import Hit from './components/Hit';

function App() {
  return (
    <Provider store={store}> {/* provide the store to every component of the App */}
      <div className="App">
        <h1>Hello</h1>
        <Counter />
        <Hit/>
      </div>
    </Provider>
  );
}

export default App;
