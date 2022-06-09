import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { AlertPopup } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <Container maxWidth="md">
            <AlertPopup />
            <Routes>
              <Route path="/" exact element={<Home />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
