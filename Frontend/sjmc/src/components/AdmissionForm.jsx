import React, { useState } from 'react';
import { API_BASE } from '../utils/api';

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        fatherName: '',
        motherName: '',
        phone: '',
        email: '',
        address: '',
        course: '',
        qualification: '',
        dateOfBirth: '',
        gender: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');

        try {
            const response = await fetch(`${API_BASE}/api/applications`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                setSuccess(true);
                setFormData({
                    fullName: '',
                    fatherName: '',
                    motherName: '',
                    phone: '',
                    email: '',
                    address: '',
                    course: '',
                    qualification: '',
                    dateOfBirth: '',
                    gender: '',
                    message: ''
                });
            } else {
                setError(result.message || 'Failed to submit application. Please try again.');
            }
        } catch (err) {
            setError('Network error. Please check your connection and try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (success) {
        return (
            <div className="container text-center py-5">
                <div className="alert alert-success">
                    <h4>Application Submitted Successfully!</h4>
                    <p>Thank you for your interest in SJMC. We will contact you soon.</p>
                    <button className="btn btn-primary mt-3" onClick={() => setSuccess(false)}>
                        Submit Another Application
                    </button>
                </div>
            </div>
        );
    }

    const containerStyles = {
        backgroundColor: '#780000',
        padding: '20px',
        width: '50vw',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0.2, 0.2, 0.4, 0.8)',
        marginBottom: '10px',
    };

    const labelStyles = {
        marginBottom: '5px',
        color: '#fff',
    };

    const inputStyles = {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    };

    const buttonStyles = {
        width: '100%',
        padding: '10px',
        backgroundColor: 'white',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    return (
        <div className='container' style={containerStyles}>
            <h3 className="text-white mb-4">Admission Application Form</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="fullName" style={labelStyles}>Full Name *</label>
                        <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            style={inputStyles}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="fatherName" style={labelStyles}>Father's Name</label>
                        <input
                            id="fatherName"
                            type="text"
                            name="fatherName"
                            value={formData.fatherName}
                            onChange={handleChange}
                            placeholder="Father's name"
                            style={inputStyles}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="motherName" style={labelStyles}>Mother's Name</label>
                        <input
                            id="motherName"
                            type="text"
                            name="motherName"
                            value={formData.motherName}
                            onChange={handleChange}
                            placeholder="Mother's name"
                            style={inputStyles}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" style={labelStyles}>Phone Number *</label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="10-digit mobile number"
                            style={inputStyles}
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="email" style={labelStyles}>Email Address *</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            style={inputStyles}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="dateOfBirth" style={labelStyles}>Date of Birth</label>
                        <input
                            id="dateOfBirth"
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            style={inputStyles}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="gender" style={labelStyles}>Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            style={inputStyles}
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="course" style={labelStyles}>Course Interested In</label>
                        <input
                            id="course"
                            type="text"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            placeholder="e.g., M.A. Journalism"
                            style={inputStyles}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="qualification" style={labelStyles}>Highest Qualification</label>
                        <input
                            id="qualification"
                            type="text"
                            name="qualification"
                            value={formData.qualification}
                            onChange={handleChange}
                            placeholder="e.g., Bachelor's Degree"
                            style={inputStyles}
                        />
                    </div>
                </div>

                <label htmlFor="address" style={labelStyles}>Address</label>
                <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Your complete address"
                    style={inputStyles}
                    rows="2"
                />

                <label htmlFor="message" style={labelStyles}>Message (Optional)</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any additional information"
                    style={inputStyles}
                    rows="3"
                />

                <button
                    type="submit"
                    disabled={submitting}
                    style={buttonStyles}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'grey'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
            </form>
        </div>
    );
};

export default AdmissionForm;
