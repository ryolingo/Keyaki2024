"use client";
import fetchALLFeedbacks from "../hooks/useFeedback"; // 修正
import Home from "./Home";

const HomeContainer = async () => {
  const feedbacks = await fetchALLFeedbacks();

  return <Home feedbacks={feedbacks} />;
};

export default HomeContainer;
