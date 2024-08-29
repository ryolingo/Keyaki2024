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
      <Typography
        marginTop={3}
        marginBottom={3}
        fontSize={30}
        textAlign="center"
        fontWeight="bold"
        sx={{
          fontSize: {
            md: "30px",
          },
        }}
      >
        ↓↓感想をおねがいします！↓↓
      </Typography>
      <PostFeedbackContainer />
      <Box
        sx={{
          marginTop: 4,
          height: "clamp(200px,50vh,400px)",
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
