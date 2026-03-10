// components/RouteGuard.tsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface RouteGuardProps {
  routeType: string;
  children: React.ReactElement;
}

export const RouteGuard: React.FC<RouteGuardProps> = ({ routeType, children }) => {
  const { user } = useAuth();
  const location = useLocation(); // Useful to remember where they tried to go

  // 1. Private Routes: If not logged in, send to login
  if (routeType === 'private' && !user) {
    // We can pass the path they tried to visit so we can send them back after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 2. Guest Routes (Login/Register): If ALREADY logged in, send to home
  if (routeType === 'guest' && user) {
    return <Navigate to="/" replace />;
  }

  // 3. Common Routes (Home, Shop): Render normally for EVERYONE
  // (Also renders Private routes for logged-in users, and Guest routes for logged-out users)
  return <>{children}</>;
};