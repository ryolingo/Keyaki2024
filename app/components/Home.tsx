import Link from "next/link";
import fetchALLFeedbacks from "../hooks/useFeedback";
import { PostType } from "../types";
import { Card, CardContent, Container, Typography } from "@mui/material";

export default async function Home() {
  const feedbacks = await fetchALLFeedbacks();
  return (
    <Container>
      <Typography>
        <h1>欅祭アンケート</h1>
      </Typography>
      {/* Link */}

      <Link href={"/feedback"}>
        <Typography>ブログ新規作成</Typography>
      </Link>

      <Typography>
        {feedbacks?.map((feedback: PostType) => (
          <Typography style={{ marginBottom: "60px" }} key={feedback.id}>
            <Card
              sx={{
                border: "2px solid darkgray ",
                boxShadow: "none",
                borderRadius: "8px",
                "&:hover": {
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    paddingLeft: "0px",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                >
                  {feedback.comment}
                </Typography>
                <Typography fontSize="13px" sx={{ paddingLeft: "0" }}>
                  {new Date(feedback.createdAt).toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Typography>
        ))}
      </Typography>
    </Container>
  );
}
