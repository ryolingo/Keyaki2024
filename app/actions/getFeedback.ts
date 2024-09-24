import prisma from "../../lib/prisma";

const getFeedback = async () => {
  try {
    const response = await prisma.feedback.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default getFeedback;
