import Comment from "./comment";
import Divider from "./Divider";
import Loading from "./Loading";
import ErrorDisplay from "./ErrorDisplay";

export default function CommentsSection({ items, loading, error }) {
  if (loading) {
    return (
      <div className="bg-base-300 p-5">
        <Divider title={"Comments"} />
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-base-300 p-5">
        <Divider title={"Comments"} />
        <ErrorDisplay message={error.message} />
      </div>
    );
  }

  const commentJsx = items.comments.map((item) => {
    return (
      <div key={item.id}>
        <Comment>{item.comment}</Comment>
        {"reply" in item && <Comment isReply={true}>{item.reply}</Comment>}
      </div>
    );
  });

  return (
    <div className="bg-base-300 p-5">
      <Divider title={"Comments"} />
      {commentJsx}
    </div>
  );
}
