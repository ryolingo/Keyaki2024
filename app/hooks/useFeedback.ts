export default async function fetchALLFeedbacks() {
  const res = await fetch(`http://localhost:3000/api/feedback`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.feedback;
}
