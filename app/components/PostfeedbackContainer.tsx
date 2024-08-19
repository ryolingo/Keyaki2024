"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { postFeedback } from "../hooks/useFeedback";
import PostFeedback from "./PostFeedback";

const PostfeedbackContainer = () => {
  const router = useRouter();
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await postFeedback(feedback);
    router.refresh();

    setFeedback("");
  };

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(e.target.value);
  };

  return (
    <PostFeedback
      feedback={feedback}
      onFeedbackChange={handleFeedbackChange}
      onSubmit={handleSubmit}
    />
  );
};

export default PostfeedbackContainer;
