"use client";

// import { DeleteTopicAction } from "./action";

export const TopicCard = ({ topic }) => {
  return (
    <div key={topic.id} className="bg-slate-200 p-2 rounded-lg">
      <h3>{topic.title}</h3>
    </div>
  );
};
