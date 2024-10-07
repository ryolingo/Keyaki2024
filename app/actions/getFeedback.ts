import prisma from "../../lib/prisma";

const getFeedback = async () => {
  try {
    const feedbacks = await prisma.feedback.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return feedbacks;
  } catch (error) {
    console.error(error);
  }
};

export default getFeedback;
