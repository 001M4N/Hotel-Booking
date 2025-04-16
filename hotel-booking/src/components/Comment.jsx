import UserImage from "./UserImage";

export default function Comment({ isReply = false }) {
  const indent = isReply ? "ml-20 -mt-5" : "ml-3";
  console.log(isReply);
  const bgColor = isReply ? "bg-slate-950" : "bg-slate-800";

  return (
    <div className={`flex ${indent} my-4`}>
      <UserImage />
      <div
        className={`${bgColor} p-3 mx-w-full rounded-3xl m-3 flex justify-center items-center`}
      >
        <p>This hotel is fantastic.</p>
      </div>
    </div>
  );
}
