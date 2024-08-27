"use client";
import React, { useEffect, useState } from "react";
import fetchALLFeedbacks from "../hooks/useFeedback"; // 修正
import Home from "./Home";
import { PostType } from "../types";

const HomeContainer = () => {
  const [feedbacks, setFeedbacks] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const data = await fetchALLFeedbacks();
      setFeedbacks(data);
    };

    fetchFeedbacks();
  }, []);

  return <Home />;
};

export default HomeContainer;
