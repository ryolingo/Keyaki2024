import axios from "axios";

export default async function fetchALLFeedbacks() {
  try {
    const res = await axios.get(`http://localhost:3000/api/feedback`, {
      headers: {
        "Content-Type": "no-store",
      },
    });
    return res.data.feedback;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const postFeedback = async (comment: string | undefined) => {
  try {
    const res = await axios.post(
      `http://localhost:3000/api/feedback`,
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
