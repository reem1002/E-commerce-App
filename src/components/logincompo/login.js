import React, { useState } from 'react';
import './LoginPage.css'; // Style your page
import Swal from 'sweetalert2'; // Import SweetAlert
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

const LoginPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const [submittedData, setSubmittedData] = useState(null);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate(); // Initialize the navigate function from React Router

    // Form validation
    const validate = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.phone) newErrors.phone = "Phone is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmittedData(formData);

            // Display SweetAlert success message
            Swal.fire({
                title: 'Login Successful!',
                text: 'Welcome back!',
                icon: 'success',
                confirmButtonText: 'Go to Home',
                
            }).then(() => {
                // Navigate to the home page after the user clicks the button
                navigate('/');
            });
        }
    };

    return (
        <div className="login-container">
            <h1 style={{ color: '#284052' }}>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <p className="error">{errors.phone}</p>}
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>

            {submittedData && (
                <div className="submitted-data" style={{ color: '#284052' }}>
                    <h2>Submitted Data:</h2>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Phone:</strong> {submittedData.phone}</p>
                </div>
            )}
        </div>
    );
};

export default LoginPage;
