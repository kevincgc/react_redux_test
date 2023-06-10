import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Cards from './components/Cards'
import { Provider } from 'react-redux'
import store from './reducers/index'
import Details from './components/Details'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
        <Cards />
        <Details />
      </div>
    </Provider>
  );
}

export default App;
