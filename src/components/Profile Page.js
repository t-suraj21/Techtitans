import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile Page.css"; // Import CSS for styling

const ProfilePage = ({ user }) => {
  const [profile, setProfile] = useState({
    name: "",
    email: user.email,
    place: "",
    phone: "",
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/profile/${user.email}`);
        if (response.data) {
          setProfile(response.data);
          setPreviewImage(response.data.image ? `http://localhost:5001${response.data.image}` : null);
        }
      } catch (error) {
        setMessage("⚠️ No profile found. Please create one.");
      }
    };
    fetchProfile();
  }, [user.email]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setProfile({ ...profile, image: file });
    }
  };

  const handleCreateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", profile.name);
    formData.append("email", profile.email);
    formData.append("place", profile.place);
    formData.append("phone", profile.phone);
    if (profile.image) formData.append("image", profile.image);

    try {
      await axios.put("http://localhost:5001/profile", formData, { headers: { "Content-Type": "multipart/form-data" } });
      setMessage("✅ Profile created successfully!");
    } catch (error) {
      setMessage("❌ Error creating profile. Please try again.");
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h2>My Profile</h2>
        <form onSubmit={handleCreateProfile}>
          <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Name" required />
          <input type="text" name="place" value={profile.place} onChange={handleChange} placeholder="Location" />
          <input type="text" name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone" />
          <input type="file" onChange={handleImageChange} />
          {previewImage && <img src={previewImage} alt="Profile Preview" className="profile-preview" />}
          <button type="submit">Save Profile</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default ProfilePage;
