import { Provider } from 'react-redux';
import store from './src/redux/store';
import Router from "./src/Router";

import { ThemeProvider } from '@rneui/themed';
import DefaultTheme from './src/styles/DefaultTheme';


export default () => {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
} 
