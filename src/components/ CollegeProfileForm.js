import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const CollegeProfileForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        location: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        onSubmit(formData);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
                label="College Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                fullWidth
                multiline
                rows={3}
            />
            <TextField
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                fullWidth
            />
            <Button variant="contained" onClick={handleSubmit}>
                Save Profile
            </Button>
        </Box>
    );
};

export default CollegeProfileForm;
