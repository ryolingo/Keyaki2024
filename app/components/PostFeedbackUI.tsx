import { Box, Button, TextField } from "@mui/material";
import React from "react";

type PostFeedbackUIProps = {
  feedback: string;
  onFeedbackChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
};

const PostFeedbackUI: React.FC<PostFeedbackUIProps> = ({
  feedback,
  onFeedbackChange,
  onSubmit,
}) => {
  return (
    <Box component={"form"} onSubmit={onSubmit}>
      <Box display={"flex"} flexDirection={"column"} mb={1}>
        <TextField
          sx={{ marginBottom: "20px" }}
          value={feedback}
          onChange={onFeedbackChange}
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

export default PostFeedbackUI;
