
import React, { useState } from 'react';
import "./Myforms.css"

const Myforms = () => {
    const [formData, setFormData] = useState({
        name: 'neel',
        gender: 'male', // default value for gender
        mobile: '',
        address: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit handled");
        console.log('form', formData.name);

    };

    const handleChange = (e) => {
        const { name, value } = e;

        setFormData({
            ...formData,
            [name]: value
        });
    };
    return (
        <div className='formContainer'>
        
            Myforms:
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input 
                        type="text" 
                        name="name" 
                        id='name' 
                        value={formData.name}
                        onChange={handleChange} 
                    />
                </label>
                <br />
                <label>
                    Gender:
                    <select 
                        name="gender" 
                        value={formData.gender} 
                        onChange={handleChange}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <br />
                <label>
                    Mobile Number:
                    <input 
                        type="tel" 
                        name="mobile" 
                        value={formData.mobile}
                        onChange={handleChange} 
                    />
                </label>
                <br />
                <label>
                    Address:
                    <textarea 
                        name="address" 
                        value={formData.address}
                        onChange={handleChange} 
                    ></textarea>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Myforms;

