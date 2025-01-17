import React, { useState, useEffect } from "react";
import api from "../api/api"; // Axios instance
import "./Profile Page.css"; // Import CSS for styling

const ProfilePage = ({ user }) => {
    const [profile, setProfile] = useState({
        name: "",
        email: user.email, // Pre-fill email from user prop
        place: "",
        phone: "",
        image: null,
    });

    const [previewImage, setPreviewImage] = useState(null); // For image preview
    const [message, setMessage] = useState("");

    // Fetch profile data on component mount
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get(`/profile/${user.email}`);
                setProfile(response.data);
                setPreviewImage(response.data.image ? `/uploads/${response.data.image}` : null);
            } catch (error) {
                setMessage("Failed to load profile data. Please try again.");
            }
        };
        fetchProfile();
    }, [user.email]);

    // Handle form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    // Handle image upload preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProfile({ ...profile, image: file });
        setPreviewImage(URL.createObjectURL(file));
    };

    // Handle profile update
    const handleUpdate = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", profile.name);
        formData.append("email", profile.email);
        formData.append("place", profile.place);
        formData.append("phone", profile.phone);
        if (profile.image) formData.append("image", profile.image);

        try {
            const response = await api.put("/profile", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setMessage("Profile updated successfully!");
        } catch (error) {
            setMessage("Error updating profile. Please try again.");
        }
    };

    return (
        <div className="profile-page">
            <div className="profile-container">
                <h2 className="profile-title">My Profile</h2>
                <form className="profile-form" onSubmit={handleUpdate}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            disabled // Email is non-editable
                        />
                    </div>
                    <div className="form-group">
                        <label>Place</label>
                        <input
                            type="text"
                            name="place"
                            value={profile.place}
                            onChange={handleChange}
                            placeholder="Enter your location"
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="form-group">
                        <label>Profile Picture</label>
                        <input type="file" onChange={handleImageChange} />
                        {previewImage && <img src={previewImage} alt="Preview" className="profile-preview" />}
                    </div>
                    <button type="submit" className="update-button">
                        Update Profile
                    </button>
                </form>
                {message && <p className="profile-message">{message}</p>}
            </div>
        </div>
    );
};

export default ProfilePage;
