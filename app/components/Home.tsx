import fetchALLFeedbacks from "../hooks/useFeedback";
import { Box, Container, Typography } from "@mui/material";
import FeedbackCard from "./FeedbackCard";
import PostFeedback from "./PostfeedbackContainer";
import { PostType } from "../types";

export default async function Home() {
  const feedbacks = await fetchALLFeedbacks();
  return (
    <Container>
      <Typography fontSize={40} display="flex" justifyContent="center">
        欅祭アンケート
      </Typography>
      <PostFeedback />
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
