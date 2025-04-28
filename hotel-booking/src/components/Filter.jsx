import NumInput from "./NumInput";
import Calendar from "./Calendar";

export default function Filter({ children }) {
  return (
    <div className="w-full h-50 bg-base-300 flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
