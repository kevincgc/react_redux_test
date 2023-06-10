import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Cards from './components/Cards'
import { Provider } from 'react-redux'
import store from './reducers/index'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
        <Cards />
      </div>
    </Provider>
  );
}

export default App;
