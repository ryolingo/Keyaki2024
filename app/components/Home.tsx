import fetchALLFeedbacks from "../hooks/useFeedback";
import { PostType } from "../types";
import { Box, Container, Typography } from "@mui/material";
import FeedbackCard from "./FeedbackCard";

export default async function Home() {
  const feedbacks = await fetchALLFeedbacks();
  return (
    <Container>
      <Typography fontSize={40} display="flex" justifyContent="center">
        欅祭アンケート
      </Typography>
      {/* Link */}

      <Box>
        {feedbacks?.map((feedback: PostType) => (
          <FeedbackCard
            comment={feedback.comment}
            createdAt={feedback.createdAt}
            key={feedback.id}
          />
        ))}
      </Box>
    </Container>
  );
}
