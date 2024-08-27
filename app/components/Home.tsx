import { Box, Container, Typography } from "@mui/material";
import FeedbackCard from "./FeedbackCard";
import { PostType } from "../types";
import PostFeedbackContainer from "./PostFeedbackContainer";

type HomeProps = {
  feedbacks: PostType[];
};

const Home: React.FC<HomeProps> = ({ feedbacks }) => {
  return (
    <Container>
      <Typography fontSize={40} display="flex" justifyContent="center">
        欅祭アンケート
      </Typography>
      <PostFeedbackContainer />
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
};

export default Home;
