// src/components/StudentForm.js
import React, { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useNavigate } from 'react-router-dom';
import './StudentForm.css';
import './StudentDetails.css';
import './StudentForm.css';


const StudentForm = () => {
    const { addStudent } = useContext(StudentContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        className: '',
        address: '',
        phoneNumber: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, age, className, address, phoneNumber } = formData;

        addStudent({ name, email, age, class: className, address, phone: phoneNumber });

        setFormData({
            name: '',
            email: '',
            age: '',
            className: '',
            address: '',
            phoneNumber: '',
        });

        setError('');
        setSuccess('Student registered successfully!');
        setTimeout(() => {
            setSuccess('');
            navigate('/students'); // Redirect to the student list
        }, 2000);
    };

    return (
        <div>
            <h2>Register Student</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {success && <div style={{ color: 'green' }}>{success}</div>}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Student Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="number" 
                    name="age" 
                    placeholder="Age" 
                    value={formData.age} 
                    onChange={handleChange} 
                    required 
                    min="1" 
                    max="100" 
                />
                <input 
                    type="text" 
                    name="className" 
                    placeholder="Class" 
                    value={formData.className} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    name="address" 
                    placeholder="Address" 
                    value={formData.address} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="text" 
                    name="phoneNumber" 
                    placeholder="Phone Number" 
                    value={formData.phoneNumber} 
                    onChange={handleChange} 
                    required 
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default StudentForm;
