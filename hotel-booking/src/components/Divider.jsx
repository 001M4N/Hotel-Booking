export default function Divider({ title, line = false }) {
  return line ? (
    <div className="divider mb-6"></div>
  ) : (
    <div className="divider mb-6">
      <h2 className="text-xl font-bold text-center">{title}</h2>
    </div>
  );
}
