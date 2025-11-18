"use server"
import { redirect } from "next/navigation";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from 'next/cache';

export async function createPost(prevState, formData) {
  "use server";
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  let errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title must not be empty");
  }
  if (!content || content.trim().length === 0) {
    errors.push("Content must not be empty");
  }
  if (!image) {
    errors.push("Image must not be empty");
  }

  if (errors.length > 0) {
    return { errors };
  }

  await storePost({ imageUrl: "", title, content, userId });
  redirect("/feed");
}


export async function togglePostLikeStatus(postId){
  updatePostLikeStatus(postId,2)
  revalidatePath('/feed')
}