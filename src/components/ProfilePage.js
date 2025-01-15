import React, { useState } from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import CollegeProfileForm from './ CollegeProfileForm';
import CollegePosts from "./CollegePosts";
import StudentRegisterForm from "./StudentRegisterForm";

const ProfilePage = () => {
    const [collegeInfo, setCollegeInfo] = useState(null);
    const [posts, setPosts] = useState([]);
    const [showStudentRegister, setShowStudentRegister] = useState(false);

    const handleCollegeUpdate = (info) => {
        setCollegeInfo(info);
    };

    const handleNewPost = (post) => {
        setPosts([...posts, post]);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                College Profile
            </Typography>

            {/* College Profile Form */}
            <Paper sx={{ p: 2, mb: 3 }}>
                {!collegeInfo ? (
                    <CollegeProfileForm onSubmit={handleCollegeUpdate} />
                ) : (
                    <Box>
                        <Typography variant="h6">{collegeInfo.name}</Typography>
                        <Typography>{collegeInfo.description}</Typography>
                        <Typography>{collegeInfo.location}</Typography>
                    </Box>
                )}
            </Paper>

            {/* Posts Section */}
            <Paper sx={{ p: 2, mb: 3 }}>
                <CollegePosts posts={posts} onNewPost={handleNewPost} />
            </Paper>

            {/* Student Registration */}
            <Paper sx={{ p: 2 }}>
                <Typography variant="h5" gutterBottom>
                    Student Registration
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setShowStudentRegister(!showStudentRegister)}
                >
                    {showStudentRegister ? "Hide Form" : "Register Student"}
                </Button>
                {showStudentRegister && (
                    <StudentRegisterForm collegeInfo={collegeInfo} />
                )}
            </Paper>
        </Box>
    );
};

export default ProfilePage;
