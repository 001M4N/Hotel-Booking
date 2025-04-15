export default function NumInput() {
  return (
    <div className="m-2">
      <button className="btn btn-lg bg-slate-600 h-7 mx-1 w-12">-</button>
      <select className="select select-ghost bg-slate-600 h-7 mx-2 w-40">
        <option>1 adult</option>
        <option>2 adults</option>
        <option>3 adults</option>
        <option>4 adults</option>
        <option>4 adults, 1 Child</option>
      </select>
      <button className="btn btn-lg bg-slate-600 h-7 mx-1 w-12">+</button>
    </div>
  );
}
