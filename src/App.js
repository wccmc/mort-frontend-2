import React from 'react';
import Routing from './Routing'
import { Provider } from "react-redux";
import store from './store';
import styles from './Utils/Styles';

function App() {

  return (
    <div style={styles.appContainer}>
      <Provider store={store}>
        <Routing />
      </Provider>
    </div>
  );
}

export default App;