import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './views/About'; 
import Berita from './views/Berita'; 
import ListKampanye from './views/ListCampaign'; 
import DetailCampaign from './views/DetailCampaign'; 
import Footer from './components/Footer';
import Kontak from './views/Kontak';
import Login from './auth/login'; 
import Daftar from './auth/daftar'; 
import Navbar from './components/Navbar';
import FundraisingPage from './views/FundraisingPage';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './components/NotFound';
import Dashboard from './auth/Dashboard';
import Profile from './auth/Profile';
import HalamanDonasi from './views/HalamanDonasi';


const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<FundraisingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/donate" element={<ListKampanye />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mulai-donasi" element={<HalamanDonasi />} />
      <Route path="/daftar" element={<Daftar />} />
      <Route path="/news" element={<Berita />} />
      <Route path="/detail/:id" element={<DetailCampaign />} /> 
      <Route path="/contact" element={<Kontak />} /> 
      <Route path="/profile" element={<PrivateRoute component={Profile} />} />
      <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
