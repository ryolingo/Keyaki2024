import Home from "./components/Home";
import fetchALLFeedbacks from "./hooks/useFeedback";

const HomeContainer = async () => {
  const feedbacks = await fetchALLFeedbacks();
  console.log(feedbacks);
  if (!feedbacks) return <div>loading...</div>;

  return <Home feedbacks={feedbacks} />;
};

export default HomeContainer;
