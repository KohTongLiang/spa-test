// node modules
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

// Components
import NavigationBar from './Components/Navigation';
import HomePage from './Components/Home';
import ArticlePage from './Components/Article';
import SignInPage from './Components/Auth/signin';
import SignUpPage from './Components/Auth/signup';

// Constants
import * as ROUTES from './Constants/routes';

function App() {
  // Allow google dark theme
  const theme = React.useMemo(
    () => createMuiTheme({
      palette: {
        type: true ? 'dark' : 'light',
      },
    }),
  );

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <NavigationBar />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ARTICLES} component={ArticlePage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        </Router>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
