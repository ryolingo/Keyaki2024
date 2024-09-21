import axios from "axios";

// const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiURL = "http://localhost:3000";
export const fetchALLFeedbacks = async () => {
  try {
    const res = await axios.get(`${apiURL}/api/feedback`, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
    console.log("Response data:", res.data);
    return res.data.feedback;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postFeedback = async (comment: string | undefined) => {
  try {
    const res = await axios.post(
      `${apiURL}/api/feedback`,
      {
        comment,
        createdAt: new Date(),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data.feedback;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
