"use client";

import Link from "next/link";

// import { DeleteTopicAction } from "./action";

export const TopicCard = ({ topic }) => {
  return (
    <div
      key={topic.id}
      className="flex flex-col gap-2 p-4 bg-slate-200 rounded-lg"
    >
      <div className="unsolved">
        <p className=" text-[10px] font-medium text-rose-500">UNSOLVED</p>
      </div>
      <Link href={`${topic.id}`}>
        <h2>{topic.title}</h2>
      </Link>
      <div className="flex gap-4">
        <p>by {topic.user.name}</p>
        <p>
          {topic.comments
            ? `${topic.comments.flat().length} Replies`
            : "0 Replies"}
        </p>
      </div>
      {/* <form action={DeleteTopicAction(topic.id)}>
        <button>Delete</button>
      </form> */}
    </div>
  );
};
