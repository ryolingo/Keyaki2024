import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

export async function fetchALLFeedbacks() {
  const response = await axios.request({
    url: `${apiUrl}/api/feedback`,
    method: "GET",
  });
  return response.data.feedbacks;
}

// export async function postFeedback(comment: string) {
//   const res = await fetch(`${apiUrl}/api/feedback`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ comment, createdAt: new Date() }),
//   });

//   return res.json();
// }
