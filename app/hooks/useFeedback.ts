const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

export async function fetchALLFeedbacks() {
  const res = await fetch(`${apiUrl}/api/feedback`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.feedbacks;
}

// // export async function postFeedback(comment: string) {
// //   const res = await fetch(`${apiUrl}/api/feedback`, {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify({ comment, createdAt: new Date() }),
// //   });

// //   return res.json();
// // }
