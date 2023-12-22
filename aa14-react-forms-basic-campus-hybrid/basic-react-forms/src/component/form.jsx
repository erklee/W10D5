import { useState } from "react";

function Form(){
    const [formData, setFormData] = useState({     
        name: '',     
        email: '',     
        phone: '',     
        phoneType: '',     
        bio: '',
        subscribe: false,   
    });

    
    const [errors, setErrors] = useState({});


    const validate = () => {
        let validationErrors = {};

        if (!formData.name) validationErrors.name = ("name is required")

        if (!formData.email) validationErrors.email = ("email cant be empty");
        else if (!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = ("email is not valid")
        
        if (formData.phoneNumber && !formData.phoneType) validationErrors.phoneType = "phone type is required with number"
        if (formData.bio.length > 280) validationErrors.bio = "Bio cannot exceed 280 characters."
        
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(formData);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
        <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
        <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
            <label>Phone Number:</label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div>
        <label>Phone Type:</label>
            <select name="phoneType" value={formData.phoneType} onChange={handleChange}>
                <option value="">Select</option>
                <option value="mobile">Mobile</option>
                <option value="home">Home</option>
                <option value="work">Work</option>
            </select>
            {errors.phoneType && <p style={{ color: 'red' }}>{errors.phoneType}</p>}
        </div>
        <div>
            <label>Bio:</label>
            <textarea name="bio" value={formData.bio} onChange={handleChange} maxLength="280"></textarea>
            {errors.bio && <p style={{ color: 'red' }}>{errors.bio}</p>}
        </div>
        <button type="submit">Submit</button>
    </form>
    );



};

