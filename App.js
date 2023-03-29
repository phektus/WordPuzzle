import { Provider } from 'react-redux';
import store from './src/redux/store';
import Router from "./src/Router";

export default () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>    
  );
} 
