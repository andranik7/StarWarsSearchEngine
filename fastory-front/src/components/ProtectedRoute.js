import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    const token = useSelector(state => state.auth.token);
    const username = useSelector(state => state.auth.username);
    const location = useLocation();


    if (!token || !username) {
        // redirection
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}