export default function Filter({ children }) {
  return (
    <div className="h-30 flex flex-col justify-center gap-5 items-center sm:flex-row my-5">
      {children}
    </div>
  );
}
