"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { postFeedback } from "../hooks/useFeedback";
import { Box, Button, TextField } from "@mui/material";

const PostFeedback = () => {
  const router = useRouter();
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await postFeedback(feedback);
    router.refresh();

    setFeedback("");
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <Box display={"flex"} flexDirection={"column"} mb={1}>
        <TextField
          sx={{ marginBottom: "20px" }}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="感想を教えてね!"
          multiline
          minRows={3}
        />
      </Box>
      <Box mb={3} justifyContent="center" display={"flex"}>
        <Button variant="contained" type="submit" size="small">
          投稿
        </Button>
      </Box>
    </Box>
  );
};

export default PostFeedback;
