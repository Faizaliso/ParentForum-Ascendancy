"use client";

// import { DeleteTopicAction } from "./action";

export const TopicCard = ({ topic }) => {
  return (
    <div key={topic.id} className="p-4 border border-slate-200 rounded-lg">
      <h3>{topic.title}</h3>
      {/* <form action={DeleteTopicAction(topic.id)}>
        <button>Delete</button>
      </form> */}
    </div>
  );
};
