import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ModulePage from './pages/ModulePage';
import SettingsPage from './pages/SettingsPage';
import './admin-index.css';

// Yeh component /admin/* route ke neeche mount hota hai (App.js dekhein)
// Isiliye ismein apna alag BrowserRouter nahi hai — parent wala hi use hota hai
export default function AdminApp() {
  return (
    <div className="admin-app">
      <AuthProvider>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            path=""
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path=":moduleKey" element={<ModulePage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}