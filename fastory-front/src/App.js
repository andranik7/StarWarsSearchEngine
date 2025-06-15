import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, deepPurple } from '@mui/material/colors';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './redux';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import FilmDetails from './pages/FilmDetails';
import CharacterDetails from './pages/CharacterDetails';
import PlanetDetails from './pages/PlanetDetails';
import StarshipDetails from './pages/StarshipDetails';
import VehicleDetails from './pages/VehicleDetails';
import SpieceDetails from './pages/SpieceDetails';




const theme = createTheme({
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

const App = () => {


  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/film/:id" element={
              <ProtectedRoute>
                <FilmDetails />
              </ProtectedRoute>
            } />

            <Route path="/character/:id" element={
              <ProtectedRoute>
                <CharacterDetails />
              </ProtectedRoute>
            } />

            <Route path="/planet/:id" element={
              <ProtectedRoute>
                <PlanetDetails />
              </ProtectedRoute>
            } />


            <Route path="/starship/:id" element={
              <ProtectedRoute>
                <StarshipDetails />
              </ProtectedRoute>
            } />

            <Route path="/vehicle/:id" element={
              <ProtectedRoute>
                <VehicleDetails />
              </ProtectedRoute>
            } />

            <Route path="/spiece/:id" element={
              <ProtectedRoute>
                <SpieceDetails />
              </ProtectedRoute>
            } />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  )
}

export default App;
