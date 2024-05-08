import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import LoginForm from './components/LoginForm.jsx';
import ProtectedRoute from './src/components/ProtectedRoute';
import VisitingPage from './VisitingPage';
import AppreciationPage from './AppreciationPage';
import ImageCart from './ImageCard'


const App = () => {
    return (
        <Router>
          <div>
            <Nav />
            <AuthProvider>
                <Switch>
                    <Route path="/login" component={LoginForm} />
                    <ProtectedRoute path="/" component={HomePage} exact />
                    <Route path="/visit" component={VisitingPage} />
                    <Route path="/appreciate" component={AppreciationPage} />
                </Switch>
            </AuthProvider>
            </div>
        </Router>
    );
};

export default App;