import { Box, Typography } from "@mui/material";

interface FeedbackCardProps {
  comment: string;
  createdAt: string;
}

export default function FeedbackCard({
  comment,
  createdAt,
}: FeedbackCardProps) {
  return (
    <Box border={1} borderColor="gainsboro" padding={3} marginBottom={2}>
      <Typography
        component="h2"
        paddingLeft="0px"
        textAlign="left"
        fontSize="13px"
      >
        {comment}
      </Typography>
      <Typography fontSize="10px">
        {new Date(createdAt).toLocaleString()}
      </Typography>
    </Box>
  );
}
