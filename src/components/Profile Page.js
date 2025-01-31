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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first file
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl); // Update the preview image state
      setProfile({ ...profile, image: file }); // Update profile with the file for upload
    }
  };
  
  

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", profile.name);
    formData.append("email", profile.email);
    formData.append("place", profile.place);
    formData.append("phone", profile.phone);
    if (profile.image) formData.append("image", profile.image);

    try {
      await api.put("/profile", formData, { headers: { "Content-Type": "multipart/form-data" } });
      setMessage("Profile updated successfully!");
    } catch (error) {
      setMessage("Error updating profile. Please try again.");
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h2>My Profile</h2>
        <form onSubmit={handleUpdate}>
          <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Name" required />
          <input type="text" name="place" value={profile.place} onChange={handleChange} placeholder="Location" />
          <input type="text" name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone" />
          <input type="file" onChange={handleImageChange} />

          <button type="submit">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
