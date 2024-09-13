"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { postFeedback } from "../hooks/useFeedback";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PostForm from "./PostForm";

const PostFormContainer = () => {
  const router = useRouter();
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const toastID = toast.info("投稿中...");

    try {
      await postFeedback(feedback);

      toast.dismiss(toastID);

      router.refresh();
      setFeedback("");
      toast.success("投稿が完了しました！");
    } catch (error) {
      toast.error("投稿に失敗しました。再度お試しください。");
    }
  };

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(e.target.value);
  };

  return (
    <>
      <PostForm
        feedback={feedback}
        onFeedbackChange={handleFeedbackChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default PostFormContainer;
