import React, { useState } from 'react';

function FormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    email: '',
    pin: '',
    city: '',
    sub_area: '',
    password: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    try {
      const response = await fetch('https://mern-vercell-api.vercel.app/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      alert(result.message); // Show the response message (success or error)
    } catch (error) {
      console.error('Error during registration:', error);
      alert('There was an error with the registration. Please try again.');
    }
  };
  
  

  return (
    <section className="registration-form" id="registration-form" style={{ display: 'block' }}>
      <div className="form-container">
        <div className="form-image">
          <img src="/assets/reg5.jpg" alt="Cute Dog Image" />
        </div>
        <div className="form-content">
          <h2>Become a part of our community and increase your earnings</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="in" required />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="in" required />
            <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Age" className="in" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="in" required />
            <input type="text" name="pin" value={formData.pin} onChange={handleChange} placeholder="Pin code" className="in" required />
            <select name="city" value={formData.city} onChange={handleChange} required>
              <option value="" disabled>Select City</option>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
            </select>
            <input type="text" name="sub_area" value={formData.sub_area} onChange={handleChange} placeholder="Sub Area" className="in" required />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="in" required />
            <button type="submit" className="cta-btn">Next</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormSection;
