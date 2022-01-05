import React, { useEffect } from 'react';
import {Login} from './screens/login/login.screen';
import {Route,Routes, useNavigate} from "react-router-dom";
import {LoginPath} from './screens/login/login.types';

import {HomePath} from './screens/home/home.types';
import { ThemeProvider } from 'styled-components';
import theme from "./themes/main/theme";
import { GlobalStyle } from './themes/main/global-styles';
import { Provider } from 'react-redux';
import store from './store/store/store';
import UserGuard from './components/routers/user-guard/user-guard.component';
import Home from "./screens/home/home.screen";

function App() {



  return (
  <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>         
        <Routes>
            <Route path={LoginPath} element={<Login/>} />
            <Route path={HomePath} element={<UserGuard><Home /></UserGuard>} />            
        </Routes>
      </ThemeProvider>
  </Provider>
  );
}

export default App;
