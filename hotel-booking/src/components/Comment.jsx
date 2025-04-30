import UserImage from "./UserImage";

export default function Comment({ children, isReply = false }) {
  const indent = isReply ? "ml-5 mb-5 -mt-3" : "mb-5";
  const color = isReply ? "chat-bubble-neutral" : "chat-bubble-primary";

  return (
    <div className={`chat chat-start ${indent}`}>
      <div className={`h-10 chat-bubble ${color}`}>{children}</div>
    </div>
  );
}
