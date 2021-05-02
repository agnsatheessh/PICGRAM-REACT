import * as React from "react";
import { Provider } from 'react-redux'

import Home from "./components/Home";
import store from './redux/store';

class App extends React.Component {
  render() {

    return(<Provider store={store}>
              <Home />
            </Provider>);
  }
}

export default App;
