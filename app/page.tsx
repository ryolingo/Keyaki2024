import getFeedback from "./actions/getFeedback";
import Home from "./components/Home";

const page = async () => {
  const feedbacks = await getFeedback();
  console.log(feedbacks);
  if (!feedbacks) return <div>loading...</div>;

  return <Home feedbacks={feedbacks} />;
};

export default page;
