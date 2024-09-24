import Home from "./Home";
import getFeedback from "../actions/getFeedback";

const HomeContainer = async () => {
  const feedbacks = await getFeedback();
  if (!feedbacks) return <div>loading...</div>;

  return <Home feedbacks={feedbacks} />;
};

export default HomeContainer;
