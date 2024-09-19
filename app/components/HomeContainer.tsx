import { fetchALLFeedbacks } from "../hooks/useFeedback";
import Home from "./Home";

const HomeContainer = async () => {
  const feedbacks = await fetchALLFeedbacks();

  return <Home feedbacks={feedbacks} />;
};

export default HomeContainer;
