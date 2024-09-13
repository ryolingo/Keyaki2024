import { Box, Container, Typography } from "@mui/material";
import FeedbackCard from "./FeedbackCard";
import { PostType } from "../types";
import PostFormContainer from "./PostFormContainer";

type HomeProps = {
  feedbacks: PostType[];
};

const Home: React.FC<HomeProps> = ({ feedbacks }) => {
  return (
    <Container>
      <Typography my={3} textAlign="center" fontWeight="bold" fontSize={25}>
        ↓↓感想をおねがいします！↓↓
      </Typography>
      <PostFormContainer />
      <Box
        height="clamp(200px,50vh,400px)"
        marginTop={4}
        sx={{
          overflowY: "auto",
          "::-webkit-scrollbar": {
            display: "none",
          },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
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
