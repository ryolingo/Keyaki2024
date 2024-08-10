export default async function fetchALLFeedbacks() {
  const res = await fetch(`http://localhost:3000/api/feedback`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.feedback;
}

export const postFeedback = async (comment: string | undefined) => {
  const res = await fetch(`http://localhost:3000/api/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ comment, date: new Date() }),
  });

  return res.json();
};
