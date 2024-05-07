import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, loading } = useAuth();

    return (
        <Route {...rest} render={props => {
            if (loading) return <div>Loading...</div>;
            if (!isAuthenticated) return <Redirect to="/login" />;
            return <Component {...props} />;
        }} />
    );
};
