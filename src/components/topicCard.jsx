"use client";

import Link from "next/link";

// import { DeleteTopicAction } from "./action";

export const TopicCard = ({ topic }) => {
  return (
    <div key={topic.id} className="p-4 border border-slate-200 rounded-lg">
      <Link href={`${topic.id}`}>
        <h3>{topic.title}</h3>
      </Link>
      <p>{topic.user.name}</p>
      {/* <form action={DeleteTopicAction(topic.id)}>
        <button>Delete</button>
      </form> */}
    </div>
  );
};
