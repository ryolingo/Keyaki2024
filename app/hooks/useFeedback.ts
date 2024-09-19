import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchALLFeedbacks = async () => {
  try {
    const res = await axios.get(`${apiUrl}/api/feedback`, {
      headers: {
        "Cashe-Control": "no-store",
      },
    });
    return res.data.feedback;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postFeedback = async (comment: string | undefined) => {
  try {
    const res = await axios.post(
      `${apiUrl}/api/feedback`,
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
