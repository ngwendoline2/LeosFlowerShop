import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <ProtectedRoute path="/" component={HomePage} exact />
                </Switch>
            </AuthProvider>
        </Router>
    );
};

export default App;