import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import NavBar from '../Component/NavBar';
import Home from '../Component/Home';
import About from '../Component/About';
import Fleet from '../Pages/Fleet';
import AdminDashboard from '../Pages/AdminDashboard';

function App() {
  const [cars, setCars] = useState([
    { id: 1, name: "Porsche 911", type: "Luxury", price: 250, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600", transmission: "Auto", fuel: "Petrol" },
  ]);

  const addCar = (newCar) => {
    setCars([...cars, { ...newCar, id: Date.now() }]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fleet" element={<Fleet cars={cars} />} />
      </Routes>
      {/* Pass the cars array and the add function as props */}
      <About/>
      <AdminDashboard addCar={addCar} />
    </>
  );
}

export default App;
