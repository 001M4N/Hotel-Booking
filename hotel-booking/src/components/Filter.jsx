import Divider from "./Divider";

export default function Filter({ children }) {
  return (
    <>
      <Divider title={"Filters"} />
      <div className="min-h-30 flex flex-col justify-center items-center gap-7 lg:flex-row my-5">
        {children}
      </div>
    </>
  );
}
