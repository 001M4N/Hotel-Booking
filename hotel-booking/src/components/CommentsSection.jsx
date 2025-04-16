import Comment from "./comment";

export default function CommentsSection() {
  return (
    <div className="bg-base-300 p-5">
      <div className="divider mb-6">
        <h2 className="text-xl font-bold text-center">Comments</h2>
      </div>
      <Comment />
      <Comment isReply="True" />
      <Comment />
      <Comment isReply="True" />
    </div>
  );
}
