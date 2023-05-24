import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ViewPublicBucketPage from './pages/ViewPublicBucketPage';
import ViewPrivateBucketPage from './pages/ViewPrivateBucketPage';
import AddPrivateDestPage from './pages/AddPrivateDestPage';
import AddPublicDestPage from './pages/AddPublicDestPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route index path="/" element={<HomePage/>} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
              <Route path="/public-list" element={<ViewPublicBucketPage/>} />
              <Route path="/private-list" element={<ViewPrivateBucketPage/>} />
              <Route path="/add-to-private-list" element={<AddPrivateDestPage/>} />
              <Route path="/add-to-public-list" element={<AddPublicDestPage/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
