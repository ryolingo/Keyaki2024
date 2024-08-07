import Link from "next/link";
import { PostType } from "../types";

async function fetchALLFeedbacks() {
  const res = await fetch(`http://localhost:3000/api/feedback`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.feedback;
}

export default async function Home() {
  const feedbacks = await fetchALLFeedbacks();
  return (
    <main>
      <div>
        <h1>欅祭アンケート</h1>
      </div>
      {/* Link */}
      <div>
        <Link href={"/feedback/add"}>ブログ新規作成</Link>
      </div>

      <div>
        {feedbacks?.map((feedback: PostType) => (
          <div key={feedback.id}>
            <div>
              <h2>{feedback.comment}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
