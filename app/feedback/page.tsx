"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { postFeedback } from "../hooks/useFeedback";

const Postfeedback = () => {
  const router = useRouter();
  const feedbackRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(feedbackRef.current?.value);

    await postFeedback(feedbackRef.current?.value);
    router.push("/");
    router.refresh();
  };

  return (
    <>
      <div>
        <div>
          <p>ブログ新規作成 🚀</p>
          <form onSubmit={handleSubmit}>
            <textarea ref={feedbackRef} placeholder="記事詳細を入力"></textarea>
            <button className="font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto hover:bg-slate-100">
              投稿
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Postfeedback;
