import NumInput from "./NumInput";
import Calendar from "./Calendar";

export default function Filter({ children }) {
  return (
    <div className="h-30 flex flex-col justify-center gap-x-5 gap-y-3 items-center sm:flex-row">
      {children}
    </div>
  );
}
