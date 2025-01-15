import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const StudentRegisterForm = ({ collegeInfo }) => {
    const [studentData, setStudentData] = useState({
        name: "",
        email: "",
        course: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData({ ...studentData, [name]: value });
    };

    const handleRegister = () => {
        alert(`Student Registered for ${collegeInfo?.name || "the College"}!`);
        setStudentData({ name: "", email: "", course: "" });
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
                label="Name"
                name="name"
                value={studentData.name}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Email"
                name="email"
                value={studentData.email}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Course"
                name="course"
                value={studentData.course}
                onChange={handleChange}
                fullWidth
            />
            <Button variant="contained" onClick={handleRegister}>
                Register
            </Button>
        </Box>
    );
};

export default StudentRegisterForm;
