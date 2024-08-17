import { Box, Typography } from "@mui/material";
import { FC } from "react";

type FeedbackCardProps = {
  comment: string;
  createdAt: string;
};

const FeedbackCard: React.FC<FeedbackCardProps> = ({ comment, createdAt }) => {
  return (
    <Box border={1} borderColor="gainsboro" padding={3} marginBottom={2}>
      <Typography component="h2" textAlign="left" fontSize="13px">
        {comment}
      </Typography>
      <Typography fontSize="10px">
        {new Date(createdAt).toLocaleString()}
      </Typography>
    </Box>
  );
};

export default FeedbackCard;
