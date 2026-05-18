export default function InfoCard({ badge, title, children }) {
  return (
    <article className="card">
      <span className="badge">{badge}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
