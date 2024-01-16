// App.js
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patient'; // Replace with the actual path to your Patients component
import Appointments from './pages/Appointments'; // Replace with the actual path to your Appointments component
import Users from './pages/Users'; // Replace with the actual path to your Users component

const theme=createTheme({
  palette:{
    primary:{
      main:'#f9f0f0'
    },
    secondary:{
      main:'#20A8C6'
    },
    background:'rgba(197, 241, 246, 1)',

  
   },
   typography:{
    fontFamily:'Saira Semi Condensed',
    fontWeightBold:700,
    fontWeightRegular:400,
    fontWeightLight:100
   }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
