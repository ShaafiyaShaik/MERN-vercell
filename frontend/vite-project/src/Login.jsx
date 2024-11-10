import React, { useState } from 'react';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch('https://mern-vercell-c62q.vercel.app/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData),
    });
  
    const result = await response.json();
  
    if (result.message === 'Login successful!') {
      // Store the JWT token in localStorage after successful login
      localStorage.setItem('authToken', result.token);

      alert('Login successful!');
      // Redirect to home or dashboard after successful login
      window.location.href = '/';
    } else {
      alert(result.message); // Show error message if login fails
    }
  };
  

  return (
    <section id="page5">
      <div className="login-page4">
        <div className="login-box4">
          <h1>Pet Care🐾</h1>
          <p>Your Trusted Pet Care Service</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="in2"
                value={loginData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="in2"
                value={loginData.password}
                onChange={handleChange}
              />
              <button className="login-btn" type="submit">
                Login
              </button>
              <br />
              <button className="reset-btn" type="button">
                Reset
              </button>
            </div>
          </form>
          <a href="#" className="forgot-password4">
            Forgot Password?
          </a>
          <div id="message" className="message4"></div>
        </div>
      </div>
    </section>
  );
}

export default Login;
