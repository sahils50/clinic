import { prisma } from "../lib/prisma.js";

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const getPostbyId = async (id: string) => {
  return await prisma.post.findUnique({
    where: { id: Number(id) },
    select: { published: true },
  });
};

export const updateView = async (id: string) => {
  return await prisma.post.update({
    where: { id: Number(id) },
    data: {
      viewCount: {
        increment: 1,
      },
    },
  });
};

export const deletePostById = async (id: string) => {
  return await prisma.post.delete({
    where: {
      id: Number(id),
    },
  });
};

export const findDraftById = async (id: string) => {
  return await prisma.post.findMany({
    where: {
      id: Number(id),
      published: false,
    },
  });
};

export const incrementPostView = async (id: string) => {
  return await prisma.post.update({
    where: { id: Number(id) || undefined },
    data: { published: !postData?.published },
  });
};
