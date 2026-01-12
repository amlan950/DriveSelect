import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = ({ addCar }) => {
  const [formData, setFormData] = useState({
    name: '', 
    type: 'Luxury', 
    price: '', 
    image: '', 
    transmission: 'Automatic', 
    fuel: 'Petrol'
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFormData({ ...formData, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.image) return alert("Please upload a car photo");
    
    addCar(formData);
    
    // Reset form to defaults
    setFormData({ 
      name: '', type: 'Luxury', price: '', image: '', 
      transmission: 'Automatic', fuel: 'Petrol' 
    });
    alert("Car added successfully!");
  };

  return (
    <section className="admin-section" id="admin">
      <div className="admin-card">
        <h2>Vehicle Specification Manager</h2>
        <form onSubmit={handleSubmit} className="admin-grid-form">
          
          <input 
            type="text" placeholder="Car Model (e.g. BMW M4)" 
            value={formData.name} 
            onChange={e => setFormData({...formData, name: e.target.value})} 
            required 
          />

          <input 
            type="number" placeholder="Daily Rental Price ($)" 
            value={formData.price} 
            onChange={e => setFormData({...formData, price: e.target.value})} 
            required 
          />

          {/* Transmission Selection */}
          <div className="form-group">
            <label>Transmission:</label>
            <select 
              value={formData.transmission} 
              onChange={e => setFormData({...formData, transmission: e.target.value})}
            >
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>

          {/* Fuel Type Selection */}
          <div className="form-group">
            <label>Fuel Type:</label>
            <select 
              value={formData.fuel} 
              onChange={e => setFormData({...formData, fuel: e.target.value})}
            >
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="file-input-wrapper">
            <label>Car Photo:</label>
            <input type="file" accept="image/*" onChange={handleImage} />
          </div>

          <button type="submit" className="admin-submit">Update Fleet</button>
        </form>
      </div>
    </section>
  );
};

export default AdminDashboard;