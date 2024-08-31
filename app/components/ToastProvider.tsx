"use client";

import "react-toastify/dist/ReactToastify.css";
import { Flip, ToastContainer } from "react-toastify";

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
