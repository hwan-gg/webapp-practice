
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore } from 'redux';
import { Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducer from './Reducer';
import Navbar from './Components/Navbar';
import People from './Components/People';

const middleware = applyMiddleware(thunk);
const store = legacy_createStore(reducer, middleware);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
          <People />
        {/* <Switch>
          <Route path="/People" component={People}/>
        </Switch> */}

      </div>
    </Provider>
  );
}

export default App;
