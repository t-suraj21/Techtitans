import React, { useState } from "react";
import { TextField, Button, List, ListItem, ListItemText, Box } from "@mui/material";
import { Typography } from '@mui/material';


const CollegePosts = ({ posts, onNewPost }) => {
    const [newPost, setNewPost] = useState("");

    const handlePostSubmit = () => {
        onNewPost(newPost);
        setNewPost("");
    };

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                College Posts
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <TextField
                    label="New Post"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    fullWidth
                />
                <Button variant="contained" onClick={handlePostSubmit}>
                    Post
                </Button>
            </Box>
            <List>
                {posts.map((post, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={post} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default CollegePosts;
