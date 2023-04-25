
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore } from 'redux';
import { Switch, Route } from 'react-router-dom';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducer from './Reducer';
import Navbar from './Components/Navbar';
import Users from './Components/Users';

const middleware = [thunk, promise];
const store = legacy_createStore(reducer, applyMiddleware(...middleware));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
          <Users />
        {/* <Switch>
          <Route path="/Users" component={Users}/>
        </Switch> */}

      </div>
    </Provider>
  );
}

export default App;
