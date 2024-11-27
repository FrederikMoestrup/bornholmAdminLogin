import './App.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router';
import MainLayout from './layouts/MainLayout';
import About from './pages/About';
import Admin from './pages/Admin';
import Travels from './pages/Travels';
import Home from './pages/Home';
import Login from './pages/Login';
import { useState, useEffect } from 'react';

const blankUser = { userid: '', login: '', password: '', roles: []}

function App() {
  const [users, setUsers] = useState([]);
  const APIURL = "http://localhost:3000";

  function getUsers(callback) {
    fetch(APIURL + '/users')
      .then((response) => response.json())
      .then((data) => callback(data));
  }

  useEffect(() => {
    getUsers((data) => setUsers(data));
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout users={users} />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/travels" element={<Travels />} />
        <Route path="/login" element={<Login users={users} blankUser={blankUser} />} />
        <Route path="/admin" element={<Admin users={users} blankUser={blankUser} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
