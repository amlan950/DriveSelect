import React from 'react';
import './Fleet.css';

// 1. Destructure 'cars' and 'deleteCar' from props
const Fleet = ({ cars, deleteCar }) => {
  
  // IMPORTANT: Remove any "const [cars, setCars] = useState(...)" from here!
  // We want to use the 'cars' variable coming from the App parent.

  return (
    <section className="fleet-section" id="fleet">
      <div className="fleet-header">
        <h2 className="section-subtitle">Our Collection</h2>
        <h1 className="section-title">Explore Our <span className="text-gradient">Premium Fleet</span></h1>
      </div>

      <div className="fleet-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <div className="car-image">
              <img src={car.image} alt={car.name} />
              <span className="car-tag">{car.type}</span>
            </div>
            
            <div className="car-details">
              <h3>{car.name}</h3>
              <div className="car-specs">
                <span>⚙️ {car.transmission}</span>
                <span>⛽ {car.fuel}</span>
              </div>
              <hr className="divider" />
              <div className="car-footer">
                <div className="price-box">
                  <span className="price">${car.price}</span>
                  <span className="per-day">/ day</span>
                </div>
                {/* 2. Added a Delete button for Admin control */}
                <button 
                  className="btn-delete" 
                  onClick={() => deleteCar(car.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fleet;