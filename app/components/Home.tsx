import Link from "next/link";
import fetchALLFeedbacks from "../hooks/useFeedback";
import { PostType } from "../types";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

export default async function Home() {
  const feedbacks = await fetchALLFeedbacks();
  return (
    <Container>
      <Typography fontSize={80} display="flex" justifyContent="center">
        欅祭アンケート
      </Typography>
      {/* Link */}

      <div>
        {feedbacks?.map((feedback: PostType) => (
          // <FeedBackCard comment={feedback.comment} createdAt={feedback.cre} />
          <Box
            border={1}
            borderColor="gainsboro"
            padding={3}
            marginBottom={2}
            key={feedback.id}
          >
            <Typography
              component="h2"
              paddingLeft="0px"
              textAlign="left"
              fontSize="13px"
            >
              {feedback.comment}
            </Typography>
            <Typography fontSize="10px">
              {new Date(feedback.createdAt).toLocaleString()}
            </Typography>
          </Box>
        ))}
      </div>
    </Container>
  );
}
