import { useState } from "react";
import CommentCard from "./commen-card";
import CommentReplay from "./comment-replay";

export default function CommentParent() {
  const [reply, setReply] = useState(false);
  return (
    <article className="border-b last:border-b-0 pb-2 last:pb-0">
      <CommentCard setReplay={setReply} />
      <div className="pl-3 sm:pl-6">
        <CommentCard setReplay={setReply} />
      </div>
      {reply && <CommentReplay />}
    </article>
  );
}
