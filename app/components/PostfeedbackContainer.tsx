"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { postFeedback } from "../hooks/useFeedback";
import PostFeedbackUI from "./PostFeedback";

const PostFeedback = () => {
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
    <PostFeedbackUI
      feedback={feedback}
      onFeedbackChange={handleFeedbackChange}
      onSubmit={handleSubmit}
    />
  );
};

export default PostFeedback;
