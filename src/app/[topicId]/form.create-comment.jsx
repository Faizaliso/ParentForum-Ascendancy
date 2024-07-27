"use client";

import { newCommentAction } from "./action";
import { useActionState } from "react";

export const CreateCommentForm = ({ topicId }) => {
  const [_, formAction, pending] = useActionState(newCommentAction, null);
  return (
    <form action={formAction} className="space-y-2">
      <input name="topicId" value={topicId} hidden />
      <textarea name="content" placeholder="Write you feedback"></textarea>
      <button disabled={pending}>Reply</button>
    </form>
  );
};
